import React, { useEffect, useState } from 'react';
import './Question4.css';
import SlotMachine from './slot-machine';
import Wallet from './wallet';
import cherry from '../../../../public/cherry.png';
import banana from '../../../../public/banana.png';
import lemon from '../../../../public/lemon.png';
import apple from '../../../../public/apple.png';

const slotMachine = new SlotMachine();
const userWallet = new Wallet(20);
const images = {
  cherry: <img src={cherry} />,
  banana: <img src={banana} />,
  lemon: <img src={lemon} />,
  apple: <img src={apple} />,
}

const Question4 = () => {

  const [slots, setSlots] = useState(slotMachine.slots);
  const [userMoney, setUserMoney] = useState(userWallet.value);
  const [winning, setWinning] = useState(0);

  useEffect(() => {
    if (winning) {
      setTimeout(() => setWinning(0), 1500);
    }
  });

  const handleClick = (event) => {
    setWinning(0);
    let result = slotMachine.spin(userWallet);
    if (result.error) {
      alert(result.error);
    } else {
      setSlots(result.slots);
      setUserMoney(userWallet.value);
      setWinning(result.winning);
    }
  }

  return (
    <div>
      <h2>Question 4</h2>
      
      <div className="reels">
        {slots.map((slot, i) => <div key={i} className={i === 2 ? 'last' : null}>{images[slot]}</div>)}
      </div>
      <b>Funds in user's wallet</b><span> ${userMoney}</span>
      {!!winning &&
        <span className="win">
          You won $<span className="winning">{winning}</span>, congratulations!
        </span>}
      <div>
        <button className="spin" onClick={handleClick} disabled={userWallet.value === 0}>Spin</button>
      </div>
    </div>
  );
};

export default Question4;
