import React from "react";
import Logo from "./Logo";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-logo">
              <Logo size="large" />
            </div>
            <h1>Conecte-se com profissionais da sua vizinhanca</h1>
            <p>
              O Indika e o marketplace que conecta voce aos melhores prestadores
              de servicos da sua comunidade. Recomendacoes reais de vizinhos
              reais.
            </p>
            <div className="hero-buttons">
              <a href="#download" className="btn btn-primary">
                📱 Baixar App
              </a>
              <a href="#como-funciona" className="btn btn-secondary">
                Como funciona
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Prestadores</span>
              </div>
              <div className="stat">
                <span className="stat-number">50k+</span>
                <span className="stat-label">Clientes</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Comunidades</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-preview">
                  <div className="app-header">
                    <Logo size="small" />
                  </div>
                  <p>Boas-vindas, Daniel!</p>
                  <div className="search-bar">🔍 O que voce precisa?</div>
                  <div className="categories">
                    <div className="category">🔧 Reformas</div>
                    <div className="category">💄 Beleza</div>
                    <div className="category">🏠 Limpeza</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #422680 0%, #6366f1 100%);
          color: white;
          padding: 100px 0;
          min-height: 80vh;
          display: flex;
          align-items: center;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-text h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .hero-text p {
          font-size: 1.3rem;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #fbbf24;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .phone-mockup {
          background: #333;
          border-radius: 30px;
          padding: 20px;
          max-width: 300px;
          margin: 0 auto;
        }

        .phone-screen {
          background: white;
          border-radius: 20px;
          padding: 20px;
          color: #333;
        }

        .app-preview h3 {
          color: #422680;
          margin-bottom: 10px;
        }

        .search-bar {
          background: #f3f4f6;
          padding: 10px;
          border-radius: 8px;
          margin: 15px 0;
          color: #666;
        }

        .categories {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .category {
          background: #422680;
          color: white;
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .hero-stats {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
