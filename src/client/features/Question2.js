import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppSpinner, CountryList } from '../components'
import { fetchCountries } from '../reducers/question2Slice'
import { setError } from '../reducers/commonSlice'

export const Question2 = () => {
  const dispatch = useDispatch()
  const { isLoading, error, countries } = useSelector(state => state.question2)
  const search = ['Germany', 'Israel', 'Malta', 'United States']

  useEffect(() => {
    if (!countries) dispatch(fetchCountries(search))
    if (error) dispatch(setError(error))
  }, [error])

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
