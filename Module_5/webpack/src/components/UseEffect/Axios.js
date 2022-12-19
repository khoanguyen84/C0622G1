import React, { useState, useEffect } from "react";
import axios from "axios";
import tabs from "./Tabs";

function Axios() {
    const [selected, setSelected] = useState("posts")
    const [state, setState] = useState({
        loading: false,
        errorMessage: "",
        data: []
    })

    useEffect(() => {
        try {
            setState({ ...state, loading: true });

            async function getData() {
                let resData = await axios.get(`https://jsonplaceholder.typicode.com/${selected}`);
                let resProducts = await axios.get('https://fakestoreapi.com/products');
                console.log(resProducts.data);
                console.log(resData.data);
                setState({
                    ...state,
                    data: resData.data
                })
            }

            getData();

        } catch (error) {
            setState({
                ...state,
                errorMessage: error.message
            })
        }
    }, [selected])

    const { loading, data, errorMessage } = state;
    return (
        <div className="container">
            <div className="tabs">
                {
                    tabs.map((tab) => (
                        <button key={tab} className={`btn btn-sm me-2 ${selected === tab ? 'btn-danger' : 'btn-secondary'}`}
                            onClick={() => setSelected(tab)}>
                            {tab}</button>
                    ))
                }
            </div>
            <div>
                {
                    loading ? <p className="text-danger">Loading....</p> : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#ID</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.title || item.email}</td>
                                            <td>{item.body || item.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        </div>
    )
}
export default Axios;