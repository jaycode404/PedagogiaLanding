import React, { useState } from "react";

export default function Nosotros() {
  const [url, setUrl] = useState("https://pedagogia-landing.vercel.app");
  return (
    <section id="nosotros" className="container nosotros-container">
      <h2 className="section-title">¿Porqué nosotros?</h2>
      <div className="perk-container">
        <div>
          <div className="perk">
            <div className="tiempo-bg"></div>
            <h3>Tiempo</h3>
          </div>
          <p className="perk-desc">
            En periodos cortos de tiempo nuestros alumnos recuperan y superan su
            nivel escolar
          </p>
        </div>
        <div>
          <div className="perk">
            <div className="pro-bg"></div>

            <h3>Profesionalismo</h3>
          </div>
          <p className="perk-desc">
            Certificados y reconocidos en el campo de la educacion infantil{" "}
          </p>
        </div>
        <div>
          <div className="perk">
            <div className="tacto-bg"></div>

            <h3>Tacto</h3>
          </div>
          <p className="perk-desc">Cada niño presenta una conducta diferente y es nuestro trabajo adaptar la enseñanza a la misma.</p>
        </div>
      </div>
    </section>
  );
}
