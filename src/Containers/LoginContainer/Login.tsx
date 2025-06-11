import React from "react";

import FormLogin from "./FormLogin";
import ImageLogin from "./ImageLogin";

import './Login.css'

function Login() {
  return (
    <div id="containerLogin">
      <div className="contentFlex col-md-12">
        <div className="col-md-6">
          <FormLogin />
        </div>
        <div className="col-md-6">
          <ImageLogin />
        </div>
      </div>
    </div>
  );
}

export default Login;