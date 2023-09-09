import {} from "react";
import styles from "./footer.module.scss";
import classNames from "classnames";

export function Footer() {
  return (
    <footer className={classNames(styles.container)}>
      <div className={styles.version}>
        <p> {"Version: " + require("package.json").version} </p>
      </div>

      <div className={styles.links}>
        <a href='#' >Docs</a>
        <a href='#' >API</a>
        <a href='#' >Help</a>
        <a href='#' >Community</a>
      </div>

      <div className="logo">
        <img src="/icons/logo-small.svg" alt="Profy dev logo."/>
      </div>
    </footer>
  );
}
