import React, { useState } from "react";
import Register from './UseState/Register';
import tabs from "../components/UseEffect/Tabs";
function Main() {

    const [toggle, setToggle] = useState(false);
    return (
        <div className="container">
            {/* <button className="btn btn-dark btn-sm"
                onClick={() => setToggle(!toggle)}
            >Toggle</button>
            {toggle && <Register />} */}

            <Register />
            {/* {console.log(tabs)} */}
        </div>
    )
}

export default Main;