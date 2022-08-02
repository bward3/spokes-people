import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import Signup from "../pages/Signup"
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="">
      <section className="hero has-background-info">
        <div className="hero-body">
          <p className="title">Spokes People</p>
          <p className="subtitle">Login or Sign Up</p>
        </div>
      </section>
      <div className="container">
        <h4 className="title">Login</h4>
        <div className="">
          {data ? (
            <p>Success! You may now head {" "}
            <Link to="/Profile">to your profile page.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
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

          {error && <div className="">{error.message}</div>}
        </div>
      </div>
      <div className="content">
            <Signup />
      </div>
    </div>
  );
};
export default Login;
