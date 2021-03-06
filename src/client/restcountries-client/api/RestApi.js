/**
 * Restcountries
 * API for restcountries.eu
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GetAll from '../model/GetAll';

/**
* Rest service.
* @module api/RestApi
* @version 1.0.0
*/
export default class RestApi {

    /**
    * Constructs a new RestApi. 
    * @alias module:api/RestApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getAll operation.
     * @callback module:api/RestApi~getAllCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAll>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All
     * @param {module:api/RestApi~getAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetAll>}
     */
    getAll(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetAll];
      return this.apiClient.callApi(
        '/rest/v2/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getByAlphacode operation.
     * @callback module:api/RestApi~getByAlphacodeCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAll>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get By Alphacode
     * @param {String} alphacode alphacode
     * @param {module:api/RestApi~getByAlphacodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetAll>}
     */
    getByAlphacode(alphacode, callback) {
      let postBody = null;
      // verify the required parameter 'alphacode' is set
      if (alphacode === undefined || alphacode === null) {
        throw new Error("Missing the required parameter 'alphacode' when calling getByAlphacode");
      }

      let pathParams = {
        'alphacode': alphacode
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetAll];
      return this.apiClient.callApi(
        '/rest/v2/alpha/{alphacode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getByCapital operation.
     * @callback module:api/RestApi~getByCapitalCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAll>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get By Capital
     * @param {String} capital capital
     * @param {module:api/RestApi~getByCapitalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetAll>}
     */
    getByCapital(capital, callback) {
      let postBody = null;
      // verify the required parameter 'capital' is set
      if (capital === undefined || capital === null) {
        throw new Error("Missing the required parameter 'capital' when calling getByCapital");
      }

      let pathParams = {
        'capital': capital
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetAll];
      return this.apiClient.callApi(
        '/rest/v2/capital/{capital}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getByCountryName operation.
     * @callback module:api/RestApi~getByCountryNameCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAll>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get By Country Name
     * @param {String} name CountryName
     * @param {module:api/RestApi~getByCountryNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetAll>}
     */
    getByCountryName(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getByCountryName");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetAll];
      return this.apiClient.callApi(
        '/rest/v2/name/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getByCurrency operation.
     * @callback module:api/RestApi~getByCurrencyCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAll>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get By Currency
     * @param {String} currency currency
     * @param {module:api/RestApi~getByCurrencyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetAll>}
     */
    getByCurrency(currency, callback) {
      let postBody = null;
      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling getByCurrency");
      }

      let pathParams = {
        'currency': currency
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetAll];
      return this.apiClient.callApi(
        '/rest/v2/currency/{currency}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getByLang operation.
     * @callback module:api/RestApi~getByLangCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAll>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get By Language
     * @param {String} lang lang
     * @param {module:api/RestApi~getByLangCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetAll>}
     */
    getByLang(lang, callback) {
      let postBody = null;
      // verify the required parameter 'lang' is set
      if (lang === undefined || lang === null) {
        throw new Error("Missing the required parameter 'lang' when calling getByLang");
      }

      let pathParams = {
        'lang': lang
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetAll];
      return this.apiClient.callApi(
        '/rest/v2/lang/{lang}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getByRegion operation.
     * @callback module:api/RestApi~getByRegionCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GetAll>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get By Region
     * @param {String} region Region
     * @param {module:api/RestApi~getByRegionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GetAll>}
     */
    getByRegion(region, callback) {
      let postBody = null;
      // verify the required parameter 'region' is set
      if (region === undefined || region === null) {
        throw new Error("Missing the required parameter 'region' when calling getByRegion");
      }

      let pathParams = {
        'region': region
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetAll];
      return this.apiClient.callApi(
        '/rest/v2/region/{region}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
