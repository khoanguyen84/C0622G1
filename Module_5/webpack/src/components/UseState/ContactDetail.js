import React from "react";
import { useParams } from 'react-router-dom'

function ContactDetail() {
    const { name, idx } = useParams();
    return (
        <div className="container">
            <h1>Contact Detail index: {idx}, name: {name}</h1>
        </div>
    )
}

export default ContactDetail;