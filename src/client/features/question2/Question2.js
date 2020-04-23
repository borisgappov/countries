import React, { useEffect } from 'react';
import { fetchCountries } from './question2Slice';
import { useSelector, useDispatch } from 'react-redux';
import './Question2.css'

const Question2 = () => {
  const dispatch = useDispatch();

  const { isLoading, error, country } = useSelector((state) => state.question2);

  const countries = ['Germany', 'Israel', 'Malta', 'United States'];

  useEffect(() => {
    dispatch(fetchCountries(countries));
  }, []);

  return (
    <div>
      <h2>Question 2</h2>
      <div>Search countries: '{[...countries].join(', ')}'</div>
      {isLoading ? (
        <span>Loading countries, please wait...</span>
      ) : (
          country && (
            <div>
              <h5>Search results</h5>
              {country && country.map((x) => (
                <div className="coutry" key={x.alpha3Code}>
                  <div><img src={x.flag} width="30px" /></div>
                  <div>{x.name}</div>
                </div>
              ))}
            </div>
          )
        )}
    </div>
  );
};

export default Question2;
