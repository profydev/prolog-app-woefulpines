import styles from "./error-screen.module.scss";
import { Button } from "../button";

type ErrorScreenProps = {
  theError: string;
  buttonFunction: () => void;
};

export function ErrorScreen({ theError, buttonFunction }: ErrorScreenProps) {
  return (
    <div className={styles.errorContainer} data-testid="error_screen">
      <img
        className={styles.alert}
        src="/icons/alert-circle.svg"
        alt="red exclamation mark inside a red circle"
      />

      <div className={styles.info}>
        <div>{theError}</div>

        <Button className={styles.button} onClick={buttonFunction}>
          <div>Try again.</div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#B42318"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(180)"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="#B42318"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
