import {} from "react";
import styles from "./footer.module.scss";
import classNames from "classnames";

export function Footer() {
  console.log("Dummy footer for testing.");
  return (
    <footer className={classNames(styles.container)}>
      <h1>"Hi I'm item 1"</h1>
      <h1>"Hi I'm item 2"</h1>
      {/* TODO */}
    </footer>
  );
}
