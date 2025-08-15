import React from "react";

const SubscriptionCTA = () => {
  const scrollToSubscription = () => {
    // Primeiro tenta fazer scroll para a seção de assinatura
    const subscriptionSection = document.getElementById("assinatura");
    if (subscriptionSection) {
      subscriptionSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Se não encontrar a seção, navega diretamente para a página
      window.location.href = "/assinatura";
    }
  };

  return (
    <section className="subscription-cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              <span className="highlight">
                Transforme-se em um Prestador de Serviços
              </span>
            </h2>
            <p className="cta-subtitle">
              Milhares de vizinhos estão procurando por profissionais como você.
              Comece a oferecer seus serviços hoje mesmo e aumente sua renda!
            </p>
            <div className="cta-features">
              <div className="feature">
                <span>Crie seu perfil profissional</span>
              </div>
              <div className="feature">
                <span>Receba avaliações e reputação</span>
              </div>
              <div className="feature">
                <span>Ganhe dinheiro fazendo o que ama</span>
              </div>
            </div>
            <button className="cta-button" onClick={scrollToSubscription}>
              Começar Agora - A partir de R$ 7,99/mês
            </button>
            <p className="cta-note">
              ✨ 30 dias grátis • Cancele quando quiser
            </p>
          </div>

          <div className="cta-visual">
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
                        <div className="service-name">Limpeza Residencial</div>
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

      <style jsx>{`
        .subscription-cta {
          background: linear-gradient(135deg, #422680 0%, #6366f1 100%);
          color: white;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .subscription-cta::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }

        .cta-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .cta-text {
          max-width: 500px;
        }

        .cta-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        .highlight {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-subtitle {
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: 32px;
          opacity: 0.95;
        }

        .cta-features {
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

        .feature-icon {
          font-size: 1.5rem;
          width: 32px;
          text-align: center;
        }

        .cta-button {
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          color: #1e293b;
          border: none;
          padding: 20px 40px;
          font-size: 1.25rem;
          font-weight: 700;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(251, 191, 36, 0.4);
          margin-bottom: 16px;
          width: 100%;
          max-width: 400px;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(251, 191, 36, 0.6);
        }

        .cta-button:active {
          transform: translateY(-2px);
        }

        .cta-note {
          font-size: 0.875rem;
          opacity: 0.8;
          text-align: center;
          max-width: 400px;
        }

        .cta-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .phone-mockup {
          width: 280px;
          height: 560px;
          background: #1e293b;
          border-radius: 40px;
          padding: 8px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .phone-mockup::before {
          content: "";
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: #64748b;
          border-radius: 2px;
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 32px;
          overflow: hidden;
          position: relative;
        }

        .app-preview {
          padding: 20px;
          height: 100%;
          display: flex;
          flex-direction: column;
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

        /* Responsividade */
        @media (max-width: 1024px) {
          .cta-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .cta-text {
            max-width: 100%;
          }

          .cta-button {
            margin: 0 auto 16px;
          }

          .cta-note {
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .subscription-cta {
            padding: 60px 0;
          }

          .cta-title {
            font-size: 2.5rem;
          }

          .cta-subtitle {
            font-size: 1.125rem;
          }

          .cta-button {
            padding: 18px 32px;
            font-size: 1.125rem;
          }

          .phone-mockup {
            width: 240px;
            height: 480px;
          }
        }

        @media (max-width: 480px) {
          .subscription-cta {
            padding: 40px 0;
          }

          .cta-title {
            font-size: 2rem;
          }

          .cta-subtitle {
            font-size: 1rem;
          }

          .cta-button {
            padding: 16px 24px;
            font-size: 1rem;
          }

          .phone-mockup {
            width: 200px;
            height: 400px;
          }

          .app-preview {
            padding: 16px;
          }

          .service-card {
            padding: 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default SubscriptionCTA;
