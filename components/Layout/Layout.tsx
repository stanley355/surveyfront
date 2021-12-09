import React from "react";

import styles from "./Layout.module.scss";

import SiteHead from "../Head/Head";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";

const Layout = (props: any) => {
  
  return (
    <div className={styles.layout}>
      <SiteHead />
      <Header />
      <main className={styles.layout__main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
