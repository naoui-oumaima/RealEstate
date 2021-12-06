import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css"
import { MDBBtn } from "mdbreact"
import { useHistory } from "react-router";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const history = useHistory()

  return <MDBBtn color="elegant" className="myButton waves" onClick={() => history.push("./main")}>Click Here</MDBBtn>;
};

export default LoginButton;
