import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';

export const contact_db = "contact_db";
function ContactApp() {
    // const [contacts, setContacts] = useState(["Hiếu Nguyễn", "Tomy Sang", "David Khanh"])
    const [contacts, setContacts] = useState(() => {
        var contactList = [];
        if (localStorage.getItem(contact_db) == null) {
            contactList = ["Hiếu Nguyễn", "Tomy Sang", "David Khanh"];
            localStorage.setItem(contact_db, JSON.stringify(contactList));
        }
        else {
            contactList = JSON.parse(localStorage.getItem(contact_db));
        }
        return contactList;
    })
    const [contact, setContact] = useState("");

    const contactInput = useRef();

    const handleAddContact = () => {
        // let data = [...contacts];
        // data.unshift(contact);
        // setContacts(data);
        setContacts((pre) => {
            let data = [...pre];
            data.unshift(contact);
            return data;
        })
        setContact("")
        contactInput.current.focus();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setContacts((pre) => {
            let data = [...pre];
            data.unshift(contact);
            localStorage.setItem(contact_db, JSON.stringify(data));
            return data;
        })
        setContact("");
    }

    const handleRemoveContact = (value) => {
        let confirm = window.confirm("Are you sure to remove contact?");
        if (confirm) {
            setContacts((pre) => {
                let data = [...pre];
                data = data.filter((item) => item !== value);
                localStorage.setItem(contact_db, JSON.stringify(data));
                return data;
            })
        }
    }
    return (
        <div className="container">
            <h1>Contact App</h1>
            <div className="w-25 my-2">
                <form onSubmit={handleSubmit} className="d-flex align-items-center">
                    <input type="text" className="form-control"
                        value={contact}
                        onInput={(e) => setContact(e.target.value)}
                    />
                    <button type="submit" className="btn btn-dark btn-sm ms-2">Add</button>
                </form>
                {/* <input type="text" className="form-control" 
                    ref={contactInput}
                    value={contact}
                    onInput={(e) => setContact(e.target.value)}
                />
                <button className="btn btn-dark btn-sm ms-2" onClick={handleAddContact}>Add</button> */}
            </div>
            <div className="w-25">
                <ul className="list-group list-group-flush">
                    {
                        contacts.map((contact, index) => (
                            <li key={contact} className="list-group-item d-flex justify-content-between">{contact}
                                <div>
                                    <Link to={`/contact/detail/${contact}/${index}`}>
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                    <span role="button" className="text-danger fw-bolder"
                                        onClick={() => handleRemoveContact(contact)}
                                    >&times;</span>
                                </div>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default ContactApp;