import * as restCountries from '../restcountries-client/index'
import GetAll from '../restcountries-client/model/GetAll'

const instance = new restCountries.RestApi()

instance.apiClient.basePath = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : ''}/countries`

instance.getAll = function(queryParams, callback) {
  return instance.apiClient.callApi.call(
    instance.apiClient,
    '/rest/v2/all',
    'GET',
    {},
    queryParams,
    {},
    {},
    null,
    [],
    [],
    ['application/json'],
    [GetAll],
    null,
    callback,
  )
}

export const getCountry = countryName => {
  return new Promise((resolve, reject) => {
    instance.getByCountryName(countryName, (error, data, response) => {
      if (error) {
        reject(error)
      } else {
        resolve(fixNonSerializable(data[0]))
      }
    })
  })
}

export const getCountries = countries => {
  return new Promise((resolve, reject) => {
    instance.getAll(
      {
        countries: countries.join(','),
      },
      (error, data, response) => {
        if (error) {
          reject(error)
        } else {
          resolve(fixNonSerializable(data))
        }
      },
    )
  })
}

const fixNonSerializable = data => {
  return JSON.parse(JSON.stringify(data))
}
