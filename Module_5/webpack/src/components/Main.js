import React, { useState } from "react";
import UseEffect from './UseEffect/UseEffect';


function Main() {

    const [toggle, setToggle] = useState(false);
    return (
        <div className="container">
            <button className="btn btn-dark btn-sm"
                onClick={() => setToggle(!toggle)}
            >Toggle</button>
            {toggle && <UseEffect />}
        </div>
    )
}

export default Main;