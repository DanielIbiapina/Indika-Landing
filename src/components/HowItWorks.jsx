import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: "🔍",
      title: "Busque o serviço",
      description:
        "Digite o que precisa ou navegue pelas categorias. Use nossa busca inteligente para encontrar especialistas.",
    },
    {
      icon: "🏘️",
      title: "Veja recomendações da comunidade",
      description:
        "Encontre profissionais recomendados pelos seus vizinhos. Avaliações reais de pessoas da sua região.",
    },
    {
      icon: "💬",
      title: "Converse e contrate",
      description:
        "Chat direto com o prestador, receba orçamentos e escolha o método de pagamento pelo app.",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="section"
      style={{ background: "#f8fafc" }}
    >
      <div className="container">
        <h2 className="section-title">Como funciona</h2>
        <p className="section-subtitle">
          Conectar-se com profissionais nunca foi tão fácil e seguro
        </p>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-icon">{step.icon}</div>
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .step {
          background: white;
          padding: 40px 30px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          position: relative;
          transition: transform 0.3s ease;
        }

        .step:hover {
          transform: translateY(-5px);
        }

        .step-icon {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .step-number {
          position: absolute;
          top: -15px;
          right: -15px;
          background: #422680;
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        .step h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #422680;
        }

        .step p {
          color: #666;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
