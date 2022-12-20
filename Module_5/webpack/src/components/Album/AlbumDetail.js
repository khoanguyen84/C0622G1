import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import AlbumService from './../../services/albumService';

function AlbumDetail() {
    const { albumId } = useParams();
    const [state, setState] = useState({
        loading: false,
        photos: []
    })

    useEffect(() => {
        try {
            setState({ ...state, loading: true });
            async function getData() {
                let resPhotos = await AlbumService.getAlbumPhotos(albumId);
                setState({
                    ...state,
                    photos: resPhotos.data
                })
            }
            getData();
        } catch (error) {

        }
    }, [albumId])

    const { loading, photos } = state;
    return (
        <div className="container">
            <Link className="btn btn-link">Back to album</Link>
            {
                loading ? <p>Loading data ...</p> : (
                    <div className="row">
                        {
                            photos.map((photo) => (
                                <div key={photo.id} className="col-md-2">
                                    <div className="card">
                                        <img src={photo.thumbnailUrl} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">{photo.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default AlbumDetail;