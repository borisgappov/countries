import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'

import { AppSpinner } from '../../components/AppSpinner'
import { CountryList } from '../../components/CountryList'

import { fetchCountries, setSearch } from './question3Slice'

export const Question3 = () => {
  const dispatch = useDispatch()

  const { isLoading, error, countries, search } = useSelector(state => state.question3)

  useEffect(() => {
    if (search && search.length) {
      dispatch(fetchCountries([search]))
    }
  }, [search])

  const handleChange = event => {
    dispatch(setSearch(event.target.value))
  }

  const handleSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
  }

  return (
    <Wrapper>
      <h2>Question 3</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Search by name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={search}
            onChange={handleChange}
            placeholder="Enter country name"
          />
        </Form.Group>
      </Form>
      {isLoading ? (
        <AppSpinner text="Loading countries, please wait..." />
      ) : (
        countries && (
          <div>
            <h5>Search results</h5>
            <CountryList countries={countries} />
          </div>
        )
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 350px;
`
