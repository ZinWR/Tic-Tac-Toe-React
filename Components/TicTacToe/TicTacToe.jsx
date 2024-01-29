import React, { useState, useRef } from "react";
import "./TicTacToe.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  // Setup React Hooks
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  // create 9 different Ref to reset board
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  /* onClick handle/helper function */
  const toggle = (e, index) => {
    // check if user wins --> lock
    if (lock) return 0;
    // first player always EVEN!
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}'>`;
      data[index] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle_icon}'>`;
      data[index] = "o";
      setCount(++count);
    }
    // check for winner after every click!
    checkWin();
  };

  const checkWin = () => {
    /*
     * Notes: Last Box can't be empty else Lock is triggered!
                    Order of Boxes
                   [ 0 ] [ 1 ] [ 2 ]
                   [ 3 ] [ 4 ] [ 5 ]
                   [ 6 ] [ 7 ] [ 8 ]
        - If win, pass in the middle icon
     */

    // Check horizontal win!
    if ((data[0] === data[1]) & (data[1] === data[2]) && data[2] !== "") {
      won(data[1]);
    } else if (
      (data[3] === data[4]) & (data[4] === data[5]) &&
      data[5] !== ""
    ) {
      won(data[4]);
    } else if (
      (data[6] === data[7]) & (data[7] === data[8]) &&
      data[8] !== ""
    ) {
      won(data[7]);
    }
    // Check vertical win!
    if ((data[0] === data[3]) & (data[3] === data[6]) && data[6] !== "") {
      won(data[3]);
    } else if (
      (data[1] === data[4]) & (data[4] === data[7]) &&
      data[7] !== ""
    ) {
      won(data[4]);
    } else if (
      (data[2] === data[5]) & (data[5] === data[8]) &&
      data[8] !== ""
    ) {
      won(data[5]);
    }
    // Check diagonal win!
    if ((data[0] === data[4]) & (data[4] === data[8]) && data[8] !== "") {
      won(data[4]);
    } else if (
      (data[2] === data[4]) & (data[4] === data[6]) &&
      data[6] !== ""
    ) {
      won(data[4]);
    }
  };

  // if there's a winner --> LOCK!
  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: Player 1 → <img src='${cross_icon}'> Wins!`;
    } else {
      titleRef.current.innerHTML = `Congratulations: Player 2 → <img src='${circle_icon}'> Wins!`;
    }
  };

  // reset
  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic Tac Toe In <span>React</span>";
    boxArray.map((e) => (e.current.innerHTML = ""));
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        Tic Tac Toe Game In <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            ref={box1}
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            ref={box2}
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            ref={box3}
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            ref={box4}
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            ref={box5}
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            ref={box6}
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            ref={box7}
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            ref={box8}
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            ref={box9}
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button
        className="reset"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
