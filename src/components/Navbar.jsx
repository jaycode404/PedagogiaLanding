import React from "react";

export default function Navbar() {
  const navlist = [
    { title: "Sobre Nosotros", url: "#nosotros" },
    { title: "Testimoniales", url: "#testimonial" },
    { title: "Contacto", url: "#contacto" },
  ];

  return (
    <div className="nav-container">
      <div className="logo"> <img className="logo-icon" src="/assets/lapiz.png" alt="" /><span className="logo-text">Mestra celia</span></div>
      <div className="navlist-container">
        {navlist.map((item, index) => (
          <a className="nav-link" key={index} href={item.url}>
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
