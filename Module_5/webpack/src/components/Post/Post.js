import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostService from './../../services/postService';


function Post() {
    const [state, setState] = useState({
        loading: false,
        posts: []
    });

    useEffect(() => {
        try {
            setState({ ...state, loading: true });
            async function getData() {
                let resPosts = await PostService.getPosts();
                setState({
                    ...state,
                    loading: false,
                    posts: resPosts.data
                })
            }
            getData();
        } catch (error) {

        }
    }, [])

    const { loading, posts } = state;
    return (
        <div className="container">
            {
                loading ? <p>Loading data ....</p> : (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map((post) => (
                                    <tr key={post.id}>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                        <td>
                                            <Link to={`/post/detail/${post.id}`}>
                                                <i role="button" className="fa fa-eye"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default Post;