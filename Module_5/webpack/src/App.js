import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from './components/Main';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;