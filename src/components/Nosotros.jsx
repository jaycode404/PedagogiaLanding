import React, { useState } from "react";

export default function Nosotros() {
  const [url, setUrl] = useState("https://pedagogia-landing.vercel.app/");
  return (
    <div className="container">
      <h2 className="title">Porqué nosotros?</h2>
      <div className="perk-container">
        <div>
          <div className="perk">
            <img
              src={`${url}/tiempo2.png`}
              alt="tiempo"
              className="perk-icon"
            />
            <h3>Tiempo</h3>
          </div>
          <p>nuestros metodos han sido probados por años de experiencia</p>
        </div>
        <div>
          <div className="perk">
            <img src={`${url}/assets/experiencia.png`} alt="" />
            <h3>Profesionalismo</h3>
          </div>
          <p>nuestros metodos han sido probados por años de experiencia</p>
        </div>
        <div>
          <div className="perk">
            <img src={`${url}/check.png`} alt="" />
            <h3>Tacto</h3>
          </div>
          <p>nuestros metodos han sido probados por años de experiencia</p>
        </div>
      </div>
    </div>
  );
}
