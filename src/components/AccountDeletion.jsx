import React, { useState } from "react";

const AccountDeletion = () => {
  const [activeTab, setActiveTab] = useState("partial");

  return (
    <section className="account-deletion-section">
      <div className="container">
        <div className="account-deletion-content">
          <div className="deletion-header">
            <h1>🔒 Controle de Dados - Indika</h1>
            <p className="deletion-subtitle">
              Aplicativo desenvolvido por{" "}
              <strong>Indika Soluções Digitais Ltda</strong>
            </p>
            <p className="deletion-subtitle">
              Oferecemos controle total sobre seus dados pessoais. Você pode
              solicitar a exclusão de dados específicos ou de toda a sua conta.
            </p>
          </div>

          <div className="deletion-tabs">
            <div className="tab-buttons">
              <button
                className={`tab-button ${
                  activeTab === "partial" ? "active" : ""
                }`}
                onClick={() => setActiveTab("partial")}
              >
                📝 Exclusão Parcial de Dados
              </button>
              <button
                className={`tab-button ${
                  activeTab === "complete" ? "active" : ""
                }`}
                onClick={() => setActiveTab("complete")}
              >
                💔 Exclusão Completa de Conta
              </button>
            </div>

            <div className="tab-content">
              {/* TAB 1: EXCLUSÃO PARCIAL */}
              <div
                className={`tab-pane ${
                  activeTab === "partial" ? "active" : ""
                }`}
              >
                <div className="info-section">
                  <h2>📝 Exclusão Parcial de Dados</h2>
                  <p>
                    Você pode solicitar a exclusão de dados específicos sem
                    excluir sua conta. Isso permite manter o acesso ao
                    aplicativo enquanto remove informações que você não deseja
                    mais compartilhar.
                  </p>
                </div>

                <div className="info-section">
                  <h2>🎯 Dados que podem ser excluídos parcialmente:</h2>
                  <div className="data-categories">
                    <div className="data-category">
                      <h3> Dados de Perfil</h3>
                      <ul>
                        <li>Nome completo</li>
                        <li>Foto de perfil</li>
                        <li>Biografia/descrição</li>
                        <li>Endereço residencial</li>
                      </ul>
                    </div>

                    <div className="data-category">
                      <h3>📍 Dados de Localização</h3>
                      <ul>
                        <li>Endereço de trabalho</li>
                        <li>Área de atendimento</li>
                        <li>Histórico de localizações</li>
                        <li>Preferências de região</li>
                      </ul>
                    </div>

                    <div className="data-category">
                      <h3>💬 Dados de Comunicação</h3>
                      <ul>
                        <li>Histórico de mensagens</li>
                        <li>Chats privados</li>
                        <li>Comentários em avaliações</li>
                        <li>Notificações salvas</li>
                      </ul>
                    </div>

                    <div className="data-category">
                      <h3>⚙️ Dados de Configuração</h3>
                      <ul>
                        <li>Preferências de notificação</li>
                        <li>Configurações de privacidade</li>
                        <li>Histórico de pesquisas</li>
                        <li>Favoritos salvos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="info-section">
                  <h2>📧 Como solicitar exclusão parcial:</h2>
                  <ol>
                    <li>
                      Envie email para <strong>privacy@indika.com.br</strong>
                    </li>
                    <li>Assunto: "Exclusão Parcial de Dados - [Seu Nome]"</li>
                    <li>Especifique quais dados deseja excluir</li>
                    <li>Inclua seu email/telefone cadastrado</li>
                    <li>Receberá confirmação em até 24 horas</li>
                    <li>Dados serão excluídos em até 7 dias</li>
                  </ol>
                </div>

                <div className="info-section">
                  <h2>✅ Vantagens da exclusão parcial:</h2>
                  <ul>
                    <li>Mantém acesso ao aplicativo</li>
                    <li>Preserva histórico de transações</li>
                    <li>Mantém avaliações e reputação</li>
                    <li>Processo mais rápido (7 dias)</li>
                    <li>Pode ser feito múltiplas vezes</li>
                  </ul>
                </div>
              </div>

              {/* TAB 2: EXCLUSÃO COMPLETA */}
              <div
                className={`tab-pane ${
                  activeTab === "complete" ? "active" : ""
                }`}
              >
                <div className="info-section">
                  <h2>💔 Exclusão Completa de Conta</h2>
                  <p>
                    <strong>ATENÇÃO:</strong> Esta ação é irreversível. Todos os
                    dados serão permanentemente excluídos e sua conta será
                    desativada. Você perderá acesso ao aplicativo e todos os
                    dados associados.
                  </p>
                </div>

                <div className="info-section">
                  <h2>📋 Dados que serão excluídos completamente:</h2>
                  <ul>
                    <li>Nome completo do usuário</li>
                    <li>Email cadastrado</li>
                    <li>Número de telefone</li>
                    <li>Endereço e dados de localização</li>
                    <li>Histórico completo de pedidos</li>
                    <li>Todas as mensagens e chats</li>
                    <li>Configurações e preferências</li>
                    <li>Fotos de perfil e galeria</li>
                    <li>Preferências de notificação</li>
                    <li>Histórico de pesquisas</li>
                    <li>Avaliações e comentários</li>
                    <li>Dados de pagamento (após 90 dias)</li>
                  </ul>
                </div>

                <div className="info-section">
                  <h2>
                    ⚠️ Dados que podem ser mantidos (por obrigação legal):
                  </h2>
                  <ul>
                    <li>
                      Dados de pagamento (por 90 dias - obrigatório por lei)
                    </li>
                    <li>Logs de segurança (por 30 dias)</li>
                    <li>
                      Registros de transações (por 5 anos - exigência fiscal)
                    </li>
                    <li>Dados para cumprimento de obrigações legais</li>
                  </ul>
                </div>

                <div className="info-section">
                  <h2> Processo de exclusão completa:</h2>
                  <ol>
                    <li>
                      Envie email para <strong>privacy@indika.com.br</strong>
                    </li>
                    <li>Assunto: "Exclusão Completa de Conta - [Seu Nome]"</li>
                    <li>
                      Inclua seu email/telefone cadastrado no corpo do email
                    </li>
                    <li>Confirme que deseja excluir a conta permanentemente</li>
                    <li>Receberá confirmação de identidade</li>
                    <li>Receberá confirmação em até 48 horas</li>
                    <li>Dados serão excluídos em até 30 dias</li>
                    <li>Receberá notificação final quando concluído</li>
                  </ol>
                </div>

                <div className="info-section">
                  <h2>⚡ Processo Rápido (Opcional):</h2>
                  <p>Para solicitações urgentes, você pode incluir no email:</p>
                  <ul>
                    <li>"URGENTE" no assunto</li>
                    <li>Motivo da urgência</li>
                    <li>Processo pode ser acelerado para 7 dias</li>
                  </ul>
                </div>

                <div className="info-section">
                  <h2>🔒 Segurança e Confirmação:</h2>
                  <ul>
                    <li>Será solicitada confirmação de identidade</li>
                    <li>Processo é irreversível após confirmação</li>
                    <li>Receberá comprovante de exclusão</li>
                    <li>Dados não podem ser recuperados após exclusão</li>
                    <li>Conta será permanentemente desativada</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h2>📞 Canais de contato para solicitações:</h2>
            <div className="contact-channels">
              <div className="contact-channel">
                <strong>Email Principal:</strong>
                <a href="mailto:privacy@indika.com.br">privacy@indika.com.br</a>
              </div>
              <div className="contact-channel">
                <strong>Email Alternativo:</strong>
                <a href="mailto:appindika.tech@gmail.com">
                  appindika.tech@gmail.com
                </a>
              </div>
              <div className="contact-channel">
                <strong>WhatsApp:</strong>
                <span>+55 (86) 99999-9999</span>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h2>📊 Períodos de armazenamento:</h2>
            <div className="storage-periods">
              <div className="period-item">
                <strong>Exclusão Parcial:</strong> 7 dias
              </div>
              <div className="period-item">
                <strong>Exclusão Completa:</strong> 30 dias
              </div>
              <div className="period-item">
                <strong>Dados de Pagamento:</strong> 90 dias (obrigatório)
              </div>
              <div className="period-item">
                <strong>Logs de Segurança:</strong> 30 dias
              </div>
              <div className="period-item">
                <strong>Registros Fiscais:</strong> 5 anos (exigência legal)
              </div>
            </div>
          </div>

          <div className="legal-notice">
            <h3> Conformidade Legal:</h3>
            <p>
              Todas as solicitações estão em conformidade com o Art. 18 da LGPD
              (Lei Geral de Proteção de Dados) e o direito ao esquecimento. A{" "}
              <strong>Indika Soluções Digitais Ltda</strong> se compromete a
              processar suas solicitações dentro dos prazos legais
              estabelecidos. Esta página é exibida na página "Detalhes do app"
              do Google Play conforme exigido pelas políticas do Google.
            </p>
          </div>

          <div className="deletion-footer">
            <p>
              <strong>Última atualização:</strong>{" "}
              {new Date().toLocaleDateString("pt-BR")}
            </p>
            <a href="/#termos" className="btn btn-secondary">
              ← Voltar aos Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountDeletion;
