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
            <h4>Para Clientes</h4>
            <ul>
              <li>
                <a href="#como-funciona">Como funciona</a>
              </li>
              <li>
                <a href="#categorias">Categorias</a>
              </li>
              <li>
                <a href="#seguranca">Segurança</a>
              </li>
              <li>
                <a href="/suporte">Suporte</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Para Prestadores</h4>
            <ul>
              <li>
                <a href="#cadastro">Cadastre-se</a>
              </li>
              <li>
                <a href="#planos">Planos</a>
              </li>
              <li>
                <a href="#ferramentas">Ferramentas</a>
              </li>
              <li>
                <a href="#central-ajuda">Central de Ajuda</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li>
                <a href="#sobre">Sobre nós</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
              <li>
                <a href="#carreiras">Carreiras</a>
              </li>
              <li>
                <a href="#imprensa">Imprensa</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#termos">Termos de Uso</a>
              </li>
              <li>
                <a href="#privacidade">Política de Privacidade</a>
              </li>
              <li>
                <a href="#cookies">Cookies</a>
              </li>
              <li>
                <a href="#lgpd">LGPD</a>
              </li>
              <li>
                <a href="/excluir-conta">Excluir Conta</a>
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
