import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import PostService from "../../services/postService";
import { Link } from 'react-router-dom';

function PostDetail() {
    const { postId } = useParams();
    const [state, setState] = useState({
        loading: false,
        post: {}
    })

    useEffect(() => {
        try {
            setState({ ...state, loading: true });
            async function getData() {
                let resPost = await PostService.getPost(postId);
                setState({
                    ...state,
                    loading: false,
                    post: resPost.data
                })
            }
            getData();

        } catch (error) {

        }
    }, [postId])

    const { loading, post } = state;
    return (
        <div className="container">
            {
                loading ? <p>Loading data ...</p> : (
                    <ul className="list-group">
                        <li className="list-group-item">
                            Title: <span className="fst-italic">{post.title}</span>
                        </li>
                        <li className="list-group-item">
                            Body: <span className="fst-italic">{post.body}</span>
                        </li>
                    </ul>
                )
            }
            <Link className="btn btn-dark btn-sm" to={"/post"}>Back</Link>
        </div>
    )
}

export default PostDetail;