import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'
import styled from 'styled-components'

import { CountryList, AppSpinner } from '../components'
import { fetchCountries, setSearch } from '../reducers/question3Slice'
import { setError } from '../reducers/commonSlice'

export const Question3 = () => {
  const dispatch = useDispatch()

  const { isLoading, error, countries, search, lastLoadedFor } = useSelector(state => state.question3)

  useEffect(() => {
    if (search && search.length && search != lastLoadedFor) dispatch(fetchCountries([search]))
    if (error) dispatch(setError(error))
  }, [search, error])

  const handleChange = event => {
    if (event.target.value !== search) {
      dispatch(setSearch(event.target.value))
    }
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
