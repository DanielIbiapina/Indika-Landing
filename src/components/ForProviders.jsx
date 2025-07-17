import React from "react";

const ForProviders = () => {
  const benefits = [
    {
      icon: "💼",
      title: "Mais clientes",
      description:
        "Apareça para milhares de pessoas da sua região que precisam dos seus serviços",
    },
    {
      icon: "🎯",
      title: "Clientes qualificados",
      description:
        "Receba solicitações de pessoas que realmente querem contratar",
    },
    {
      icon: "📈",
      title: "Cresça seu negócio",
      description:
        "Use recomendações da comunidade para construir sua reputação",
    },
    {
      icon: "💳",
      title: "Receba com segurança",
      description: "Pagamentos garantidos através da nossa plataforma",
    },
  ];

  const plans = [
    {
      name: "Básico",
      price: "Grátis",
      period: "",
      features: [
        "Perfil básico",
        "Até 3 serviços",
        "Chat com clientes",
        "Avaliações",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "R$ 29",
      period: "/mês",
      features: [
        "Tudo do Básico",
        "Serviços ilimitados",
        "Destaque na busca",
        "Múltiplas subcategorias",
        "Relatórios detalhados",
      ],
      highlighted: true,
    },
  ];

  return (
    <section
      id="para-prestadores"
      className="section"
      style={{ background: "#f8fafc" }}
    >
      <div className="container">
        <h2 className="section-title">Para profissionais e empresas</h2>
        <p className="section-subtitle">
          Transforme sua expertise em uma fonte de renda consistente
        </p>

        <div className="provider-content">
          <div className="benefits-section">
            <h3>Por que escolher o Indika?</h3>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="provider-benefit">
                  <div className="provider-benefit-icon">{benefit.icon}</div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="plans-section">
            <h3>Escolha seu plano</h3>
            <div className="plans-grid">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`plan ${
                    plan.highlighted ? "plan-highlighted" : ""
                  }`}
                >
                  {plan.highlighted && (
                    <div className="plan-badge">Mais Popular</div>
                  )}
                  <h4>{plan.name}</h4>
                  <div className="plan-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">{plan.period}</span>
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((feature, i) => (
                      <li key={i}>✓ {feature}</li>
                    ))}
                  </ul>
                  <button
                    className={`btn ${
                      plan.highlighted ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    {plan.highlighted ? "Começar Pro" : "Começar Grátis"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="provider-cta">
          <h3>Pronto para aumentar sua renda?</h3>
          <p>
            Junte-se a milhares de profissionais que já transformaram sua
            carreira
          </p>
          <a href="#download" className="btn btn-primary">
            Cadastrar como prestador
          </a>
        </div>
      </div>

      <style jsx>{`
        .provider-content {
          margin-bottom: 80px;
        }

        .benefits-section,
        .plans-section {
          margin-bottom: 60px;
        }

        .benefits-section h3,
        .plans-section h3 {
          font-size: 2rem;
          color: #422680;
          text-align: center;
          margin-bottom: 40px;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .provider-benefit {
          background: white;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .provider-benefit-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .provider-benefit h4 {
          font-size: 1.3rem;
          color: #422680;
          margin-bottom: 15px;
        }

        .provider-benefit p {
          color: #666;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 800px;
          margin: 0 auto;
        }

        .plan {
          background: white;
          padding: 40px 30px;
          border-radius: 16px;
          border: 2px solid #e5e7eb;
          text-align: center;
          position: relative;
          transition: transform 0.3s ease;
        }

        .plan:hover {
          transform: translateY(-5px);
        }

        .plan-highlighted {
          border-color: #422680;
          background: linear-gradient(135deg, #422680 0%, #6366f1 100%);
          color: white;
          transform: scale(1.05);
        }

        .plan-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #fbbf24;
          color: #000;
          padding: 5px 20px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .plan h4 {
          font-size: 1.5rem;
          margin-bottom: 20px;
        }

        .plan-price {
          margin-bottom: 30px;
        }

        .price {
          font-size: 3rem;
          font-weight: 700;
        }

        .period {
          font-size: 1rem;
          opacity: 0.7;
        }

        .plan-features {
          list-style: none;
          margin-bottom: 30px;
          text-align: left;
        }

        .plan-features li {
          padding: 8px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .plan-highlighted .plan-features li {
          border-bottom-color: rgba(255, 255, 255, 0.2);
        }

        .provider-cta {
          background: linear-gradient(135deg, #422680, #6366f1);
          color: white;
          padding: 60px 40px;
          border-radius: 20px;
          text-align: center;
        }

        .provider-cta h3 {
          font-size: 2.2rem;
          margin-bottom: 15px;
        }

        .provider-cta p {
          font-size: 1.2rem;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .plans-grid {
            grid-template-columns: 1fr;
          }

          .plan-highlighted {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ForProviders;
