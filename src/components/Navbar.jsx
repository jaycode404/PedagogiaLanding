import React from "react";

export default function Navbar() {
  const navlist = [
    { title: "Sobre Nosotros", url: "#nosotros" },
    { title: "Testimoniales", url: "#testimonial" },
    { title: "Contacto", url: "#contacto" },
  ];

  return (
    <div className="nav-container">
      <div>Excelencia</div>
      <div className="navlist-container">
        {navlist.map((item, index) => (
          <a key={index} href={item.url}>
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
}
