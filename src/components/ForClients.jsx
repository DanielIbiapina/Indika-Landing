import React from "react";

const ForClients = () => {
  const benefits = [
    {
      icon: "🛡️",
      title: "Confiança garantida",
      description:
        "Profissionais verificados e recomendados pela sua comunidade",
    },
    {
      icon: "💰",
      title: "Preços justos",
      description: "Compare orçamentos e negocie direto com o prestador",
    },
    {
      icon: "⚡",
      title: "Rapidez",
      description:
        "Encontre profissionais disponíveis na sua região em minutos",
    },
    {
      icon: "📱",
      title: "Tudo no app",
      description: "Chat, pagamento e avaliação, tudo em um só lugar",
    },
  ];

  return (
    <section id="para-clientes" className="section">
      <div className="container">
        <div className="content-grid">
          <div className="content-text">
            <h2 className="section-title" style={{ textAlign: "left" }}>
              Para você que precisa de serviços
            </h2>
            <p
              className="section-subtitle"
              style={{ textAlign: "left", marginLeft: 0 }}
            >
              Encontre os melhores profissionais da sua vizinhança com a
              confiança de quem já contratou
            </p>

            <div className="benefits">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "40px" }}>
              <a href="#download" className="btn btn-primary">
                Começar agora
              </a>
            </div>
          </div>

          <div className="content-image">
            <div className="feature-showcase">
              <div className="feature-card">
                <h4>🔍 Busca Inteligente</h4>
                <p>Digite "pintor" e veja apenas pintores da sua região</p>
              </div>
              <div className="feature-card">
                <h4>⭐ Avaliações Reais</h4>
                <p>Avaliações de vizinhos que realmente contrataram</p>
              </div>
              <div className="feature-card">
                <h4>💳 Pagamento Seguro</h4>
                <p>Pague pelo app com total segurança</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .benefits {
          margin: 40px 0;
        }

        .benefit {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          align-items: flex-start;
        }

        .benefit-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .benefit h3 {
          font-size: 1.3rem;
          margin-bottom: 8px;
          color: #422680;
        }

        .benefit p {
          color: #666;
        }

        .feature-showcase {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .feature-card {
          background: linear-gradient(135deg, #422680, #6366f1);
          color: white;
          padding: 30px;
          border-radius: 16px;
          transform: rotate(2deg);
          transition: transform 0.3s ease;
        }

        .feature-card:nth-child(2) {
          transform: rotate(-1deg);
          margin-left: 20px;
        }

        .feature-card:nth-child(3) {
          transform: rotate(1deg);
          margin-right: 20px;
        }

        .feature-card:hover {
          transform: rotate(0deg) scale(1.05);
        }

        .feature-card h4 {
          margin-bottom: 10px;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .section-title {
            text-align: center !important;
          }

          .section-subtitle {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ForClients;
