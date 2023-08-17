import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { users } from "../../db.json";
const NavBar = ({ setfilter }) => {
	const [search, setSearch] = useState("");
	const handleChange = (e) => {
		setSearch(e.target.value);
		setfilter(e.target.value);
	};
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark ">
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<NavLink className="nav-link" to="/">
								Home
							</NavLink>
						</li>
					</ul>
					<div className="search-item">
						<form class="form-inline my-2 my-lg-0">
							<input
								style={{ width: "500px", margin: "auto 200px" }}
								class="form-control mr-sm-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
								onChange={handleChange}
							/>
						</form>
					</div>
				</div>
				<div>
					<Link className="btn btn-outline-light" to="/users/add">
						Add User
					</Link>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
