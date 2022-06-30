import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="banner">
        <Link to="tiney-challenge/register">&#9754;</Link>

        <span> Tiney register</span>
      </div>

      <nav>
        <Link to="tiney-challenge/" className="active">
          DailyLog
        </Link>
        <Link to="tiney-challenge/history">History</Link>
        <Link to="tiney-challenge/register" >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
