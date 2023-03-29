import React, { useEffect } from "react";
// import { Link,useHistory } from "react-router-dom";
import ForwardLogo from "../assets/Forward.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  });

  return (
    <div className="login">
      <div className="login__container">
        <img src={ForwardLogo} alt="Forward Logo" />
        <h1>Sign in to Forward</h1>
        <p></p>
      </div>
    </div>
  );
};

export default Login;
