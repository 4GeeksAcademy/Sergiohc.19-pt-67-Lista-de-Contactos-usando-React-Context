import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";


export const Home = () => {
    const { store, actions } = useContext(Context);
    const deleteContact = (id) => {
        actions.deleteContact(id);
    };
    const setContactToEdit = (contact) => {
        store.contactToEdit = contact;
    }
    return (
        <>
            <div className="container">
                <div className="text-end" >
                    <Link to="/createcontacts">
                        <button className="btn btn rounded-pill px-3 py-2"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="40" viewBox="0 0 640 512"><path fill="#04ff00" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z" /></svg></button>
                    </Link>
                </div>
                <ul className="list-group">
                    {(store.contacts || []).map((contacts) => {
                        return (
                            <li
                                key={contacts.id}
                                className="list-group-item "
                            >
                                <div className="row">
                                    <div className="col">
                                        <img src="https://i.pinimg.com/474x/bd/f4/d3/bdf4d3fe1f9a17136319df951fe9b3e0.jpg " width="140" height="140" className="img-circle mt-2" id="imagenContacto"></img>
                                    </div>
                                    <div className="col mx-5 my-4">
                                        <div className="row">
                                            <div className="col">
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div><p>{contacts.name}</p></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div><p>{contacts.phone}</p></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div><p>{contacts.mail}</p></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div><p>{contacts.address}</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col d-flex justify-content-end pt-5 mx-0">
                                        <div>
                                            <Link to="/demo">
                                                <button className="btn btn mx-2 " onClick={() => setContactToEdit(contacts)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="#fbff00" d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" /></svg>
                                                </button>
                                            </Link>
                                        </div>
                                        <div>
                                            <button className="btn btn" onClick={() => actions.deleteContact(contacts.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="#ff0000" d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <br />
            </div>
        </>
    );
};