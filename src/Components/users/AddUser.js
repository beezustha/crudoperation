import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddUser";
const AddUser = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
        website: "",
        phone: "",
    });
    console.log(user);
    const { name, email, username, website, phone } = user;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3003/users", user);
        navigate("/");
    };
    return (
        <div className="container" style={{ width: "600px", color: "white" }}>
            <div className="w-75 mx-auto shadow p-5">
                <div className="add-card">
                    <h2
                        className="text-center mb-4"
                        style={{
                            color: "black",
                            fontSize: "1.5rem",
                            marginTop: "15px",
                        }}
                    >
                        Enter the information
                    </h2>
                    <br />
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group">
                            <input
                                style={{ width: "aut0" }}
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Name"
                                name="name"
                                onChange={handleChange}
                                value={name}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <input
                                style={{ width: "aut0" }}
                                type="email"
                                className="form-control "
                                placeholder="Enter Your E-mail Address"
                                name="email"
                                onChange={handleChange}
                                value={email}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <input
                                style={{ width: "aut0" }}
                                type="text"
                                className="form-control "
                                placeholder="Enter Your Username"
                                name="username"
                                onChange={handleChange}
                                value={username}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <input
                                style={{ width: "aut0" }}
                                type="email"
                                className="form-control "
                                placeholder="Enter your website"
                                name="website"
                                onChange={handleChange}
                                value={website}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <input
                                style={{ width: "aut0" }}
                                type="text"
                                className="form-control "
                                placeholder="Enter Your Phone Number"
                                name="phone"
                                onChange={handleChange}
                                value={phone}
                            />
                        </div>
                        <br />
                        <button
                            className="btn btn-dark btn-block"
                            style={{ backgroundColor: "#2192FF" }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
