import React, { useState } from "react";
import "./login.css";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../actions";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logInSuccessMsg, setLogInSuccessMsg] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();
  // const handleLogInSuccessMsg = () => {
  //   setLogInSuccessMsg(true);
  //   setTimeout(setLogInSuccessMsg(false), 1000);
  // };

  const handleLogin = async e => {
    e.preventDefault();
    const user = {
      email: `${email}`,
      password: `${password}`
    };
    await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(res => {
        if (res.status === 200) {
          console.log("Login successful");

          console.log(res.json());
          localStorage.setItem("auth-token", res.headers.get("auth-token"));
          dispatch(logIn());
        } else console.log("Login failed");
      })
      // .then(res => res.json())
      // .then(json => {
      // localStorage.setItem("auth-token", res.headers.get("auth-token"));
      //   console.log(json);
      //   dispatch(logIn());
      // })
      .catch(err => console.log(err));
  };
  return isLoggedIn ? (
    <Redirect to="/shop" />
  ) : (
    // <div id="loginWrap">
    //   Log in successful
    //   <Link to="/shop">Shop now</Link>
    // </div>
    //
    <div id="loginWrap">
      <form id="loginForm" onSubmit={handleLogin}>
        <h2>Log In</h2>
        <input
          className="formInput"
          onChange={e => setEmail(e.target.value)}
          type="text/email"
          placeholder="Email"
        ></input>
        <input
          className="formInput"
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        ></input>
        <input id="loginBtn" type="submit" value="Log In"></input>
        <Link className="routerLink" id="orRegister" to="/register">
          Or register
        </Link>
      </form>
    </div>
  );
};
export default Login;
