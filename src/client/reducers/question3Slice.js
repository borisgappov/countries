import { createSlice } from '@reduxjs/toolkit'

import { getCountries } from '../core'

const question3Slice = createSlice({
  name: 'question3',
  initialState: {
    isLoading: false,
    error: null,
    countries: null,
    search: 'mal',
    lastLoadedFor: null,
  },
  reducers: {
    getCountriesStart: state => {
      state.isLoading = true
    },
    getCountriesSuccess(state, { payload }) {
      state.countries = payload
      state.isLoading = false
      state.error = null
      state.lastLoadedFor = state.search
    },
    getCountriesFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
  },
})

export const { getCountriesStart, getCountriesSuccess, getCountriesFailure, setSearch } = question3Slice.actions

export const fetchCountries = countries => async dispatch => {
  try {
    dispatch(getCountriesStart())
    const data = await getCountries(countries)
    dispatch(getCountriesSuccess(data))
  } catch (err) {
    dispatch(getCountriesFailure(err.toString()))
  }
}

export const question3Reducer = question3Slice.reducer
