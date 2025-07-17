import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Cliente",
      location: "Pinheiros, SP",
      photo: "👩‍💼",
      text: "Encontrei um eletricista incrível através da recomendação da minha vizinha. Super rápido e preço justo!",
      rating: 5,
    },
    {
      name: "João Santos",
      role: "Prestador",
      location: "Vila Olímpia, SP",
      photo: "👨‍🔧",
      text: "Desde que entrei no Indika, minha agenda nunca mais ficou vazia. Clientes de qualidade direto da minha região.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      role: "Cliente",
      location: "Jardins, SP",
      photo: "👩‍🎨",
      text: "A confiança de contratar alguém recomendado pelos vizinhos não tem preço. Excelente experiência!",
      rating: 5,
    },
  ];

  return (
    <section className="section" style={{ background: "#f8fafc" }}>
      <div className="container">
        <h2 className="section-title">O que nossos usuários dizem</h2>
        <p className="section-subtitle">
          Milhares de pessoas já transformaram a forma como contratam e prestam
          serviços
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="testimonial-content">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p>"{testimonial.text}"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-photo">{testimonial.photo}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-stats">
          <div className="testimonial-stat">
            <span className="stat-number">4.8</span>
            <span className="stat-label">Avaliação média</span>
            <div className="stat-stars">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="testimonial-stat">
            <span className="stat-number">50k+</span>
            <span className="stat-label">Avaliações</span>
          </div>
          <div className="testimonial-stat">
            <span className="stat-number">98%</span>
            <span className="stat-label">Recomendam</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .testimonial {
          background: white;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .testimonial:hover {
          transform: translateY(-5px);
        }

        .testimonial-content {
          margin-bottom: 25px;
        }

        .stars {
          margin-bottom: 15px;
          font-size: 1.1rem;
        }

        .testimonial-content p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #333;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .author-photo {
          font-size: 2.5rem;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .author-info h4 {
          margin-bottom: 5px;
          color: #422680;
          font-size: 1.1rem;
        }

        .author-info p {
          color: #666;
          font-size: 0.9rem;
        }

        .testimonials-stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          padding: 40px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .testimonial-stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: #422680;
          margin-bottom: 5px;
        }

        .stat-label {
          display: block;
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 5px;
        }

        .stat-stars {
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .testimonials-stats {
            flex-direction: column;
            gap: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
