import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-outline-light" to="/users/add">
                    Add User
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
