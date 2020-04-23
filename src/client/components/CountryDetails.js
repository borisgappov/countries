import React from 'react';
import './CountryDetails.css';

const CountryDetails = (props) => {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{props.country.name}</dd>
      <dt>Native Name</dt>
      <dd>{props.country.nativeName}</dd>
      <dt>Capital</dt>
      <dd>{props.country.capital}</dd>
      <dt>Region</dt>
      <dd>{props.country.region}</dd>
      <dt>Sub region</dt>
      <dd>{props.country.subregion}</dd>
      <dt>Population</dt>
      <dd>{props.country.population}</dd>
      <dt>Currencies</dt>
      <dd className='currency'>
        {props.country.currencies &&
          props.country.currencies.map((x) => (
            <div key={x.code}>
              <span className='label'>
                {x.code}, {x.symbol}
              </span>{' '}
                  - {x.name}
            </div>
          ))}
      </dd>
      <dt>Alpha 3 code</dt>
      <dd>{props.country.alpha3Code}</dd>
      <dt>Flag</dt>
      <dd><img src={props.country.flag} width="200px" /></dd>
    </dl>
  );
};

export default CountryDetails;


