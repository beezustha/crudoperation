import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = ({ searchThis }) => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };

    console.log(users, "all the users in array");

    return (
        <>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID no.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody style={{ backgroundColor: "#eff5f5" }}>
                    {searchThis !== ""
                        ? users
                              ?.filter((person) =>
                                  person.name.toLowerCase().includes(searchThis)
                              )
                              .map((user) => (
                                  <tr key={user.id}>
                                      <th scope="row">{user.id + 1}</th>
                                      <td>{user.name}</td>
                                      <td>{user.email}</td>
                                      <td>
                                          <Link to={`/users/${user.id}`}>
                                              <i className="bi bi-eye-fill icon "></i>
                                          </Link>
                                          <Link to={`/users/edit/${user.id}`}>
                                              <i className="bi bi-pencil-square icon"></i>
                                          </Link>
                                          <Link
                                              onClick={() =>
                                                  deleteUser(user.id)
                                              }
                                          >
                                              <i className="bi bi-trash3-fill icon"></i>
                                          </Link>
                                      </td>
                                  </tr>
                              ))
                        : users.map((user) => (
                              <tr key={user.id}>
                                  <th scope="row">{user.id + 1}</th>
                                  <td>{user.name}</td>
                                  <td>{user.email}</td>
                                  <td>
                                      <Link to={`/users/${user.id}`}>
                                          <i className="bi bi-eye-fill icon "></i>
                                      </Link>
                                      <Link to={`/users/edit/${user.id}`}>
                                          <i className="bi bi-pencil-square icon"></i>
                                      </Link>
                                      <Link onClick={() => deleteUser(user.id)}>
                                          <i className="bi bi-trash3-fill icon"></i>
                                      </Link>
                                  </td>
                              </tr>
                          ))}
                </tbody>
            </table>
        </>
    );
};

export default Home;
