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
                    <img className={styles.arrow} src="/icons/arrow-right.svg"/>
                </div>
            </div>
        </div>
    );
}
