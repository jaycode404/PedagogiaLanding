import React, { useState } from "react";

export default function Nosotros() {
  const [url, setUrl] = useState("https://pedagogia-landing.vercel.app");
  return (
    <div id="nosotros" className="container">
      <h2 className="title">Porqué nosotros?</h2>
      <div className="perk-container">
        <div>
          <div className="perk">
            <div className="tiempo-bg"></div>
            <h3>Tiempo</h3>
          </div>
          <p>nuestros metodos han sido probados por años de experiencia</p>
        </div>
        <div>
          <div className="perk">
            <div className="pro-bg"></div>

            <h3>Profesionalismo</h3>
          </div>
          <p>nuestros metodos han sido probados por años de experiencia</p>
        </div>
        <div>
          <div className="perk">
            <div className="tacto-bg"></div>

            <h3>Tacto</h3>
          </div>
          <p>nuestros metodos han sido probados por años de experiencia</p>
        </div>
      </div>
    </div>
  );
}
