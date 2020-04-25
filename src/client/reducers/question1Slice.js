import { createSlice } from '@reduxjs/toolkit'

import { getCountry } from '../core'

const question1Slice = createSlice({
  name: 'question1',
  initialState: {
    isLoading: false,
    error: null,
    country: null,
  },
  reducers: {
    getCountryStart: state => {
      state.isLoading = true
    },
    getCountrySuccess(state, { payload }) {
      state.country = payload
      state.isLoading = false
      state.error = null
    },
    getCountryFailure: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

const { getCountryStart, getCountrySuccess, getCountryFailure } = question1Slice.actions

export const fetchCountry = countryName => async dispatch => {
  try {
    dispatch(getCountryStart())
    const country = await getCountry(countryName)
    dispatch(getCountrySuccess(country))
  } catch (err) {
    dispatch(getCountryFailure(err.toString()))
  }
}

export const question1Reducer = question1Slice.reducer
