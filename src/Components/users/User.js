import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./User.css";

const User = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        webiste: "",
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    };
    return (
        <>
            <div class="card">
                <div class="card-header">User Information</div>
                <div class="card-body">
                    <h5 class="card-title" style={{ fontWeight: "200" }}>
                        User ID: {user.id}
                    </h5>
                    <div class="card-text">
                        <p>Name:{user.name}</p>

                        <p>Username:{user.username}</p>

                        <p>Email:{user.email}</p>

                        <p>Website:{user.website}</p>

                        <p>Contact:{user.phone}</p>
                    </div>

                    <Link to="/">
                        {" "}
                        <button type="button" class="btn btn-dark">
                            Close
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default User;
