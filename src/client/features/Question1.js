import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

import { AppSpinner, CountryDetails } from '../components'
import { fetchCountry } from '../reducers/question1Slice'
import { setError } from '../reducers/commonSlice'

export const Question1 = () => {
  const dispatch = useDispatch()

  const { isLoading, error, country } = useSelector(state => state.question1)

  const countryName = 'Malta'

  useEffect(() => {
    if (!country) dispatch(fetchCountry(countryName))
    if (error) dispatch(setError(error))
  }, [error])

  let renderedCountry = isLoading ? (
    <AppSpinner text="Loading country details, please wait..." />
  ) : (
    country && (
      <div>
        <b>Search result</b>
        <StyledCard>
          <CountryDetails country={country} />
        </StyledCard>
      </div>
    )
  )

  return (
    <Wrapper>
      <h3>Question 1</h3>
      <div>Search country: '{countryName}'</div>
      {renderedCountry}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 350px;
`

const StyledCard = styled(Card)`
  padding: 15px;
`
