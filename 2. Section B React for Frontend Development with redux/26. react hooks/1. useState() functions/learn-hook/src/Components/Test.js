import React, { useState, useEffect } from 'react';

const Test = props => {
    const [myName, setMyName] = useState("");
    const [myInfo, setMyInfo] = useState({
        a: "Hello",
        b: "World"
    });

    const changeState = () => {
        setMyName("Rahim");
        // we can call axios here to insert in server
    }

    //useeffect works like the followings
    // componentDidMount
    // componentDidUpdate
    useEffect(() => { //after rendering 1st time and after component updating
        console.log("MyInfo:", myInfo);
    }, [myInfo, myName]);

    return (
        <div>
            <button onClick={changeState}>Change</button>
        </div>
    );
}

export default Test;
