import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CountryList } from '../../components/CountryList'
import { AppSpinner } from '../../components/AppSpinner'

import { fetchCountries } from './question2Slice'

export const Question2 = () => {
  const dispatch = useDispatch()
  const { isLoading, error, countries } = useSelector(state => state.question2)
  const search = ['Germany', 'Israel', 'Malta', 'United States']

  useEffect(() => {
    if (!countries) {
      dispatch(fetchCountries(search))
    }
  }, [])

  return (
    <div>
      <h3>Question 2</h3>
      <div>Search countries: '{[...search].join(', ')}'</div>
      {isLoading ? (
        <AppSpinner text="Loading countries, please wait..." />
      ) : (
        countries && (
          <div>
            <b>Search results</b>
            <CountryList countries={countries} />
          </div>
        )
      )}
    </div>
  )
}
