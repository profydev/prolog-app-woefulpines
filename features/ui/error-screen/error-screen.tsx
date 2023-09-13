import styles from "./error-screen.module.scss";

type ErrorScreenProps = {
    theError : Error
};

export function ErrorScreen({ theError } : ErrorScreenProps ){
    return(
        <div>
            Error: { theError.message }
        </div>
    );
}
