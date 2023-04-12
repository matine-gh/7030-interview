import React, {ChangeEvent} from "react";
import styles from '@/styles/Home.module.css';
import {useRouter} from "next/router";


export default function SecondState(props) {

    const router = useRouter();
    const name = props.name;
    const handleClick = () => {
        router.push('/photos')
    }

    return (
        <div className={styles.container}>
            <div>
                <p className={styles.welcomeMessage}>Hello {name}</p>
            </div>
            <button className={`${styles.button} ${styles.containedButton} ${styles.primaryBorder}`}
                    onClick={handleClick}
            >
                PLAY!
            </button>
        </div>
    )
}
