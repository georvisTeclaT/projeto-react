import React from "react";

import './ImageLogin.css'


function ImageLogin() {
  return (
    <div className="row ">
        <div id="containerImg">
            <img src="/images/login-background.png" alt="ImagemLogin" />
        </div>

        <div id="containerTitleImg">
          <div id="contentTilteImg">
            <h3 className="titleImg">Toou</h3>
            <h4 className="subtitleImg">Sua nova plataforma de viagens corporativas!</h4>
            <div id="contentBtn">
              <button type="button">
                <span>Saiba mais</span>
              </button>
            </div>
          </div>
        </div>


    </div>
  );
}

export default ImageLogin;