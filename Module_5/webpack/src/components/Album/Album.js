import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AlbumService from '../../services/albumService';

function Album() {
    const [state, setState] = useState({
        loading: false,
        albums: []
    })

    useEffect(() => {
        try {
            setState({ ...state, loading: true })
            async function getAlbums() {
                let resAlbums = await AlbumService.getAlbums();
                setState({
                    ...state,
                    loading: false,
                    albums: resAlbums.data
                })
            }
            getAlbums();
        } catch (error) {

        }
    }, [])
    const { loading, albums } = state;
    return (
        <div className="container">
            {
                loading ? <p>Loading data ....</p> : (
                    <div className="row">
                        {
                            albums.map((album) => (
                                <div className="col-md-2 mb-2" key={album.id} >
                                    <div className="card h-100">
                                        <div className="card-body bg-warning">
                                            <Link className="text-white" to={`/album/${album.id}`}>{album.title}</Link>
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
export default Album;