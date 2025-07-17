import React, { useState, useEffect } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <Logo size="medium" />
          </div>
          <ul className={`nav-menu ${isMobileMenuOpen ? "nav-menu-open" : ""}`}>
            <li>
              <a href="#como-funciona" onClick={(e) => handleNavClick(e, "#como-funciona")}>
                Como funciona
              </a>
            </li>
            <li>
              <a href="#para-clientes" onClick={(e) => handleNavClick(e, "#para-clientes")}>
                Para clientes
              </a>
            </li>
            <li>
              <a href="#para-prestadores" onClick={(e) => handleNavClick(e, "#para-prestadores")}>
                Para prestadores
              </a>
            </li>
            <li>
              <a href="#comunidades" onClick={(e) => handleNavClick(e, "#comunidades")}>
                Comunidades
              </a>
            </li>
          </ul>
          <div className={`nav-actions ${isMobileMenuOpen ? "nav-actions-open" : ""}`}>
            <a href="#login" className="nav-link">Entrar</a>
            <a href="#download" className="btn btn-primary" onClick={(e) => handleNavClick(e, "#download")}>
              Baixar App
            </a>
          </div>
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
            onClick={handleMobileMenuToggle} 
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;