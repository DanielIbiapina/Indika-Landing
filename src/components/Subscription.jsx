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
      details: [
        "Crie e gerencie seus serviços",
        "Destaque nas buscas",
        "Avaliações e reputação",
        "Suporte prioritário",
      ],
      highlight: false,
    },
    {
      name: "Trimestral",
      price: "R$ 26,99",
      period: "/trimestre",
      details: ["Tudo do Mensal", "Economia de 10%", "Mais visibilidade"],
      highlight: true,
    },
    {
      name: "Semestral",
      price: "R$ 47,99",
      period: "/semestre",
      details: ["Tudo do Mensal", "Economia de 20%", "Selo Pro"],
      highlight: false,
    },
  ];

  return (
    <section className="section" id="assinatura">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: "center" }}>
          Assinatura para Prestadores
        </h2>
        <p className="section-subtitle" style={{ textAlign: "center" }}>
          O aplicativo é gratuito para todos. Para criar serviços e se tornar
          prestador, é necessária uma assinatura ativa.
        </p>

        <div
          className="notice"
          style={{
            background: "#fff7ed",
            border: "1px solid #fdba74",
            color: "#9a3412",
            padding: "16px",
            borderRadius: "12px",
            margin: "24px auto",
            maxWidth: 900,
          }}
        >
          <strong>Usuários iOS:</strong> devido às regras de In‑App Purchase,
          ative e gerencie sua assinatura aqui pelo site. Usuários Android podem
          assinar diretamente pelo app.
        </div>

        <div id="login-box" style={{ maxWidth: 680, margin: "16px auto" }}>
          <h3 style={{ color: "#422680", marginBottom: 8 }}>Entrar</h3>
          <p style={{ color: "#4b5563", marginBottom: 12 }}>
            Faça login com seu e-mail ou telefone cadastrado para assinar.
          </p>
          {token && user ? (
            <div
              style={{
                background: "#ecfdf5",
                border: "1px solid #34d399",
                color: "#065f46",
                padding: 12,
                borderRadius: 12,
                marginBottom: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>
                Logado como{" "}
                <strong>{user?.email || user?.phone || "usuário"}</strong>
              </span>
              <button className="btn btn-secondary" onClick={handleLogout}>
                Sair
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} style={{ display: "grid", gap: 12 }}>
              <input
                type="text"
                placeholder="E-mail ou telefone (formato 5511999999999)"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Entrando..." : "Entrar"}
              </button>
              {error && <div style={{ color: "#b91c1c" }}>{error}</div>}
            </form>
          )}
        </div>

        <div
          className="plans-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginTop: 32,
          }}
        >
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`plan-card ${plan.highlight ? "plan-highlight" : ""}`}
              style={{
                background: plan.highlight
                  ? "linear-gradient(135deg, #422680, #6366f1)"
                  : "#fff",
                color: plan.highlight ? "#fff" : "#111827",
                border: plan.highlight
                  ? "2px solid #422680"
                  : "2px solid #e5e7eb",
                borderRadius: 16,
                padding: 24,
                textAlign: "center",
              }}
            >
              {plan.highlight && (
                <div
                  style={{
                    background: "#fbbf24",
                    color: "#111827",
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: 9999,
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  Mais popular
                </div>
              )}
              <h3 style={{ marginBottom: 8 }}>{plan.name}</h3>
              <div style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 32, fontWeight: 800 }}>
                  {plan.price}
                </span>
                <span style={{ opacity: 0.85, marginLeft: 6 }}>
                  {plan.period}
                </span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 16px 0",
                  textAlign: "left",
                }}
              >
                {plan.details.map((d, i) => (
                  <li
                    key={i}
                    style={{
                      padding: "8px 0",
                      borderBottom: plan.highlight
                        ? "1px solid rgba(255,255,255,0.25)"
                        : "1px solid #e5e7eb",
                    }}
                  >
                    ✓ {d}
                  </li>
                ))}
              </ul>
              <button
                className={`btn ${
                  plan.highlight ? "btn-primary" : "btn-secondary"
                }`}
                style={{ display: "inline-block" }}
                onClick={() => startCheckout(plan.name)}
              >
                Assinar {plan.name}
              </button>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 32,
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h4 style={{ color: "#422680", marginBottom: 8 }}>
            Como funciona o pagamento
          </h4>
          <ul style={{ color: "#4b5563" }}>
            <li>
              Assinatura recorrente com renovação automática no período
              escolhido.
            </li>
            <li>
              Você pode cancelar a qualquer momento; o acesso permanece até o
              fim do ciclo vigente.
            </li>
            <li>
              Reembolso integral em até 7 dias da contratação (direito de
              arrependimento).
            </li>
          </ul>
        </div>

        <div style={{ marginTop: 24 }}>
          <h4 style={{ color: "#422680", marginBottom: 8 }}>
            Status da assinatura
          </h4>
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn btn-secondary"
              onClick={fetchStatus}
              disabled={statusLoading}
            >
              {statusLoading ? "Verificando..." : "Verificar status"}
            </button>
            {status?.status && (
              <span style={{ color: "#4b5563" }}>
                Status: <strong>{status.status}</strong>
                {status.planType ? ` • Plano: ${status.planType}` : ""}
              </span>
            )}
            {status?.status && status?.planType && (
              <button
                className="btn btn-secondary"
                onClick={cancelSubscription}
              >
                Cancelar assinatura
              </button>
            )}
          </div>
          {statusError && (
            <div style={{ color: "#b91c1c", marginTop: 8 }}>{statusError}</div>
          )}
        </div>

        <div style={{ marginTop: 24, textAlign: "center" }}>
          <a href="/suporte" className="btn btn-secondary">
            Dúvidas? Fale com o suporte
          </a>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
