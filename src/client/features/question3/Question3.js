import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Question3.css';
import { fetchCountries, setSearch } from './question3Slice';

const Question3 = () => {
  const dispatch = useDispatch();

  const { isLoading, error, countries, search } = useSelector((state) => state.question3);

  useEffect(() => {
    dispatch(fetchCountries([search]));
  }, [search]);

  const handleChange = (event) => {
    dispatch(setSearch(event.target.value));
  }

  return (
    <div>
      <h2>Question 3</h2>
      <form className="search-form">
        <label>
          Search by name:
          <input type="text" name="name" value={search} onChange={handleChange} />
        </label>
      </form>
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

export default Question3;
