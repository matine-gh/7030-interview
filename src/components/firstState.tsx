import styles from '@/styles/Home.module.css';
import React, {ChangeEvent} from "react";


export default function FirstState(props) {

    const name = props.name;

    const handleChange = (value: string) => {
        props.handleChange(value)
    }
    const handleClick = () => {
      props.handleClick()
    }


    return (
        <div className={styles.container}>
            <div>
                <label>Name: </label>
                <input className={`${styles.input} ${styles.primaryBorder}`}
                       value={props.name}
                       onChange={
                            (event :ChangeEvent<HTMLInputElement>) => {
                                handleChange(event.target.value)
                            }
                       }
                />
            </div>
            <button className={`${styles.button} ${styles.primaryBorder}`}
                    disabled={name === ""}
                    onClick={handleClick}
            >
                PLAY!
            </button>
        </div>
    )
}
