import React, { useEffect } from 'react';
import { fetchCountry } from './question1Slice';
import { useSelector, useDispatch } from 'react-redux';
import './question1.css';

const Question1 = () => {
  const dispatch = useDispatch();

  const { isLoading, error, country } = useSelector((state) => state.question1);

  const countryName = 'USA';

  useEffect(() => {
    dispatch(fetchCountry(countryName));
  }, [countryName, dispatch]);

  let renderedCountry = isLoading ? (
    <span>Loading country "{countryName}", please wait...</span>
  ) : (
    country && (
      <div>
        <h3>Contry data</h3>
        <dl>
          <dt>Name</dt>
          <dd>{country.name}</dd>
          <dt>Native Name</dt>
          <dd>{country.nativeName}</dd>
          <dt>Capital</dt>
          <dd>{country.capital}</dd>
          <dt>Region</dt>
          <dd>{country.region}</dd>
          <dt>Sub region</dt>
          <dd>{country.subregion}</dd>
          <dt>Population</dt>
          <dd>{country.population}</dd>
          <dt>Currencies</dt>
          <dd className='currency'>
            {country.currencies &&
              country.currencies.map((x) => (
                <div key={x.code}>
                  <span className='label'>
                    {x.code}, {x.symbol}
                  </span>{' '}
                  - {x.name}
                </div>
              ))}
          </dd>
          <dt>Alpha 3 code</dt>
          <dd>{country.alpha3Code}</dd>
          <dt>Flag</dt>
          <dd><img src={country.flag} width="200px" /></dd>
        </dl>
      </div>
    )
  );

  return (
    <div>
      <h2>Question 1</h2>
      {renderedCountry}
    </div>
  );
};

export default Question1;
