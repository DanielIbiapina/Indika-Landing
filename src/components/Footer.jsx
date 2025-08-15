import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <Logo size="medium" variant="white" />
              <p>
                Conectando vizinhos aos melhores profissionais da sua
                comunidade.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Instagram">
                  📷
                </a>
                <a href="#" aria-label="Facebook">
                  📘
                </a>
                <a href="#" aria-label="Twitter">
                  🐦
                </a>
                <a href="#" aria-label="LinkedIn">
                  💼
                </a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Links Úteis</h4>
            <ul>
              <li>
                <a href="#como-funciona">Como funciona</a>
              </li>
              <li>
                <a href="/suporte">Suporte</a>
              </li>
              <li>
                <a href="/assinatura">Cadastre-se</a>
              </li>
              <li>
                <a href="/assinatura">Planos</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#termos">Termos de Uso e Política de Privacidade</a>
              </li>
              <li>
                <a href="/excluir-conta">Excluir Conta</a>
              </li>
              <li>
                <a href="/assinatura">Assinatura</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Indika. Todos os direitos reservados.</p>
            <div className="footer-badges">
              <span className="badge">🇧🇷 Empresa Brasileira</span>
              <span className="badge">🔒 Site Seguro</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
