import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import ContactApp from './UseState/ContactApp';
import Register from './UseState/Register';
import TwoWayBinding from './UseState/TwoWayBinding';
import ContactDetail from './UseState/ContactDetail';
import Post from './Post/Post';
import PostDetail from './Post/PostDetail';
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
            </Routes>
        </div>
    )
}

export default Main;