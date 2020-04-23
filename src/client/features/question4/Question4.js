import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Question4.css';
import { fetchCountries, setSearch } from './question4Slice';
import Reels from './reels'

const reels = new Reels();

const Question4 = () => {

  const winLimitCounter = 5; // user can't win often than onece per 5 spins
  const [slots, setSlots] = useState(reels.spin());
  const [spinCounter, setSpinCounter] = useState(0);

  const handleClick = (event) => {
    let results = [];
    let won = false;
    let done = false;
    while (!done) {
      results = reels.spin();
      won = [...new Set(results)].length < 3;
      if (spinCounter >= (winLimitCounter + Math.random() * 10) || !won) {
        done = true;
      }
    }
    if (won) {
      setSpinCounter(0);
      console.log('WON', results)
    } else {
      setSpinCounter(spinCounter + 1);
    }
    setSlots(results);
  }

  return (
    <div>
      <h2>Question 4</h2>
      <div className="reels">
        {slots.map((x, i) => <div key={i} className={i === 2 ? 'last' : null}>{x}</div>)}
      </div>
      <button onClick={handleClick}>Spin</button>
    </div>
  );
};




export default Question4;
