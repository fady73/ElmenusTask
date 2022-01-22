import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";

import { ADMIN } from "../../constant/role";

import { Form, Button } from "react-bootstrap";
import notify from "../toaster/index";

import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { history } = props;

  useEffect(() => {
    if (localStorage.getItem("userInfo") === ADMIN) {
      history.push("/admin-panel");
    }
  }, []);

  const onSubmitLogin = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      localStorage.setItem("userInfo", "ADMIN");
      history.push("/admin-panel");
    } else {
      notify("Wrong username or password");
    }
  };

  const onChangeUserName = (event) => {
    setUsername(event.currentTarget.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };
  return (
    <>
      <div className="br-login">
        <div className="br-login__title">Log-in to Admin Pages</div>
        <div className="br-login__form-container">
          <form onSubmit={onSubmitLogin}>
            <div className="br-login__form-container__item">
              <span>
                Username <span>*</span>
              </span>
              <Form.Control
                type="text"
                placeholder="Username"
                required
                onChange={onChangeUserName}
              />
            </div>
            <div className="br-login__form-container__item">
              <span>
                Password <span>*</span>
              </span>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                onChange={onChangePassword}
              />
            </div>
            <hr />
            <div className="br-login__form-container__footer">
              <a href="/">Back to Home</a>
              <Button variant="secondary" type="submit">
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);
