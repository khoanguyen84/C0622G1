import axios from "axios";

class AlbumService {
    static getAlbums() {
        return axios.get('https://jsonplaceholder.typicode.com/albums');
    }
    static getAlbumPhotos(albumnId) {
        return axios.get(`https://jsonplaceholder.typicode.com/albums/${albumnId}/photos`);
    }
}

export default AlbumService;