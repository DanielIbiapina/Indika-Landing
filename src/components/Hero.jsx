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
                <span className="stat-number">Lançamento dia 17</span>
                <span className="stat-label">Acesso antecipado</span>
              </div>
              <div className="stat">
                <span className="stat-number">BR</span>
                <span className="stat-label">
                  Foco: São Carlos, Ribeirão Preto, Teresina
                </span>
              </div>
              <div className="stat">
                <span className="stat-number">Gratuito</span>
                <span className="stat-label">Assine para criar serviços</span>
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
          padding: 80px 0;
          min-height: 80vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.03)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.1;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-text h1 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 24px;
          line-height: 1.1;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .hero-text p {
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          margin-bottom: 40px;
          opacity: 0.95;
          line-height: 1.6;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
          flex-wrap: wrap;
        }

        .hero-stats {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          min-width: 120px;
        }

        .stat-number {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: #fbbf24;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: clamp(0.8rem, 2vw, 0.9rem);
          opacity: 0.9;
          line-height: 1.3;
          text-align: center;
        }

        .phone-mockup {
          background: #333;
          border-radius: 30px;
          padding: 20px;
          max-width: 300px;
          margin: 0 auto;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transform: perspective(1000px) rotateY(-5deg);
          transition: transform 0.3s ease;
        }

        .phone-mockup:hover {
          transform: perspective(1000px) rotateY(0deg);
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
          padding: 12px;
          border-radius: 8px;
          margin: 15px 0;
          color: #666;
          font-size: 0.9rem;
        }

        .categories {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .category {
          background: #422680;
          color: white;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          white-space: nowrap;
        }

        @media (max-width: 1024px) {
          .hero-content {
            gap: 40px;
          }

          .hero-stats {
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 120px 0 60px 0;
            min-height: auto;
            margin-top: 60px;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-stats {
            justify-content: center;
            gap: 30px;
          }

          .stat {
            min-width: 100px;
          }

          .phone-mockup {
            transform: none;
            max-width: 280px;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 100px 0 40px 0;
            margin-top: 60px;
          }

          .hero-text h1 {
            font-size: 2rem;
          }

          .hero-text p {
            font-size: 1rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 20px;
          }

          .stat {
            min-width: auto;
          }

          .phone-mockup {
            max-width: 250px;
            padding: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
