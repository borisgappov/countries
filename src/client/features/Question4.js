import React, { useState } from 'react'
import { bounceInDown } from 'react-animations'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import { useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'

import { SlotMachine, Wallet } from '../core'
import { setError } from '../reducers/commonSlice'

import apple from './images/apple.png'
import banana from './images/banana.png'
import cherry from './images/cherry.png'
import lemon from './images/lemon.png'

const images = {
  cherry: <img src={cherry} />,
  banana: <img src={banana} />,
  lemon: <img src={lemon} />,
  apple: <img src={apple} />,
}

const slotMachine = new SlotMachine()
const userWallet = new Wallet(20)
const bounceAnimation = keyframes`${bounceInDown}`

export const Question4 = () => {
  const dispatch = useDispatch()
  const [slots, setSlots] = useState(slotMachine.slots)
  const [userMoney, setUserMoney] = useState(userWallet.value)
  const [winning, setWinning] = useState(0)

  const spin = event => {
    setWinning(0)
    let result = slotMachine.spin(userWallet)
    if (result.error) {
      dispatch(setError(result.error))
    } else {
      setSlots(result.slots)
      setUserMoney(userWallet.value)
      setWinning(result.winning)
      if (result.winning) {
        setTimeout(() => setWinning(0), 2000)
      }
    }
  }

  const reset = () => {
    userWallet.add(20)
    setUserMoney(userWallet.value)
    slotMachine.reset()
    setSlots(slotMachine.slots)
  }

  return (
    <div>
      <h2>Question 4</h2>
      <ListGroup horizontal>
        {slots.map((slot, i) => (
          <ListGroup.Item key={i}>{images[slot]}</ListGroup.Item>
        ))}
      </ListGroup>
      <WalletWrapper>
        <b>Funds in user's wallet</b>
        <span> ${userMoney}</span>
      </WalletWrapper>
      {!!winning && <WinAlert amount={winning} />}
      <ButtonsWrapper>
        <div>
          <Button variant="primary" onClick={spin} disabled={winning || userWallet.value === 0}>
            Spin
          </Button>
        </div>
        <div>
          {userWallet.value === 0 && (
            <ResetButton variant="primary" onClick={reset}>
              Reset
            </ResetButton>
          )}
        </div>
      </ButtonsWrapper>
    </div>
  )
}

const WinAlert = props => {
  return (
    <AlertWrapper>
      <Alert variant="success">
        <Alert.Heading>Congratulations!</Alert.Heading>
        You won <WinningText> ${props.amount}</WinningText>
      </Alert>
    </AlertWrapper>
  )
}

const AlertWrapper = styled.div`
  animation: 1s ${bounceAnimation};
  position: absolute;
  left: calc(50% - 175px);
  top: 20px;
  width: 350px;
  text-align: center;
`

const WinningText = styled.span`
  color: red;
  font-weight: bold;
  font-size: 2.5rem;
`

const WalletWrapper = styled.div`
  padding: 10px 0;
`

const ButtonsWrapper = styled.div`
  display: flex;
`

const ResetButton = styled(Button)`
  margin-left: 5px;
`
