import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Teléfono: 123-456-789</p>
        </div>
      </div>
      <div className="footer-section footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Maestra Celia - Tutorías para Niños
        </p>
      </div>
    </footer>
  );
}
