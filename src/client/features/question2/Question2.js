import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountryList from '../../components/CountryList';
import { fetchCountries } from './question2Slice';

const Question2 = () => {
  const dispatch = useDispatch();
  const { isLoading, error, countries } = useSelector((state) => state.question2);
  const search = ['Germany', 'Israel', 'Malta', 'United States'];

  useEffect(() => {
    dispatch(fetchCountries(search));
  }, []);

  return (
    <div>
      <h3>Question 2</h3>
      <div>Search countries: '{[...search].join(', ')}'</div>
      {isLoading ? (
        <span>Loading countries, please wait...</span>
      ) : (
          countries && (
            <div>
              <b>Search results</b>
              <CountryList countries={countries} />
            </div>
          )
        )}
    </div>
  );
};

export default Question2;
