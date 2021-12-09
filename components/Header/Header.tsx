import React from "react";
import router from "next/router";
import { checkUserSession, removeUserSession } from "../../client/utils/userSession";

import styles from "./Header.module.scss";

const Header = () => {
  const userSession = checkUserSession();

  return (
    <header className={styles.header}>
      <h1>Funvest</h1>
      <button
        className={styles.header_loginBtn}
        onClick={() => (userSession ? removeUserSession() : router.push("/login"))}
      >
        {userSession ? "Logout" : "Login"}
      </button>
    </header>
  );
};

export default Header;
