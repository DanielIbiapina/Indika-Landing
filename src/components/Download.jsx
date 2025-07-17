import React from "react";

const Download = () => {
  return (
    <section id="download" className="download-section">
      <div className="container">
        <div className="download-content">
          <h2 className="section-title">Baixe o Indika agora</h2>
          <p className="section-subtitle">
            Disponível para iOS e Android. Comece a encontrar os melhores
            profissionais da sua vizinhança hoje mesmo!
          </p>

          <div className="download-buttons">
            <a
              href="#"
              className="download-button app-store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/app-store.png"
                alt="Baixar na App Store"
                className="download-badge"
              />
            </a>
            <a
              href="#"
              className="download-button google-play"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/google-play.png"
                alt="Baixar no Google Play"
                className="download-badge"
              />
            </a>
          </div>

          <div className="qr-code-section">
            <div className="qr-code">
              <div className="qr-placeholder">📱 QR Code</div>
              <p>Escaneie para baixar</p>
            </div>
          </div>

          <div className="download-stats">
            <div className="stat">
              <span>⭐ 4.8</span>
              <small>Avaliação na loja</small>
            </div>
            <div className="stat">
              <span>100k+</span>
              <small>Downloads</small>
            </div>
            <div className="stat">
              <span>🔒 100%</span>
              <small>Seguro</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
