import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import ContactApp from './UseState/ContactApp';
import Register from './UseState/Register';
import TwoWayBinding from './UseState/TwoWayBinding';
import ContactDetail from './UseState/ContactDetail';
import Post from './Post/Post';
import PostDetail from './Post/PostDetail';
import Album from './Album/Album';
import AlbumDetail from './Album/AlbumDetail';
function Main() {

    return (
        <div className="container">
            <Routes>
                <Route path="/" element={ <ContactApp/>} />
                <Route path="/register" element={ <Register/>} />
                <Route path="/twowaybining" element={ <TwoWayBinding/>} />
                <Route path="/contact/detail/:name/:idx" element={ <ContactDetail/>} />
                <Route path="/post" element={ <Post/>} />
                <Route path="/post/detail/:postId" element={ <PostDetail/>} />
                <Route path="/album" element={ <Album/>} />
                <Route path="/album/:albumId" element={ <AlbumDetail/>} />
            </Routes>
        </div>
    )
}

export default Main;