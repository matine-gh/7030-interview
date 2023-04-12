import React, {useState} from "react";
import FirstState from "@/components/firstState";
import SecondState from "@/components/secondState";


export default function WelcomeScreen() {
    const [name, setName] = useState("");
    const [hasName, setHasName] = useState(false);

    const handleChange = (value: string) => {
        setName(value)
    }

    const handleClick = () => {
        if (name !== ""){
            setHasName(true)
        }
    }

    return (
        <div>
            {
                hasName === false
                    ? <FirstState name={name}
                                  handleChange={handleChange}
                                  handleClick={handleClick}/>
                    : <SecondState name={name}/>
            }
        </div>
    )
}
