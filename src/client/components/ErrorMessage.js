import React from 'react'
import { bounceInDown } from 'react-animations'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import styled, { keyframes } from 'styled-components'

export const ErrorMessage = props => {
  const handleClick = event => {
    if (props.onClose) {
      props.onClose()
    }
  }

  return (
    <MessageWrapper>
      <Alert variant="danger">
        <Alert.Heading>{props.heading}</Alert.Heading>
        {props.message}
        <hr />
        <ButtonWrapper>
          <Button onClick={handleClick}>Close</Button>
        </ButtonWrapper>
      </Alert>
    </MessageWrapper>
  )
}

const bounceAnimation = keyframes`${bounceInDown}`

const MessageWrapper = styled.div`
  animation: 1s ${bounceAnimation};
  position: absolute;
  top: 50px;
  left: calc(50% - 250px);
  width: 500px;

  @media (max-width: 768px) {
    left: calc(50% - 150px);
    width: 300px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
