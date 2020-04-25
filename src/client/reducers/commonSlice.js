import { createSlice } from '@reduxjs/toolkit'

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    error: null,
  },
  reducers: {
    setError: (state, { payload }) => {
      state.error = payload
    },
    clearError: state => {
      state.error = null
    },
  },
})

export const { setError, clearError } = commonSlice.actions

export const commonReducer = commonSlice.reducer
