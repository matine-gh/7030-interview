import React, {useState} from "react";
import styles from '@/styles/photos.module.css';
import Album from "@/components/album";

export default function Photos() {

    const [counter, setCounter] = useState(10);

    React.useEffect(() => {
        if (counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000);
        }else {
            setTimeout(() => setCounter(10), 1000);
        }
    }, [counter]);

    return (
        <div className={styles.container}>
            <p className={styles.timerText}>Timer: {counter}</p>
            <Album counter={counter} />
        </div>
    );
}
