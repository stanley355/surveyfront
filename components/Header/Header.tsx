import React from "react";
import router from "next/router";

import styles from "./Header.module.scss";

const Header = () => {

  return (
    <header className={styles.header}>
      <h1>Survey</h1>
    </header>
  );
};

export default Header;
