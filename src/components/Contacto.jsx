import React from "react";
import ContactForm from "./ContactForm";

export default function Contacto() {
  return (
    <section id="contacto" className="container contacto-container">
      <h2 className="section-title">Contactanos</h2>
      {/* <ContactForm /> */}
      <p>
        No dudes en aclarar tus dudas con nosotros, escribenos por WhatsApp o
        Llámanos:
      </p>
      <div className="buttons-container">
        <a className="button" href="tel:5561595173">
          Llamar <img className="icon" src="/assets/phone.png" alt="" />
        </a>
        <a
          className="button"
          href="https://wa.me/+525561595173
"
        >
          WhatsApp <img className="icon" src="/assets/whatsapp.png" alt="" />
        </a>
      </div>
    </section>
  );
}
