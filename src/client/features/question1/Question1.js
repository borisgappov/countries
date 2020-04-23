import React, { useEffect } from 'react';
import { fetchCountry } from './question1Slice';
import { useSelector, useDispatch } from 'react-redux';
import CountryDetails from '../../components/CountryDetails'

const Question1 = () => {
  const dispatch = useDispatch();

  const { isLoading, error, country } = useSelector((state) => state.question1);

  const countryName = 'USA';

  useEffect(() => {
    dispatch(fetchCountry(countryName));
  }, [countryName]);

  let renderedCountry = isLoading ? (
    <span>Loading country "{countryName}", please wait...</span>
  ) : (
    country && (
      <div>
        <h5>Search result</h5>
        <CountryDetails country={country} />
      </div>
    )
  );

  return (
    <div>
      <h2>Question 1</h2>
      <div>Search country: '{countryName}'</div>
      {renderedCountry}
    </div>
  );
};

export default Question1;
