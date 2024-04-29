import React from "react";

export default function ContactForm() {
  return (
    <form className="contact-form" action="">
      <div className="form-elements">
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input type="text" name="nombre" id="nombre" />
        </div>
        <div>
          <label htmlFor="grado">Grado Escolar del Niñ@: </label>
          <input type="text" name="grado" id="grado" />
        </div>
        <div>
          <label htmlFor="telefono">Telefono: </label>
          <input type="number" name="telefono" id="telefono" />
        </div>
      </div>
      <button type="submit" className="form-button">
        Enviar
      </button>
    </form>
  );
}
