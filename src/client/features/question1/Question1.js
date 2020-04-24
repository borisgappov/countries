import React, { useEffect } from 'react';
import { fetchCountry } from './question1Slice';
import { useSelector, useDispatch } from 'react-redux';
import CountryDetails from '../../components/CountryDetails'
import Card from 'react-bootstrap/Card';

const Question1 = () => {
  const dispatch = useDispatch();

  const { isLoading, error, country } = useSelector((state) => state.question1);

  const countryName = 'Malta';

  useEffect(() => {
    dispatch(fetchCountry(countryName));
  }, [countryName]);

  let renderedCountry = isLoading ? (
    <span>Loading country "{countryName}", please wait...</span>
  ) : (
    country && (
      <div>
        <b>Search result</b>
        <Card className="p-3">
          <CountryDetails country={country} />
        </Card>
      </div>
    )
  );

  return (
    <div>
      <h3>Question 1</h3>
      <div>Search country: '{countryName}'</div>
      {renderedCountry}
    </div>
  );
};

export default Question1;
