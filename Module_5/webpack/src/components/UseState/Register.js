import React, { useState } from "react";

const provinces = [
    {
        provinceId: 1,
        name: "TT Huế"
    },
    {
        provinceId: 2,
        name: "Đà Nẵng"
    },
    {
        provinceId: 3,
        name: "Quảng Trị"
    },
]
function Register() {
    const [state, setState] = useState({})

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(state);
        setState({
            ...state,
            email: "",
            fullname: "",
            province: provinces[0].name
        })
    }

    const { email, fullname, province } = state;
    
    return (
        <div className="container">
            <div className="">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control"
                            value={email || ""}
                            name="email"
                            onInput={handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Fullname</label>
                        <input type="text" className="form-control"
                            value={fullname || ""}
                            name="fullname"
                            onInput={handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Provinces</label>
                        <select className="form-control"
                            name="province"
                            value={province || provinces[0].name}
                            onInput={handleInput}
                        >
                            {
                                provinces.map((province) => (
                                    <option value={province.name}
                                        key={province.provinceId}>{province.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-danger mt-2">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
