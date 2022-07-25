import React from "react";

import mealsImg from "../../assets/meals.jpg";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} />
      </div>
    </React.Fragment>
  );
};

export default Header;
