import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import apple from './images/apple.png';
import banana from './images/banana.png';
import cherry from './images/cherry.png';
import lemon from './images/lemon.png';
import './Question4.css';
import SlotMachine from './slot-machine';
import Wallet from './wallet';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import Radium, { StyleRoot } from 'radium';
import { bounceInDown } from 'react-animations';

const images = {
  cherry: <img src={cherry} />,
  banana: <img src={banana} />,
  lemon: <img src={lemon} />,
  apple: <img src={apple} />,
}

const slotMachine = new SlotMachine();

const userWallet = new Wallet(20);

const styles = {
  show: {
    animation: '1s',
    animationName: Radium.keyframes(bounceInDown)
  }
}

const Question4 = () => {

  const [slots, setSlots] = useState(slotMachine.slots);
  const [userMoney, setUserMoney] = useState(userWallet.value);
  const [winning, setWinning] = useState(0);

  const spin = (event) => {
    setWinning(0);
    let result = slotMachine.spin(userWallet);
    if (result.error) {
      alert(result.error);
    } else {
      setSlots(result.slots);
      setUserMoney(userWallet.value);
      setWinning(result.winning);
      if (result.winning) {
        setTimeout(() => setWinning(0), 2500);
      }
    }
  }

  const reset = () => {
    userWallet.add(20);
    setUserMoney(userWallet.value);
  }

  return (

    <div>
      <h2>Question 4</h2>
      <ListGroup horizontal>
        {slots.map((slot, i) => <ListGroup.Item key={i} className={i === 2 ? 'last' : null}>{images[slot]}</ListGroup.Item>)}
      </ListGroup>
      <div className="pt-2 pb-2">
        <b>Funds in user's wallet</b><span> ${userMoney}</span>
      </div>
      {!!winning && <WinAlert amount={winning} />}
      <div className="buttons">
        <div>
          <Button variant="primary" onClick={spin} disabled={winning || userWallet.value === 0}>Spin</Button>
        </div>
        <div>
          {userWallet.value === 0 && <Button variant="primary" onClick={reset} className="ml-2">Fill up wallet</Button>}
        </div>
      </div>
    </div>
  );
};

const WinAlert = (props) => {
  return (
    <StyleRoot>
      <div style={styles.show} className="win-alert">
        <Alert variant="success">
          <Alert.Heading>Congratulations!</Alert.Heading>
          You won <span className="winning"> ${props.amount} !</span>
        </Alert>
      </div>
    </StyleRoot>
  )
}

export default Question4;
