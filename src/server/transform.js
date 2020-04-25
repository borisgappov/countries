const { promisify } = require('util')
const { brotliDecompress, brotliCompress } = require('zlib')

const through2 = require('through2')
const decode = promisify(brotliDecompress)
const encode = promisify(brotliCompress)

const getTransforms = req => {
  if (!req.query.countries) {
    return
  }

  let countries = req.query.countries
    .split(',')
    .map(x => x.trim())
    .filter(x => !!x)

  if (!countries.length) {
    return null
  }

  return [
    {
      name: 'filter',
      transform: function() {
        let chunks = []
        return through2(
          function(chunk, enc, cb) {
            chunks.push(chunk)
            cb()
          },
          async function(cb) {
            let all = Buffer.concat(chunks)
            let decoded = null

            await decode(all)
              .then(buf => {
                decoded = buf.toString()
              })
              .catch(err => {
                console.error('An error occurred:', err)
                process.exitCode = 1
              })

            let items = JSON.parse(decoded)

            items = items.filter(x => !!countries.find(c => x.name.toLowerCase().indexOf(c.toLowerCase()) >= 0))

            let encoded = null
            await encode(Buffer.from(JSON.stringify(items)))
              .then(buf => {
                encoded = buf
              })
              .catch(err => {
                console.error('An error occurred:', err)
                process.exitCode = 1
              })

            this.push(encoded)
            chunks = []
            cb()
          },
        )
      },
    },
  ]
}

module.exports = getTransforms
