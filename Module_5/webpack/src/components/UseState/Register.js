import React, { useState, useEffect } from "react";
import axios from "axios";

// const provinces = [
//     {
//         provinceId: 1,
//         name: "TT Huế"
//     },
//     {
//         provinceId: 2,
//         name: "Đà Nẵng"
//     },
//     {
//         provinceId: 3,
//         name: "Quảng Trị"
//     },
// ]
function Register() {
    const [state, setState] = useState({})
    const [provinces, setProvices] = useState([]);

    useEffect(() => {
        async function getData(){
            let resProvinces = await axios.get("https://vapi.vnappmob.com/api/province/");
            let resDistricts = await axios.get(`https://vapi.vnappmob.com/api/province/district/${resProvinces.data.results[0].province_id}`);
            console.log(resDistricts.data.results);
            setProvices(resProvinces.data.results)
        }
        getData();
    }, [])

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
            province: provinces.length > 0 ? provinces[0].province_name : ""
        })
    }

    // console.log(provinces);
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
                            onInput={handleInput}
                        >
                            {
                                provinces.length > 0 && provinces.map((province) => (
                                    <option value={province.province_name}
                                        key={province.province_id}>{province.province_name}</option>
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
