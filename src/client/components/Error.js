import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { clearError } from '../reducers/commonSlice'

import { ErrorMessage } from './ErrorMessage'

export const Error = () => {
  const dispatch = useDispatch()
  const { error } = useSelector(state => state.common)

  const handleClose = () => {
    dispatch(clearError())
  }

  return !!error && <ErrorMessage heading="Error" message={JSON.stringify(error)} onClose={handleClose} />
}
