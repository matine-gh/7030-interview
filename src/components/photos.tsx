import styles from '@/styles/album.module.css';
import React, {useEffect, useState} from "react";


export default function Photos(props) {
    const photos = props.photos
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.image} src={photos[0]}/>
                <img className={styles.image} src={photos[1]}/>
                <img className={styles.image} src={photos[2]}/>
            </div>
            <div>
                <img className={styles.image} src={photos[3]}/>
                <img className={styles.image} src={photos[4]}/>
                <img className={styles.image} src={photos[5]}/>
            </div>
            <div>
                <img className={styles.image} src={photos[6]}/>
                <img className={styles.image} src={photos[7]}/>
                <img className={styles.image} src={photos[8]}/>
            </div>
        </div>
    )
}
