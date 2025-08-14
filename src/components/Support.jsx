import React, { useState } from "react";

const Support = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <section className="support-section">
      <div className="container">
        <div className="support-content">
          <div className="support-header">
            <h1>🛠️ Central de Suporte - Indika</h1>
            <p className="support-subtitle">
              Aplicativo desenvolvido por{" "}
              <strong>Indika Soluções Digitais Ltda</strong>
            </p>
            <p className="support-subtitle">
              Estamos aqui para ajudar! Escolha o tipo de suporte que você
              precisa.
            </p>
          </div>

          <div className="support-tabs">
            <div className="tab-buttons">
              <button
                className={`tab-button ${
                  activeTab === "general" ? "active" : ""
                }`}
                onClick={() => setActiveTab("general")}
              >
                📞 Suporte Geral
              </button>
              <button
                className={`tab-button ${
                  activeTab === "technical" ? "active" : ""
                }`}
                onClick={() => setActiveTab("technical")}
              >
                🔧 Suporte Técnico
              </button>
              <button
                className={`tab-button ${
                  activeTab === "business" ? "active" : ""
                }`}
                onClick={() => setActiveTab("business")}
              >
                �� Suporte Comercial
              </button>
            </div>

            <div className="tab-content">
              {/* TAB 1: SUPORTE GERAL */}
              <div
                className={`tab-pane ${
                  activeTab === "general" ? "active" : ""
                }`}
              >
                <div className="info-section">
                  <h2>📞 Suporte Geral</h2>
                  <p>
                    Para dúvidas gerais sobre o aplicativo, cadastro, uso básico
                    e informações sobre nossos serviços.
                  </p>
                </div>

                <div className="info-section">
                  <h2>🎯 Principais Assuntos:</h2>
                  <div className="support-categories">
                    <div className="support-category">
                      <h3>📱 Uso do Aplicativo</h3>
                      <ul>
                        <li>Como fazer cadastro</li>
                        <li>Como encontrar prestadores</li>
                        <li>Como agendar serviços</li>
                        <li>Como avaliar prestadores</li>
                        <li>Como usar o chat</li>
                      </ul>
                    </div>

                    <div className="support-category">
                      <h3>💰 Pagamentos</h3>
                      <ul>
                        <li>Formas de pagamento</li>
                        <li>Problemas com pagamento</li>
                        <li>Reembolsos</li>
                        <li>Faturas e recibos</li>
                        <li>Segurança das transações</li>
                      </ul>
                    </div>

                    <div className="support-category">
                      <h3>👤 Conta e Perfil</h3>
                      <ul>
                        <li>Alterar dados pessoais</li>
                        <li>Recuperar senha</li>
                        <li>Configurações de privacidade</li>
                        <li>Notificações</li>
                        <li>Verificar histórico</li>
                      </ul>
                    </div>

                    <div className="support-category">
                      <h3>🔒 Segurança</h3>
                      <ul>
                        <li>Proteção de dados</li>
                        <li>Denunciar problemas</li>
                        <li>Bloquear usuários</li>
                        <li>Relatar conteúdo inadequado</li>
                        <li>Política de privacidade</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="info-section">
                  <h2>📧 Como solicitar suporte geral:</h2>
                  <ol>
                    <li>
                      Envie email para <strong>suporte@indika.com.br</strong>
                    </li>
                    <li>Assunto: "Suporte Geral - [Seu Nome]"</li>
                    <li>Descreva sua dúvida ou problema</li>
                    <li>Inclua seu email/telefone cadastrado</li>
                    <li>Receberá resposta em até 24 horas</li>
                  </ol>
                </div>
              </div>

              {/* TAB 2: SUPORTE TÉCNICO */}
              <div
                className={`tab-pane ${
                  activeTab === "technical" ? "active" : ""
                }`}
              >
                <div className="info-section">
                  <h2>🔧 Suporte Técnico</h2>
                  <p>
                    Para problemas técnicos, bugs, falhas no aplicativo,
                    problemas de conexão e questões de performance.
                  </p>
                </div>

                <div className="info-section">
                  <h2>🧰 Problemas Técnicos Comuns:</h2>
                  <div className="support-categories">
                    <div className="support-category">
                      <h3>📱 Problemas no App</h3>
                      <ul>
                        <li>App não abre</li>
                        <li>Erro de login</li>
                        <li>App trava ou fecha</li>
                        <li>Fotos não carregam</li>
                        <li>Chat não funciona</li>
                      </ul>
                    </div>

                    <div className="support-category">
                      <h3>🌐 Problemas de Conexão</h3>
                      <ul>
                        <li>Erro de internet</li>
                        <li>Localização não funciona</li>
                        <li>Dados não sincronizam</li>
                        <li>Notificações não chegam</li>
                        <li>App lento</li>
                      </ul>
                    </div>

                    <div className="support-category">
                      <h3>📱 Problemas de Dispositivo</h3>
                      <ul>
                        <li>Compatibilidade</li>
                        <li>Atualização do app</li>
                        <li>Permissões negadas</li>
                        <li>Espaço insuficiente</li>
                        <li>Bateria drena rápido</li>
                      </ul>
                    </div>

                    <div className="support-category">
                      <h3>🔐 Problemas de Segurança</h3>
                      <ul>
                        <li>Conta hackeada</li>
                        <li>Login não autorizado</li>
                        <li>Dados corrompidos</li>
                        <li>Vírus ou malware</li>
                        <li>Spam ou phishing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="info-section">
                  <h2>🧾 Informações necessárias para suporte técnico:</h2>
                  <ul>
                    <li>
                      <strong>Modelo do dispositivo:</strong> (ex: iPhone 12,
                      Samsung Galaxy S21)
                    </li>
                    <li>
                      <strong>Sistema operacional:</strong> (ex: iOS 15.0,
                      Android 12)
                    </li>
                    <li>
                      <strong>Versão do app:</strong> (encontrada em
                      Configurações &gt; Sobre)
                    </li>
                    <li>
                      <strong>Descrição detalhada do problema</strong>
                    </li>
                    <li>
                      <strong>Passos para reproduzir o erro</strong>
                    </li>
                    <li>
                      <strong>Screenshots ou vídeos</strong> (se possível)
                    </li>
                  </ul>
                </div>

                <div className="info-section">
                  <h2>📧 Como solicitar suporte técnico:</h2>
                  <ol>
                    <li>
                      Envie email para <strong>tecnico@indika.com.br</strong>
                    </li>
                    <li>Assunto: "Suporte Técnico - [Seu Nome]"</li>
                    <li>Inclua todas as informações técnicas solicitadas</li>
                    <li>Descreva o problema detalhadamente</li>
                    <li>Receberá resposta em até 48 horas</li>
                  </ol>
                </div>
              </div>

              {/* TAB 3: SUPORTE COMERCIAL */}
              <div
                className={`tab-pane ${
                  activeTab === "business" ? "active" : ""
                }`}
              >
                <div className="info-section">
                  <h2>💼 Suporte Comercial</h2>
                  <p>
                    Para prestadores de serviço, dúvidas sobre planos,
                    cobranças, ferramentas de negócio e parcerias.
                  </p>
                </div>

                <div className="info-section">
                  <h2>🏢 Serviços para Prestadores:</h2>
                  <div className="support-categories">
                    <div className="support-category">
                      <h3>💳 Planos e Cobranças</h3>
                      <ul>
                        <li>Planos disponíveis</li>
                        <li>Preços e taxas</li>
                        <li>Métodos de pagamento</li>
                        <li>Faturas e recibos</li>
                        <li>Cancelamentos</li>
                      </ul>
                    </div>

                    <div className="support-category">
                      <h3>🛠️ Ferramentas de Negócio</h3>
                      <ul>
                        <li>Dashboard de prestador</li>
                        <li>Gestão de agenda</li>
                        <li>Relatórios e analytics</li>
                        <li>Ferramentas de marketing</li>
                        <li>Integrações</li>
                      </ul>
                    </div>

                    <div className="support-category">
                      <h3>📈 Crescimento do Negócio</h3>
                      <ul>
                        <li>Estratégias de marketing</li>
                        <li>Como aumentar vendas</li>
                        <li>Melhorar avaliações</li>
                        <li>Fidelizar clientes</li>
                        <li>Expandir área de atuação</li>
                      </ul>
                    </div>

                    <div className="support-category">
                      <h3>🤝 Parcerias e Eventos</h3>
                      <ul>
                        <li>Programas de parceria</li>
                        <li>Eventos e treinamentos</li>
                        <li>Comunidade de prestadores</li>
                        <li>Cases de sucesso</li>
                        <li>Networking</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="info-section">
                  <h2>📧 Como solicitar suporte comercial:</h2>
                  <ol>
                    <li>
                      Envie email para <strong>comercial@indika.com.br</strong>
                    </li>
                    <li>Assunto: "Suporte Comercial - [Seu Nome]"</li>
                    <li>Inclua informações do seu negócio</li>
                    <li>Descreva sua necessidade específica</li>
                    <li>Receberá resposta em até 24 horas</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h2>📞 Canais de contato direto:</h2>
            <div className="contact-channels">
              <div className="contact-channel">
                <strong>Email Geral:</strong>
                <a href="mailto:suporte@indika.com.br">suporte@indika.com.br</a>
              </div>
              <div className="contact-channel">
                <strong>Email Técnico:</strong>
                <a href="mailto:tecnico@indika.com.br">tecnico@indika.com.br</a>
              </div>
              <div className="contact-channel">
                <strong>Email Comercial:</strong>
                <a href="mailto:comercial@indika.com.br">
                  comercial@indika.com.br
                </a>
              </div>
              <div className="contact-channel">
                <strong>WhatsApp:</strong>
                <span>+55 (86) 99999-9999</span>
              </div>
              <div className="contact-channel">
                <strong>Horário de Atendimento:</strong>
                <span>Segunda a Sexta, 8h às 18h</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h2>⚡ Resposta Rápida:</h2>
            <div className="response-times">
              <div className="response-item">
                <strong>Suporte Geral:</strong> 24 horas
              </div>
              <div className="response-item">
                <strong>Suporte Técnico:</strong> 48 horas
              </div>
              <div className="response-item">
                <strong>Suporte Comercial:</strong> 24 horas
              </div>
              <div className="response-item">
                <strong>Urgências:</strong> 4 horas (via WhatsApp)
              </div>
            </div>
          </div>

          <div className="info-section">
            <h2>📚 Recursos Adicionais:</h2>
            <div className="resources">
              <a href="/#termos" className="resource-link">
                📄 Termos de Uso
              </a>
              <a href="/excluir-conta" className="resource-link">
                🗑️ Exclusão de Conta
              </a>
              <a href="#como-funciona" className="resource-link">
                ❓ Como Funciona
              </a>
              <a href="/assinatura" className="resource-link">
                💼 Assinatura de Prestador
              </a>
              <a href="#faq" className="resource-link">
                ❓ FAQ
              </a>
            </div>
          </div>

          <div className="support-footer">
            <p>
              <strong>Última atualização:</strong>{" "}
              {new Date().toLocaleDateString("pt-BR")}
            </p>
            <a href="/" className="btn btn-secondary">
              ← Voltar ao Início
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
