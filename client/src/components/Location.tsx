import axios from "axios"
import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

const Location: React.FC = (): JSX.Element => { 
    const [ userLoc, setUserLoc ] = useState("");
    const [ alert, setAlert ] = useState(false);

     const textInput = React.useRef() as React.MutableRefObject<HTMLInputElement>;

    const clearInput = () => {
        textInput.current.value = ""
    }

    const handleChange = (event:any) => {
        event.preventDefault();
        const message = event.target.value;
        setUserLoc(message)
    }

    const handleSubmit = (event:any) => {
        event.preventDefault();
        const msg = axios.post('/api/', {message: userLoc})
        clearInput();
        setAlert(true)
    }

    return (
        <div>
            <p>Missing a location you'd like to see? Enter in a location in the input box below to send it to the developer. </p>
            <input ref={textInput} type="text" onChange={handleChange} placeholder="Sunset Beach Oahu Hawaii"/><Button size="sm" variant="info" onClick={handleSubmit}>Send</Button>
        {alert ? <Alert variant="light">Location submitted!</Alert> : ""}
        </div>
    )
}

export default Location;
