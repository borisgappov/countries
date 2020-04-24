import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CountryList from '../../components/CountryList';
import { fetchCountries, setSearch } from './question3Slice';
import Form from 'react-bootstrap/Form';


const Question3 = () => {
  const dispatch = useDispatch();

  const { isLoading, error, countries, search } = useSelector((state) => state.question3);

  useEffect(() => {
    dispatch(fetchCountries([search]));
  }, [search]);

  const handleChange = (event) => {
    dispatch(setSearch(event.target.value));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div>
      <h2>Question 3</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Search by name</Form.Label>
          <Form.Control type="text" name="name" value={search} onChange={handleChange} />
        </Form.Group>
      </Form>
      {isLoading ? (
        <span>Loading countries, please wait...</span>
      ) : (
          countries && (
            <div>
              <h5>Search results</h5>
              <CountryList countries={countries} />
            </div>
          )
        )}
    </div>
  );
};

export default Question3;
