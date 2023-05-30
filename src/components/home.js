import React from "react";
import { Link } from "react-router-dom";
import style from "./style/home.module.css";

const Home = () => {
  return (
    <div>
      <header className={`${style.head}`}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8232O6hatoJzEf4TA0WVc1lPZgEFYkWzBjQ&usqp=CAU"
          alt="logo"
        />
        <p className={`${style.logo}`}> BOOK A TICKET</p>
      </header>

      <marquee behavior="" direction="left" scrollamount="10">
        {" "}
        DAILY 4 SHOWS FIRSTSHOW (9AMTO12PM) SECOND SHOW(1PMTO3PM) THIRD SHOW
        (4PM TO 7PM) FOURTH SHOW (9PM TO 12PM)
      </marquee>

      <div className={`${style.allmovies}`}>
        <div>
          <iframe
            className={`${style.iframes}`}
            width="400"
            height="250"
            src="https://www.youtube.com/embed/hA6hldpSTF8"
            title="The Avengers | The Avengers (Hollywood) | Netflix India"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Link to={"/avengers"} target="_blank">
            {" "}
            <div className={`${style.movies1}`}> BOOK A TICKET </div>
          </Link>
        </div>

        <div>
          <iframe
            className={`${style.iframes}`}
            width="400"
            height="250"
            src="https://www.youtube.com/embed/mqqft2x_Aa4"
            title="The Batman | Official Trailer | "
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Link to={"/batman"} target="_blank">
            {" "}
            <div className={`${style.movies1}`}> BOOK A TICKET </div>
          </Link>
        </div>

        <div>
          <iframe
            className={`${style.iframes}`}
            width="400"
            height="250"
            src="https://www.youtube.com/embed/RMmLTmjXKH8"
            title="Fast9 Official Trailer (Universal Pictures) HD"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Link to={"/fast9"} target="_blank">
            {" "}
            <div className={`${style.movies1}`}> BOOK A TICKET </div>
          </Link>
        </div>

        <div>
          <iframe
            className={`${style.iframes}`}
            width="400"
            height="250"
            src="https://www.youtube.com/embed/-KfsY-qwBS0"
            title="KGF Trailer Hindi | Yash | Srinidhi |"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Link to={"/kgf"} target="_blank">
            {" "}
            <div className={`${style.movies1}`}> BOOK A TICKET</div>{" "}
          </Link>
        </div>
        <div>
          <iframe
            className={`${style.iframes}`}
            width="400"
            height="250"
            src="https://www.youtube.com/embed/V75dMMIW2B4"
            title="The Lord of the Rings Official Trailer"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Link to={"/lotr"} target="_blank">
            {" "}
            <div className={`${style.movies1}`}> BOOK A TICKET </div>
          </Link>
        </div>
        <div>
          <iframe
            className={`${style.iframes}`}
            width="400"
            height="250"
            src="https://www.youtube.com/embed/vqu4z34wENw"
            title="Pathaan | Official Trailer | Shah Rukh Khan | Deepika Padukone | John Abraham | Siddharth Anand"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Link to={"/pathan"} target="_blank">
            {" "}
            <div className={`${style.movies1}`}> BOOK A TICKET </div>
          </Link>
        </div>
        <div>
          <iframe
            className={`${style.iframes}`}
            width="400"
            height="250"
            src="https://www.youtube.com/embed/Q1NKMPhP8PY"
            title="Pushpa Official Trailer | Allu Arjun | Rashmika | Fahadh Faasil "
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Link to={"/pushpa"} target="_blank">
            {" "}
            <div className={`${style.movies1}`}> BOOK A TICKET </div>
          </Link>
        </div>
        <div>
          <iframe
            className={`${style.iframes}`}
            width="400"
            height="250"
            src="https://www.youtube.com/embed/vU6A1jpe5k8"
            title="Sultan | Official Teaser | Salman Khan | Anushka Sharma |"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <Link to={"/sultan"} target="_blank">
            {" "}
            <div className={`${style.movies1}`}> BOOK A TICKET </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
