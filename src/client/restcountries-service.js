import * as restCountries from './restcountries-client/index';

let instance = new restCountries.RestApi();
instance.apiClient.basePath = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : ''}/countries`;

export let apiInstance = instance;
