import React, { useState } from "react";

function TwoWayBinding() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // call login api
        console.log({
            "email": email,
            "password": password
        });
        setEmail("");
        setPassword("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log({
            "email": email,
            "password": password
        });
        setEmail("");
        setPassword("");
    }

    // return (
    //     <div className="container">
    //         <div className="">
    //             <div className="form-group">
    //                 <label className="form-label">Email</label>
    //                 <input type="email" className="form-control"
    //                     value={email}
    //                     onInput={(e) => setEmail(e.target.value)}
    //                 />
    //             </div>
    //             <div className="form-group">
    //                 <label className="form-label">Password</label>
    //                 <input type="password" className="form-control"
    //                     value={password}
    //                     onInput={(e) => setPassword(e.target.value)}
    //                 />
    //             </div>
    //             <div className="form-group">
    //                 <button className="btn btn-danger"
    //                     onClick={handleLogin}
    //                 >Login</button>
    //             </div>
    //         </div>
    //     </div>
    // )
    return (
        <div className="container">
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control"
                            value={email}
                            onInput={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control"
                            value={password}
                            onInput={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-danger">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TwoWayBinding;
