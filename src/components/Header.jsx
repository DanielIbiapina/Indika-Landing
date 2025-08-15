import React, { useState, useEffect } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubscriptionPage, setIsSubscriptionPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Verificar se está na página de assinatura
    const checkPage = () => {
      setIsSubscriptionPage(window.location.pathname === "/assinatura");
    };

    checkPage();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Se estiver na página de assinatura, navegar para a página inicial
    if (isSubscriptionPage) {
      window.location.href = `/${targetId}`;
      return;
    }

    // Se estiver na página inicial, fazer scroll para a seção
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Se estiver na página de assinatura, navegar para a página inicial
    if (isSubscriptionPage) {
      window.location.href = "/#download";
      return;
    }

    // Se estiver na página inicial, fazer scroll para a seção
    const targetElement = document.querySelector("#download");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <a href="/">
              <Logo size="medium" />
            </a>
          </div>
          <ul className={`nav-menu ${isMobileMenuOpen ? "nav-menu-open" : ""}`}>
            <li>
              <a
                href="#como-funciona"
                onClick={(e) => handleNavClick(e, "#como-funciona")}
              >
                Como funciona
              </a>
            </li>
            <li>
              <a
                href="#para-clientes"
                onClick={(e) => handleNavClick(e, "#para-clientes")}
              >
                Para clientes
              </a>
            </li>
            <li>
              <a
                href="#para-prestadores"
                onClick={(e) => handleNavClick(e, "#para-prestadores")}
              >
                Para prestadores
              </a>
            </li>
            <li>
              <a href="/assinatura" className="nav-highlight">
                Assinatura
              </a>
            </li>
          </ul>
          <div
            className={`nav-actions ${
              isMobileMenuOpen ? "nav-actions-open" : ""
            }`}
          >
            <a
              href="#download"
              className="btn btn-primary"
              onClick={handleDownloadClick}
            >
              Baixar App
            </a>
          </div>
          <button
            className={`mobile-menu-toggle ${
              isMobileMenuOpen ? "mobile-menu-open" : ""
            }`}
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
