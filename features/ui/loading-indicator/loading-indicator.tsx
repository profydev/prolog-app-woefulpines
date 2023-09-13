import styles from "./loading-indicator.module.scss";
import {} from "react";

export function LoadingIndicator() {
  return (
    <div className={styles.indicatorBackground}>
      <div
        className={styles.indicatorSpinner}
        data-testid="loading_indicator"
      ></div>
    </div>
  );
}
