import React from "react";

const Communities = () => {
  const communityFeatures = [
    {
      icon: "",
      title: "Comunidades Locais",
      description: "Conecte-se com vizinhos e profissionais da sua região",
    },
    {
      icon: "",
      title: "Recomendações Reais",
      description: "Indicações de pessoas que moram perto de você",
    },
    {
      icon: "",
      title: "Confiança",
      description: "A segurança de contratar quem já foi testado",
    },
  ];

  return (
    <section id="comunidades" className="section">
      <div className="container">
        <div className="communities-content">
          <div className="communities-text">
            <h2 className="section-title" style={{ textAlign: "left" }}>
              O poder das comunidades
            </h2>
            <p
              className="section-subtitle"
              style={{ textAlign: "left", marginLeft: 0 }}
            >
              O que nos diferencia? Nossa rede de comunidades locais onde
              vizinhos recomendam os melhores profissionais
            </p>

            <div className="community-features">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="community-feature">
                  {/*<div className="community-icon">{feature.icon}</div>*/}
                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="community-stats">
              <div className="stat-item">
                <strong>São Carlos-SP</strong>
                <span>Primeiras ativações</span>
              </div>
              <div className="stat-item">
                <strong>Ribeirão Preto-SP</strong>
                <span>Expansão inicial</span>
              </div>
              <div className="stat-item">
                <strong>Teresina-PI</strong>
                <span>Expansão inicial</span>
              </div>
            </div>
          </div>

          <div className="communities-visual">
            <div className="community-showcase">
              <div className="community-card">
                <h4>🏠 São Carlos</h4>
                <p>Em ativação • cadastrando prestadores</p>
                <div className="community-providers">
                  <span className="provider-tag">🔧 Reformas</span>
                  <span className="provider-tag">💄 Beleza</span>
                  <span className="provider-tag">🏠 Limpeza</span>
                </div>
              </div>

              <div className="community-card">
                <h4>🌳 Ribeirão Preto</h4>
                <p>Em ativação • cadastrando prestadores</p>
                <div className="community-providers">
                  <span className="provider-tag">🚗 Auto</span>
                  <span className="provider-tag">🎂 Gastronomia</span>
                  <span className="provider-tag">📸 Fotografia</span>
                </div>
              </div>

              <div className="recommendation-bubble">
                <p>"Conectando vizinhos a profissionais confiáveis."</p>
                <small>- Indika</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .communities-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .community-features {
          margin: 40px 0;
        }

        .community-feature {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          align-items: flex-start;
        }

        .community-icon {
          font-size: 2.5rem;
          flex-shrink: 0;
        }

        .community-feature h3 {
          font-size: 1.3rem;
          margin-bottom: 8px;
          color: #422680;
        }

        .community-feature p {
          color: #666;
        }

        .community-stats {
          display: flex;
          gap: 40px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-item strong {
          font-size: 2rem;
          color: #422680;
          font-weight: 700;
        }

        .stat-item span {
          color: #666;
          font-size: 0.9rem;
        }

        .community-showcase {
          position: relative;
        }

        .community-card {
          background: white;
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          border-left: 4px solid #422680;
        }

        .community-card h4 {
          color: #422680;
          margin-bottom: 10px;
          font-size: 1.2rem;
        }

        .community-card p {
          color: #666;
          margin-bottom: 15px;
          font-size: 0.9rem;
        }

        .community-providers {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .provider-tag {
          background: #f3f4f6;
          padding: 5px 10px;
          border-radius: 12px;
          font-size: 0.8rem;
          color: #666;
        }

        .recommendation-bubble {
          background: linear-gradient(135deg, #422680, #6366f1);
          color: white;
          padding: 20px;
          border-radius: 20px;
          position: relative;
          margin-top: 20px;
        }

        .recommendation-bubble::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 30px;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #422680;
        }

        .recommendation-bubble p {
          margin-bottom: 10px;
          font-style: italic;
        }

        .recommendation-bubble small {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .communities-content {
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

          .community-stats {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Communities;
