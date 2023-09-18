import styles from "./error-screen.module.scss";
import { Button } from "../button";

type ErrorScreenProps = {
    theError : Error
};

export function ErrorScreen(/**{ theError } : ErrorScreenProps **/){
    return(
        <div className={styles.errorContainer}>
            <img className={styles.alert} src="/icons/alert-circle.svg"/>

            <div className={styles.info}>
                <div>
                    There was a problem while loading the project data
                </div>

                <div className={styles.button}>
                    <div>Try again.</div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#B42318"   xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#B42318" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                </div>
            </div>
        </div>
    );
}
