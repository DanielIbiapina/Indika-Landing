import React, { useEffect, useMemo, useState } from "react";

const Subscription = () => {
  const API_BASE = import.meta.env.VITE_API_BASE || "";
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(null);
  const [statusLoading, setStatusLoading] = useState(false);
  const [statusError, setStatusError] = useState("");

  useEffect(() => {
    const savedToken = localStorage.getItem("indika_token") || "";
    const savedUser = localStorage.getItem("indika_user");
    if (savedToken) setToken(savedToken);
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {}
    }
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("check") === "1") {
        // Após retorno do checkout, checar status automaticamente
        setTimeout(() => {
          fetchStatus();
        }, 500);
      }
    } catch {}
  }, []);

  const planMap = useMemo(
    () => ({
      Mensal: {
        planType: "MONTHLY",
        price: 9.9,
        description: "Plano Mensal Indika",
      },
      Trimestral: {
        planType: "QUARTERLY",
        price: 26.99,
        description: "Plano Trimestral Indika",
      },
      Semestral: {
        planType: "SEMESTERLY",
        price: 47.99,
        description: "Plano Semestral Indika",
      },
    }),
    []
  );

  const handleLogin = async (e) => {
    e?.preventDefault?.();
    setError("");
    setLoading(true);
    try {
      if (!API_BASE) throw new Error("API não configurada");
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Falha no login");
      }
      const data = await res.json();
      setToken(data.token);
      setUser(data.user || null);
      localStorage.setItem("indika_token", data.token);
      localStorage.setItem("indika_user", JSON.stringify(data.user || {}));
    } catch (err) {
      setError(err.message || "Erro inesperado");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("indika_token");
    localStorage.removeItem("indika_user");
    setStatus(null);
  };

  const startCheckout = async (planName) => {
    setError("");
    if (!token) {
      setError("Faça login para assinar");
      const el = document.getElementById("login-box");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    try {
      if (!API_BASE) throw new Error("API não configurada");
      const plan = planMap[planName];
      if (!plan) throw new Error("Plano inválido");
      const res = await fetch(`${API_BASE}/payments/subscription/preference`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          planType: plan.planType,
          price: plan.price,
          description: plan.description,
          enableTrial: true,
        }),
      });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Falha ao iniciar assinatura");
      }
      const data = await res.json();
      if (data?.init_point) {
        window.location.href = data.init_point;
      } else {
        throw new Error("Retorno inválido do servidor");
      }
    } catch (err) {
      setError(err.message || "Erro ao criar assinatura");
    }
  };

  const fetchStatus = async () => {
    setStatusError("");
    setStatusLoading(true);
    try {
      if (!API_BASE) throw new Error("API não configurada");
      if (!token) throw new Error("Faça login para verificar o status");
      const res = await fetch(`${API_BASE}/payments/subscription`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Falha ao obter status");
      }
      const data = await res.json();
      setStatus(data);
    } catch (err) {
      setStatusError(err.message || "Erro inesperado");
    } finally {
      setStatusLoading(false);
    }
  };

  const cancelSubscription = async () => {
    setStatusError("");
    try {
      if (!API_BASE) throw new Error("API não configurada");
      if (!token) throw new Error("Faça login para cancelar");
      if (!status?.planType)
        throw new Error("Status da assinatura não disponível");
      const res = await fetch(`${API_BASE}/payments/subscription/cancel`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ planType: status.planType }),
      });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Falha ao cancelar assinatura");
      }
      await fetchStatus();
    } catch (err) {
      setStatusError(err.message || "Erro inesperado");
    }
  };

  const plans = [
    {
      name: "Mensal",
      price: "R$ 9,99",
      period: "/mês",
      savings: null,
      highlight: false,
    },
    {
      name: "Trimestral",
      price: "R$ 26,99",
      period: "/trimestre",
      savings: "10%",
      highlight: true,
    },
    {
      name: "Semestral",
      price: "R$ 47,99",
      period: "/semestre",
      savings: "20%",
      highlight: false,
    },
  ];

  return (
    <section className="section subscription-section" id="assinatura">
      <div className="container">
        {/* Header da seção */}
        <div className="subscription-header">
          <h2 className="section-title">Escolha seu Plano</h2>
          <p className="section-subtitle">
            O aplicativo é gratuito para todos. Para criar serviços e se tornar
            prestador, é necessária uma assinatura ativa.
          </p>
        </div>

        {/* Box de login */}
        <div className="login-container" id="login-box">
          <div className="login-box">
            <h3>Faça login para continuar</h3>
            <p>Use seu e-mail ou telefone cadastrado para assinar</p>

            {token && user ? (
              <div className="user-logged">
                <div className="user-info">
                  <span className="user-label">Logado como:</span>
                  <strong className="user-email">
                    {user?.email || user?.phone || "usuário"}
                  </strong>
                </div>
                <button className="btn btn-outline" onClick={handleLogout}>
                  Sair
                </button>
              </div>
            ) : (
              <form onSubmit={handleLogin} className="login-form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="E-mail ou telefone (11999999999)"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-input"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary login-btn"
                  disabled={loading}
                >
                  {loading ? "Entrando..." : "Entrar"}
                </button>
                {error && <div className="error-message">{error}</div>}
              </form>
            )}
          </div>
        </div>

        {/* Grid de planos */}
        <div className="plans-container">
          <div className="plans-grid">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`plan-card ${
                  plan.highlight ? "plan-highlight" : ""
                }`}
              >
                {plan.highlight && (
                  <div className="plan-badge">Mais popular</div>
                )}

                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <div className="plan-savings">
                      Economia de {plan.savings}
                    </div>
                  )}
                </div>

                <div className="plan-features">
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>Crie e gerencie seus serviços</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>Destaque nas buscas</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>Avaliações e reputação</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span>Suporte prioritário</span>
                  </div>
                </div>

                <button
                  className={`btn plan-btn ${
                    plan.highlight ? "btn-primary" : "btn-outline"
                  }`}
                  onClick={() => startCheckout(plan.name)}
                >
                  Assinar {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Informações adicionais */}
        <div className="subscription-info">
          <div className="info-section">
            <h4>Como funciona o pagamento</h4>
            <ul>
              <li>
                Assinatura recorrente com renovação automática no período
                escolhido
              </li>
              <li>
                Você pode cancelar a qualquer momento; o acesso permanece até o
                fim do ciclo vigente
              </li>
              <li>
                Reembolso integral em até 7 dias da contratação (direito de
                arrependimento)
              </li>
            </ul>
          </div>

          <div className="info-section">
            <h4>Status da assinatura</h4>
            <div className="status-actions">
              <button
                className="btn btn-outline"
                onClick={fetchStatus}
                disabled={statusLoading}
              >
                {statusLoading ? "Verificando..." : "Verificar status"}
              </button>
              {status?.status && (
                <div className="status-display">
                  <span className="status-text">
                    Status: <strong>{status.status}</strong>
                    {status.planType ? ` • Plano: ${status.planType}` : ""}
                  </span>
                  {status?.status && status?.planType && (
                    <button
                      className="btn btn-danger"
                      onClick={cancelSubscription}
                    >
                      Cancelar assinatura
                    </button>
                  )}
                </div>
              )}
              {statusError && (
                <div className="error-message">{statusError}</div>
              )}
            </div>
          </div>
        </div>

        {/* Suporte */}
        <div className="support-section">
          <a href="/suporte" className="btn btn-outline support-btn">
            Dúvidas? Fale com o suporte
          </a>
        </div>
      </div>

      <style jsx>{`
        .subscription-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          padding: 80px 0;
        }

        .subscription-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .subscription-header .section-title {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #422680, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
        }

        .subscription-header .section-subtitle {
          font-size: 1.25rem;
          color: #64748b;
          max-width: 700px;
          margin: 0 auto;
        }

        .login-container {
          max-width: 500px;
          margin: 0 auto 60px;
        }

        .login-box {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .login-box h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 8px;
        }

        .login-box p {
          color: #64748b;
          margin-bottom: 30px;
        }

        .user-logged {
          background: linear-gradient(135deg, #ecfdf5, #d1fae5);
          border: 1px solid #34d399;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .user-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }

        .user-label {
          font-size: 0.875rem;
          color: #065f46;
        }

        .user-email {
          color: #065f46;
          font-size: 1.125rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          position: relative;
        }

        .form-input {
          width: 100%;
          padding: 18px 24px;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #f8fafc;
          color: #1e293b;
        }

        .form-input:focus {
          outline: none;
          border-color: #422680;
          background: white;
          box-shadow: 0 0 0 4px rgba(66, 38, 128, 0.1);
        }

        .login-btn {
          padding: 18px 32px;
          font-size: 1.125rem;
          font-weight: 600;
          border-radius: 16px;
          margin-top: 8px;
        }

        .error-message {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #b91c1c;
          padding: 16px;
          border-radius: 12px;
          font-size: 0.875rem;
          text-align: center;
        }

        .plans-container {
          margin-bottom: 60px;
        }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .plan-card {
          background: white;
          border-radius: 24px;
          padding: 40px 32px;
          text-align: center;
          position: relative;
          transition: all 0.3s ease;
          border: 2px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .plan-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .plan-highlight {
          border-color: #422680;
          background: linear-gradient(135deg, #422680, #6366f1);
          color: white;
          transform: scale(1.05);
        }

        .plan-highlight:hover {
          transform: scale(1.05) translateY(-8px);
        }

        .plan-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #fbbf24;
          color: #1e293b;
          padding: 8px 20px;
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.875rem;
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
        }

        .plan-header {
          margin-bottom: 32px;
        }

        .plan-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: inherit;
        }

        .plan-price {
          margin-bottom: 16px;
        }

        .price-amount {
          font-size: 3rem;
          font-weight: 800;
          display: block;
          line-height: 1;
        }

        .price-period {
          font-size: 1.125rem;
          opacity: 0.8;
          margin-left: 8px;
        }

        .plan-savings {
          background: rgba(34, 197, 94, 0.2);
          color: #16a34a;
          padding: 8px 16px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.875rem;
          display: inline-block;
        }

        .plan-highlight .plan-savings {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .plan-features {
          margin-bottom: 32px;
          text-align: left;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .plan-highlight .feature-item {
          border-bottom-color: rgba(255, 255, 255, 0.2);
        }

        .feature-icon {
          color: #22c55e;
          font-weight: bold;
          font-size: 1.125rem;
        }

        .plan-highlight .feature-icon {
          color: #a7f3d0;
        }

        .plan-btn {
          width: 100%;
          padding: 18px 32px;
          font-size: 1.125rem;
          font-weight: 600;
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .subscription-info {
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .info-section {
          background: white;
          border-radius: 20px;
          padding: 32px;
          margin-bottom: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .info-section h4 {
          color: #422680;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .info-section ul {
          color: #64748b;
          line-height: 1.7;
        }

        .info-section li {
          margin-bottom: 12px;
          padding-left: 20px;
          position: relative;
        }

        .info-section li:before {
          content: "•";
          color: #422680;
          font-weight: bold;
          position: absolute;
          left: 0;
        }

        .status-actions {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .status-display {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-start;
        }

        .status-text {
          color: #64748b;
          font-size: 0.875rem;
        }

        .support-section {
          text-align: center;
        }

        .support-btn {
          padding: 18px 32px;
          font-size: 1.125rem;
          border-radius: 16px;
        }

        .btn-outline {
          background: transparent;
          color: #422680;
          border: 2px solid #422680;
        }

        .btn-outline:hover {
          background: #422680;
          color: white;
        }

        .btn-danger {
          background: #ef4444;
          color: white;
          border: 2px solid #ef4444;
        }

        .btn-danger:hover {
          background: #dc2626;
          border-color: #dc2626;
        }

        /* Responsividade */
        @media (max-width: 1024px) {
          .plans-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            max-width: 800px;
          }
        }

        @media (max-width: 768px) {
          .subscription-section {
            padding: 60px 0;
          }

          .subscription-header .section-title {
            font-size: 2.5rem;
          }

          .subscription-header .section-subtitle {
            font-size: 1.125rem;
          }

          .login-box {
            padding: 32px 24px;
            margin: 0 16px;
          }

          .plans-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin: 0 16px;
          }

          .plan-card {
            padding: 32px 24px;
          }

          .plan-highlight {
            transform: none;
          }

          .plan-highlight:hover {
            transform: translateY(-4px);
          }

          .price-amount {
            font-size: 2.5rem;
          }

          .info-section {
            margin: 0 16px 24px;
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .subscription-header .section-title {
            font-size: 2rem;
          }

          .subscription-header .section-subtitle {
            font-size: 1rem;
          }

          .login-box {
            padding: 24px 20px;
          }

          .plan-card {
            padding: 24px 20px;
          }

          .price-amount {
            font-size: 2rem;
          }

          .plan-name {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Subscription;
