import React from "react";
import { Link } from "react-router-dom";
const Bookedtickets = () => {
  return (
    <div>
      <h1 style={{ marginLeft: "20rem" }}>
        {" "}
        YOUR TICKETS ARE SUCCESSFULLY BOOKED!
      </h1>
      <img
        src="https://media.tenor.com/xVfFIHxAzW4AAAAC/success.gif"
        alt="success"
        style={{ height: "399px" }}
      />
      <div>
        <Link to={"/"}>
          <button style={{ marginLeft: "35rem" }}> HOMEPAGE</button>
        </Link>
      </div>
    </div>
  );
};

export default Bookedtickets;
