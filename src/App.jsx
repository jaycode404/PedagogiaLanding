import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Testimonials from "./components/Testimonials";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="applist">
        <Navbar />
        <Header />
        <Nosotros />
        <Testimonials />
        <Contacto />
        <Footer />
      </div>
    </>
  );
}

export default App;
