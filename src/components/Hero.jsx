import React, { useState, useEffect } from "react";
import Logo from "./Logo";

const Hero = () => {
  const [activeSide, setActiveSide] = useState("providers"); // "providers" ou "clients"
  const [autoPlay, setAutoPlay] = useState(true);

  // Transição automática a cada 5 segundos
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setActiveSide((prev) => (prev === "providers" ? "clients" : "providers"));
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const scrollToSubscription = () => {
    const subscriptionSection = document.getElementById("assinatura");
    if (subscriptionSection) {
      subscriptionSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.location.href = "/assinatura";
    }
  };

  return (
    <section className="hero">
      <div className="container">
        {/* Controles de navegação */}
        <div className="hero-controls">
          <button
            className={`control-btn ${
              activeSide === "providers" ? "active" : ""
            }`}
            onClick={() => {
              setActiveSide("providers");
            }}
          >
            <span className="control-icon">💼</span>
            Para Prestadores
          </button>
          <button
            className={`control-btn ${
              activeSide === "clients" ? "active" : ""
            }`}
            onClick={() => {
              setActiveSide("clients");
            }}
          >
            <span className="control-icon">👥</span>
            Para Clientes
          </button>
        </div>

        <div className="hero-content">
          {/* Lado Esquerdo - Para Clientes */}
          <div
            className={`hero-side clients-side ${
              activeSide === "clients" ? "active" : ""
            }`}
          >
            <div className="hero-text">
              <h1>Conecte-se com profissionais da sua vizinhança</h1>
              <p>
                O Indika é o marketplace que conecta você aos melhores
                prestadores de serviços da sua comunidade. Recomendações reais
                de vizinhos reais.
              </p>
              <div className="hero-buttons">
                <a href="#download" className="btn btn-primary">
                  Baixar App
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
                  <span className="stat-label">Para contratar serviços</span>
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
                    <div className="search-bar">🔍 O que você precisa?</div>
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

          {/* Lado Direito - Para Prestadores */}
          <div
            className={`hero-side providers-side ${
              activeSide === "providers" ? "active" : ""
            }`}
          >
            <div className="hero-text">
              <h1>
                <span className="highlight">
                  Transforme-se em um Prestador de Serviços
                </span>
              </h1>
              <p>
                Milhares de vizinhos estão procurando por profissionais como
                você. Comece a oferecer seus serviços hoje mesmo e aumente sua
                renda!
              </p>
              <div className="hero-features">
                <div className="feature">
                  <span>✓ Crie seu perfil profissional</span>
                </div>
                <div className="feature">
                  <span>✓ Receba avaliações e reputação</span>
                </div>
                <div className="feature">
                  <span>✓ Ganhe dinheiro fazendo o que ama</span>
                </div>
              </div>
              <div className="hero-buttons">
                <button
                  className="btn btn-primary"
                  onClick={scrollToSubscription}
                >
                  Começar Agora - A partir de R$ 7,99/mês
                </button>
                <p className="cta-note">
                  ✨ 30 dias grátis • Cancele quando quiser
                </p>
              </div>
            </div>
            <div className="hero-image">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="app-preview">
                    <div className="app-header">
                      <div className="app-icon">🏠</div>
                      <div className="app-title">Indika</div>
                    </div>
                    <div className="app-content">
                      <div className="service-card">
                        <div className="service-icon">🔧</div>
                        <div className="service-info">
                          <div className="service-name">
                            Manutenção Residencial
                          </div>
                          <div className="service-rating">⭐⭐⭐⭐⭐ 4.9</div>
                        </div>
                      </div>
                      <div className="service-card">
                        <div className="service-icon">🧹</div>
                        <div className="service-info">
                          <div className="service-name">
                            Limpeza Residencial
                          </div>
                          <div className="service-rating">⭐⭐⭐⭐⭐ 4.8</div>
                        </div>
                      </div>
                      <div className="service-card">
                        <div className="service-icon">🌱</div>
                        <div className="service-info">
                          <div className="service-name">Jardinagem</div>
                          <div className="service-rating">⭐⭐⭐⭐⭐ 4.7</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores de progresso */}
        <div className="hero-indicators">
          <div className="indicator-dots">
            <span
              className={`dot ${activeSide === "providers" ? "active" : ""}`}
            ></span>
            <span
              className={`dot ${activeSide === "clients" ? "active" : ""}`}
            ></span>
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

        .hero-controls {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 40px;
          position: relative;
          z-index: 2;
        }

        .control-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .control-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }

        .control-btn.active {
          background: rgba(255, 255, 255, 0.25);
          border-color: #fbbf24;
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
        }

        .control-icon {
          font-size: 1.2rem;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          min-height: 600px;
        }

        .hero-side {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.6s ease;
          pointer-events: none;
        }

        .hero-side.active {
          opacity: 1;
          transform: translateX(0);
          pointer-events: all;
        }

        .hero-side.clients-side {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-side.providers-side {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-text h1 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 24px;
          line-height: 1.1;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .highlight {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-text p {
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          margin-bottom: 40px;
          opacity: 0.95;
          line-height: 1.6;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .hero-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 1.125rem;
          font-weight: 500;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }

        .hero-buttons .btn {
          align-self: flex-start;
        }

        .cta-note {
          font-size: 0.875rem;
          opacity: 0.8;
          text-align: center;
          margin: 0;
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

        .app-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          padding: 16px;
          background: linear-gradient(135deg, #422680, #6366f1);
          border-radius: 16px;
          color: white;
        }

        .app-icon {
          font-size: 1.5rem;
        }

        .app-title {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .app-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .service-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .service-icon {
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .service-info {
          flex: 1;
        }

        .service-name {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 4px;
          font-size: 0.875rem;
        }

        .service-rating {
          font-size: 0.75rem;
          color: #64748b;
        }

        .hero-indicators {
          display: flex;
          justify-content: center;
          margin-top: 40px;
          position: relative;
          z-index: 2;
        }

        .indicator-dots {
          display: flex;
          gap: 12px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .dot.active {
          background: #fbbf24;
          transform: scale(1.2);
        }

        .dot:hover {
          background: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 1024px) {
          .hero-side.clients-side,
          .hero-side.providers-side {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .hero-buttons .btn {
            align-self: center;
          }

          .hero-stats {
            justify-content: center;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 80px 0 60px 0;
            min-height: auto;
            margin-top: 40px;
          }

          .hero-controls {
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;
          }

          .control-btn {
            width: auto;
            min-width: 140px;
            justify-content: center;
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-stats {
            flex-direction: column;
            gap: 20px;
          }

          .stat {
            min-width: 100px;
          }

          /* Em mobile, reorganizar o layout para ser mais vertical */
          .hero-side.clients-side,
          .hero-side.providers-side {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          /* Reduzir o tamanho dos celulares em mobile */
          .phone-mockup {
            transform: none;
            max-width: 240px;
            padding: 15px;
          }

          .phone-screen {
            padding: 15px;
          }

          /* Ajustar espaçamentos para mobile */
          .hero-text {
            order: 1;
          }

          .hero-image {
            order: 2;
          }

          /* Reduzir margens e espaçamentos */
          .hero-text h1 {
            margin-bottom: 20px;
          }

          .hero-text p {
            margin-bottom: 30px;
          }

          .hero-buttons {
            margin-bottom: 30px;
          }

          .hero-stats {
            margin-bottom: 20px;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 60px 0 40px 0;
            min-height: auto;
            margin-top: 30px;
          }

          .hero-text h1 {
            font-size: 2rem;
            margin-bottom: 16px;
          }

          .hero-text p {
            font-size: 1rem;
            margin-bottom: 24px;
          }

          .hero-buttons {
            margin-bottom: 24px;
          }

          /* Ajustar controles para telas muito pequenas */
          .hero-controls {
            gap: 12px;
          }

          .control-btn {
            min-width: 120px;
            padding: 8px 16px;
            font-size: 0.85rem;
          }

          .hero-stats {
            flex-direction: column;
            gap: 16px;
            margin-bottom: 16px;
          }

          .stat {
            min-width: auto;
          }

          /* Em telas muito pequenas, reduzir ainda mais os celulares */
          .phone-mockup {
            max-width: 200px;
            padding: 12px;
          }

          /* Opção: esconder completamente os celulares em telas muito pequenas */
          @media (max-width: 360px) {
            .hero-image {
              display: none;
            }

            .hero-side.clients-side,
            .hero-side.providers-side {
              gap: 20px;
            }

            .hero-text {
              margin-bottom: 0;
            }
          }

          .phone-screen {
            padding: 12px;
          }

          /* Reduzir espaçamentos internos dos celulares */
          .app-preview {
            padding: 12px;
          }

          .app-header {
            padding: 12px;
            margin-bottom: 16px;
          }

          .service-card {
            padding: 12px;
            gap: 12px;
          }

          .search-bar {
            padding: 10px;
            margin: 12px 0;
          }

          .categories {
            gap: 6px;
          }

          .category {
            padding: 4px 10px;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
