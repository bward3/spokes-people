import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: "",
      email: "",
      password: "",
    });

  };



  return (
    <div className="">
      <div className="level-right">
        <h4 className="title">Sign Up</h4>
        <div className="">
          {data ? (
            <p>
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <input
                className="input is-info column is-three-quarters"
                placeholder="Your username"
                name="username"
                type="text"
                value={formState.name}
                onChange={handleChange}
              />
              <input
                className="input is-info column is-three-quarters"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="input is-info column is-three-quarters"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <div className="buttons has-addons is-centered column is-one-third">
                <button
                  className="button is-info"
                  style={{ cursor: "pointer" }}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          )}

          {error && (
            <div className="">{error.message}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
