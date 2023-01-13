import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditUser.css";
const EditUSer = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        id: 0,
        name: "",
        email: "",
        username: "",
        website: "",
        phone: "",
    });
    console.log(user);
    const { name, email, username, website, phone } = user;

    useEffect(() => {
        loadUser();
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3003/users/${id}`, user);
        navigate("/");
    };

    const loadUser = async () => {
        await axios
            .get(`http://localhost:3003/users/${id}`)
            .then((data) => {
                console.log(data.data, "dattta");
                setUser({
                    id: data.data.id,
                    name: data.data.name,
                    email: data.data.email,
                    username: data.data.username,
                    website: data.data.website,
                    phone: data.data.phone,
                });
            })
            .catch((err) => console.log(err, "error from api response"));
    };
    return (
        <div className="container" style={{ width: "600px" }}>
            <div className="w-75 mx-auto shadow p-5">
                <h2
                    className="text-center mb-4"
                    style={{
                        fontSize: "1.5rem",
                        marginTop: "15px",
                    }}
                >
                    Edit the information
                </h2>

                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="name" style={{ textAlign: "left" }}>
                            Name
                            <input
                                style={{ width: "aut0" }}
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Name"
                                name="name"
                                onChange={handleChange}
                                value={name}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" style={{ textAlign: "left" }}>
                            {" "}
                            Email
                            <input
                                style={{ width: "aut0" }}
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Your E-mail Address"
                                name="email"
                                onChange={handleChange}
                                value={email}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" style={{ textAlign: "left" }}>
                            {" "}
                            Username
                            <input
                                style={{ width: "aut0" }}
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Username"
                                name="username"
                                onChange={handleChange}
                                value={username}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Website" style={{ textAlign: "left" }}>
                            {" "}
                            Website
                            <input
                                style={{ width: "aut0" }}
                                type="website"
                                className="form-control form-control-lg"
                                placeholder="Enter your website"
                                name="website"
                                onChange={handleChange}
                                value={website}
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="" style={{ textAlign: "left" }}>
                            {" "}
                            Phone
                            <input
                                style={{ width: "aut0" }}
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Phone Number"
                                name="phone"
                                onChange={handleChange}
                                value={phone}
                            />
                        </label>
                    </div>

                    <button className="btn btn-primary btn-block">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditUSer;
