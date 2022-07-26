import React from "react";

import mealsImg from "../../assets/meals.jpg";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="background" />
      </div>
    </React.Fragment>
  );
};

export default Header;
