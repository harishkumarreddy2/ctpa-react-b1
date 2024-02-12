import { useState } from "react";
import "./Headder.css"
const Headder = (props) => {
    // let x = 10;
    const [x, setX] = useState(10);
    const [myName, setMyName] = useState("Harish");

    setTimeout(()=>{
        console.log(x);
        // x = 20;
        setX(20);
        console.log(x);

        setMyName("Harish Kumar");
    }, 3000)
    return (
        <div className="headder">
            <h1>{x}</h1>
            <h1>{props.appTitle}</h1>
            <h1>{myName}</h1>
        </div>
    )
}

export default Headder;