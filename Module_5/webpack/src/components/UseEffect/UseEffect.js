import React, { useEffect, useState } from "react";

// mounted (1 component được gắn vào DOM)
// unmouted (1 component được gỡ khỏi DOM)
// useEffect(callback, [deps])
// Nguyên lý:
// 1. callback sẽ được gọi khi component mounted vào DOM
// 2. callback sẽ được thực thi sau phần UI
// [deps] (Dependence: sự phụ thuộc)
// Có 3 trường hợp
// 1. useEffect(callback)
//      + khi component được re-render thì callback sẽ được thực thi
// 2. useEffect(callback, [])
//      + callback chỉ được thực thi 1 lần duy nhất khi component được mounted vào DOM
// 3. useEffect(callback, [deps])
//      + callback sẽ được thực khi khi giá trị (states) trong mảng deps thay đổi

// cleanup function: sẽ được thực khi khi component được unmouted (memory leak).
// nó được return bên trong callback

function UseEffect() {
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    // const [posts, setPosts] = useState([]);
    const [state, setState] = useState({
        posts: [],
        loading: false
    })

    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setState({
        //             ...state,
        //             posts: data
        //         });
        //     })
        setState({ ...state, loading: true });
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(async (res) => {
                let data = await res.json();
                setState({
                    ...state,
                    posts: data,
                    loading: false
                })
            })
        return () => {
            console.log('unmouted');
        }
    }, [title, email])

    const handleInputTitle = (e) => {
        setTitle(e.target.value);
        document.title = title;
    }
    const handleInputEmail = (e) => {
        setEmail(e.target.value);
    }

    const { loading, posts } = state;
    // UI
    return (
        <div className="container">
            {console.log('render ui')}
            <div className="my-3">
                <h1>Use Effect</h1>
                <input type="text" className="form-control" onInput={handleInputTitle} />
                <input type="text" className="form-control" onInput={handleInputEmail} />
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
                                    posts.map((post) => (
                                        <tr key={post.id}>
                                            <td>{post.id}</td>
                                            <td>{post.title}</td>
                                            <td>{post.body}</td>
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
export default UseEffect;