import { createSlice } from '@reduxjs/toolkit'

import { getCountries } from '../core'

const question2Slice = createSlice({
  name: 'question2',
  initialState: {
    isLoading: false,
    error: null,
    countries: null,
  },
  reducers: {
    getCountriesStart: state => {
      state.isLoading = true
    },
    getCountriesSuccess(state, { payload }) {
      state.countries = payload
      state.isLoading = false
      state.error = null
    },
    getCountriesFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

const { getCountriesStart, getCountriesSuccess, getCountriesFailure } = question2Slice.actions

export const fetchCountries = countries => async dispatch => {
  try {
    dispatch(getCountriesStart())
    const data = await getCountries(countries)
    dispatch(getCountriesSuccess(data))
  } catch (err) {
    dispatch(getCountriesFailure(err.toString()))
  }
}

export const question2Reducer = question2Slice.reducer
