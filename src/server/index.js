/* eslint-disable no-console */

const express = require('express')
const httpProxy = require('http-proxy')

const { countriesMiddleware, cache, getKey, filterCountries } = require('./countries-middleware')

const proxy = httpProxy.createProxyServer({
  secure: false,
  changeOrigin: true,
})

const app = express()

app.use(express.static('dist'))

app.use(
  '/countries/rest/v2/:name/:param?',
  (req, res, next) => {
    let key = getKey(req)
    let result = cache.has(key) && cache.get(key)
    if (result) {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Headers', 'Accept, X-Requested-With')
      res.header('Access-Control-Allow-Methods', 'GET')
      res.status(200).json(filterCountries(req, result))
    } else {
      proxy.web(req, res, {
        target: `https://restcountries.eu/rest/v2/${req.params.name}/${req.params.param ? req.params.param : ''}`,
      })
    }
    next()
  },
  countriesMiddleware,
)

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`))
