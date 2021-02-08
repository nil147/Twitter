import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { login } from "../features/userSlice";
import "../styles/Login.scss";
import logo from "../Twitter.svg";

function Login() {

  const dispatch = useDispatch();

  const loginToApp = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            email: result.user.email,
            uid: result.user.uid,
            displayName: result.user.displayName,
            photoUrl: result.user.photoURL,
          })
        );
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login-top">
        <img src={logo} alt="Logo" />
        <h1>Log in to Twitter</h1>
        <div className="login-input">
          <input type="text" placeholder="Phone, email, or username" />
          <input type="password" placeholder="Password" />
        </div>

        <Button onClick={loginToApp}>Log in</Button>
      </div>
      <div className="login-bottom">
        <p>Forgot password?</p>
        <p>Sign up for Twitter</p>
      </div>
    </div>
  );
}

export default Login;
