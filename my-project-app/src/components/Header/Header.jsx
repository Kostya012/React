import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src="https://autodoktor.com.ua/wp-content/uploads/Logo/Total-logo-earth.png" />
      <h1>Hipstagram</h1>
    </header>
  );
};

export default Header;
