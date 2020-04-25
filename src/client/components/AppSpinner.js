import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import styled from 'styled-components'

export const AppSpinner = props => {
  return (
    <SpinnerContainer>
      <Spinner animation="border" variant="primary" size="md" />
      <Label>{props.text}</Label>
    </SpinnerContainer>
  )
}

const SpinnerContainer = styled.div`
  padding: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Label = styled.div`
  padding-top: 10px;
`
