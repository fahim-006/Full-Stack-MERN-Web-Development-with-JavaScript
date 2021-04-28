import React, { useState, useEffect } from 'react';

const Test = props => {
    const [myName, setMyName] = useState("");
    const [myInfo, setMyInfo] = useState({
        a: "Hello",
        b: "World"
    });

    const changeState = () => {
        setMyName("Rahim");
    }

    // componentDidMount
    // componentDidUpdate
    useEffect(() => {
        console.log("MyInfo:", myInfo);
    }, [myInfo, myName]);

    return (
        <div>
            <button onClick={changeState}>Change</button>
        </div>
    );
}

export default Test;