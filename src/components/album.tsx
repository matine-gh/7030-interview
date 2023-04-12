import styles from '@/styles/photos.module.css';
import React, {useEffect, useState} from "react";
import Photos from "@/components/photos";


export default function Album(props) {

    const [photos, setPhotos] = useState([]);
    for (let photo in photos){
        photo = '../../public/defultDog.jpg';
    }
    const counter = props.counter;
    const isFinished = props.isFinished;
    let arr = new Array<string>(9);

    useEffect(() => {
        // setPhotos(photos.splice(0))
        for (let i = 0; i < arr.length; i++){
            fetch('https://dog.ceo/api/breeds/image/random')
                .then((response) => response.json())
                .then((data) => {
                    photos[i] = data.message
                    setPhotos(photos);
                    arr[i] = data.message;
                })
                .catch((err) => {
                    console.log(err.message);
                });

        }


        console.log("matine: ", arr)
    }, [counter === 0]);
const style = {
    height: '80px'
}
    return (
        <Photos photos={photos} />
    )
}
