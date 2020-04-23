import React, { useEffect } from 'react';
import { fetchCountries } from './question2Slice';
import { useSelector, useDispatch } from 'react-redux';
import './Question2.css'

const Question2 = () => {
  const dispatch = useDispatch();

  const { isLoading, error, countries } = useSelector((state) => state.question2);

  const search = ['Germany', 'Israel', 'Malta', 'United States'];

  useEffect(() => {
    dispatch(fetchCountries(search));
  }, []);

  return (
    <div>
      <h2>Question 2</h2>
      <div>Search countries: '{[...search].join(', ')}'</div>
      {isLoading ? (
        <span>Loading countries, please wait...</span>
      ) : (
          countries && (
            <div>
              <h5>Search results</h5>
              {countries && countries.map((x) => (
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
