import React, { useRef, useState } from 'react';

const Average = () => {
  let [number, setNumber] = useState('');
  let [average, setAverage] = useState(0);
  let [arr, setArr] = useState([]);

  const inputEl = useRef(null);

  const updateNumber = (e) => {
    setNumber(e.target.value);
  };

  const enrollClick = () => {
    const copy = [...arr, Number(number)];

    setNumber('');
    setArr(copy);
    setAverage(copy.reduce((a, b) => a + b) / copy.length);
    inputEl.current.focus();
  };

  const doReset = () => {
    setNumber('');
    setArr([]);
    setAverage(0);
  };

  return (
    <div className="container mt-5">
      <input
        type="text"
        onChange={updateNumber}
        value={number}
        ref={inputEl}
        placeholder="0"
        autoFocus
      />
      <button onClick={enrollClick}>enroll</button>
      {arr.length > 0 && <button onClick={doReset}>reset</button>}
      <h2>count : {arr.length} </h2>
      <h2>average : {average}</h2>
      <ul>
        {arr.length > 0 &&
          arr.map((number) => {
            return <li>{number}</li>;
          })}
      </ul>
    </div>
  );
};

export default Average;
