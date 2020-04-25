const { promisify } = require('util')
const { brotliDecompress, brotliCompress } = require('zlib')

const NodeCache = require('node-cache')

const decode = promisify(brotliDecompress)
const encode = promisify(brotliCompress)

const cache = new NodeCache({ stdTTL: 100, checkperiod: 120 })

const getKey = req => req.originalUrl.split('?').shift()

const filterCountries = (req, items) => {
  let countries =
    req.query && req.query.countries
      ? req.query.countries
          .split(',')
          .map(x => x.trim())
          .filter(x => !!x)
      : null

  return countries
    ? items.filter(x => !!countries.find(c => x.name.toLowerCase().indexOf(c.toLowerCase()) >= 0))
    : items
}

const countriesMiddleware = async (req, res) => {
  let oldWrite = res.write,
    oldEnd = res.end,
    chunks = [],
    decoded = null,
    encoded = null,
    items = null

  res.write = chunk => chunks.push(chunk)

  res.end = async chunk => {
    if (chunk) chunks.push(chunk)

    await decode(Buffer.concat(chunks))
      .then(buf => (decoded = buf.toString()))
      .catch(err => {
        console.error('An error occurred:', err)
        process.exitCode = 1
      })

    items = JSON.parse(decoded)

    let key = getKey(req)
    if (!cache.has(key)) {
      cache.set(key, items)
    }

    items = filterCountries(req, items)

    await encode(Buffer.from(JSON.stringify(items)))
      .then(buf => (encoded = buf))
      .catch(err => {
        console.error('An error occurred:', err)
        process.exitCode = 1
      })
    oldEnd.call(res, encoded)
  }
}

module.exports = { countriesMiddleware, cache, getKey, filterCountries }
