import React from "react";
import styles from '@/styles/photos.module.css';

export default function Photos() {

    const [counter, setCounter] = React.useState(10)

    React.useEffect(() => {
        // counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
        if (counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000);
        }else {
            setTimeout(() => setCounter(10), 1000);
        }
    }, [counter]);

    return (
        <div className={styles.container}>
            <p className={styles.timerText}>Timer: {counter}</p>
            <div className={styles.test}>
            </div>
        </div>
    );
}
