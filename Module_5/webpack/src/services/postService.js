import axios from "axios";

class PostService {
    static getPosts() {
        return axios.get('https://jsonplaceholder.typicode.com/posts');
    }
    static getPost(postId) {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
}

export default PostService;