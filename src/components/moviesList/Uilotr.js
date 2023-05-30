import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../style/fast9.module.css";

const Uilotr = (props) => {
  const [valid, setValid] = useState(false);
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return { total, hours, minutes, seconds };
  };
  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };
  const clearTimer = (e) => {
    setTimer("00:00:10");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 10);
    setTimeout(() => {
      setValid(true);
    }, 10000);
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  let show = useSelector((state) => {
    return state.ui.seatdata;
  });
  return (
    <div className="App">
      {!valid && (
        <div className={`${style.time}`}>
          <h2>{timer}</h2>
          <h2 className={`${style.infos}`}>
            <p>{`${show} are the seats and total price is ${
              show.length * 100
            }`}</p>
          </h2>
        </div>
      )}
      {!valid && (
        <Link to={"/booked"}>
          {" "}
          <h1 className={`${style.alert}`}>PAY NOW..!</h1>
        </Link>
      )}
      {valid && <Link to={"/lotr"}>Select seat Again</Link>}
      {!valid && (
        <div>
          <Link to={"/"}>
            <button> HOMEPAGE</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Uilotr;
