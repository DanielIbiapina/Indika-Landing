import React, { useEffect } from "react";

const TermsOfService = () => {
  useEffect(() => {
    // Scroll para a seção quando a página carregar com hash #termos
    if (window.location.hash === "#termos") {
      const element = document.getElementById("termos");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return (
    <section id="termos" className="terms-section">
      <div className="container">
        <div className="terms-content">
          <h1>Termos e Condições Gerais de Uso e Política de Privacidade</h1>
          <div className="company-info">
            <p>
              <strong>Razão Social:</strong> Indika Soluções Digitais Ltda
            </p>
            <p>
              <strong>Nome Fantasia:</strong> Indika
            </p>
            <p>
              <strong>CNPJ:</strong> 60.737.073/0001-92
            </p>
            <p>
              <strong>Sede:</strong> Rua Valdemar Martins, nº 2, Quadra 1 Lote
              10
            </p>
            <p>Bairro Morada do Sol, CEP 64055-280</p>
            <p>Teresina – PI</p>
          </div>

          <div className="terms-section-content">
            <h2>1. DO OBJETO</h2>
            <p>
              O presente Termo regula o uso da plataforma Indika, que se
              caracteriza como uma aplicação de intermediação de serviços e
              negócios locais entre prestadores e clientes, disponível para
              dispositivos móveis.
            </p>
            <p>
              A plataforma licenciará o uso do software, website e demais
              ativos, permitindo a localização de prestadores de serviço
              conforme a localização do usuário, a realização de agendamentos e
              a interação via chat, bem como o pagamento opcional por meio do
              próprio aplicativo.
            </p>
          </div>

          <div className="terms-section-content">
            <h2>2. DA ACEITAÇÃO</h2>
            <p>
              Ao acessar o aplicativo, o usuário declara que leu e concorda com
              os presentes termos, de forma livre e espontânea, sendo o aceite
              condição indispensável para o uso da plataforma.
            </p>
            <p>
              O uso da plataforma implica o consentimento livre, informado e
              inequívoco do titular quanto à coleta e ao tratamento de dados
              descritos neste documento. O app também pode coletar
              automaticamente informações técnicas do dispositivo, como sistema
              operacional, tipo de navegador e identificadores únicos, para fins
              de segurança, diagnóstico e desempenho da aplicação.
            </p>
          </div>

          <div className="terms-section-content">
            <h2>3. DO CADASTRO</h2>
            <p>
              Para utilizar a plataforma, é necessário realizar cadastro com
              número de telefone, validado via SMS. Clientes podem fornecer
              e-mail e CPF opcionalmente. Prestadores de serviço devem fornecer
              e-mail obrigatoriamente, enquanto o CPF continua opcional.
            </p>
            <p>
              O usuário é responsável pela veracidade dos dados fornecidos, bem
              como pela guarda de seu login e senha, não sendo permitida a
              cessão ou compartilhamento.
            </p>
          </div>

          <div className="terms-section-content">
            <h2>4. DOS SERVIÇOS E PAGAMENTOS</h2>
            <p>O aplicativo permite:</p>
            <ul>
              <li>Cadastro gratuito de clientes;</li>
              <li>
                Cadastro de prestadores de serviço mediante pagamento mensal via
                Mercado Pago;
              </li>
              <li>
                Contratação de serviços diretamente entre usuários, com opção de
                pagamento via app.
              </li>
            </ul>
            <p>
              A Indika não se responsabiliza por transações realizadas fora da
              plataforma.
            </p>
          </div>

          <div className="terms-section-content">
            <h2>5. DO CANCELAMENTO E ARREPENDIMENTO</h2>
            <p>
              Prestadores de serviço poderão cancelar sua assinatura a qualquer
              momento, sendo o acesso garantido até o fim do período contratado.
              O cancelamento em até 7 (sete) dias contados da contratação
              garante reembolso integral, nos termos do CDC.
            </p>
          </div>

          <div className="terms-section-content">
            <h2>6. DA PROTEÇÃO DE DADOS PESSOAIS (LGPD)</h2>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº
              13.709/2018), os dados coletados são:
            </p>
            <ul>
              <li>Telefone, e-mail e CPF (opcional);</li>
              <li>Localização e interações na plataforma;</li>
              <li>Dados de pagamento quando usados no app.</li>
            </ul>

            <h3>As finalidades são:</h3>
            <ul>
              <li>Cadastro de conta e autenticação (execução contratual);</li>
              <li>
                Recomendação geolocalizada de prestadores (legítimo interesse);
              </li>
              <li>Processamento de pagamentos (execução contratual);</li>
              <li>Comunicação entre usuários (execução contratual);</li>
              <li>Segurança e melhoria de experiência (legítimo interesse).</li>
            </ul>

            <h3>Os dados são compartilhados com:</h3>
            <ul>
              <li>Operadores de pagamento (Mercado Pago);</li>
              <li>Prestadores e clientes envolvidos na contratação;</li>
              <li>Autoridades judiciais, quando legalmente exigido.</li>
            </ul>

            <p>
              Os dados pessoais poderão ser conservados após o encerramento do
              vínculo com o usuário para cumprimento de obrigações legais ou
              regulatórias, exercício regular de direitos em processo judicial,
              administrativo ou arbitral, nos termos do art. 16 da LGPD.
            </p>
          </div>

          <div className="terms-section-content">
            <h2>7. DOS DIREITOS DO TITULAR</h2>
            <p>
              Nos termos do art. 18 da LGPD, o titular pode, a qualquer momento:
            </p>
            <ul>
              <li>Confirmar a existência de tratamento;</li>
              <li>Acessar, corrigir, atualizar ou completar dados;</li>
              <li>Solicitar anonimização, bloqueio ou exclusão;</li>
              <li>Requerer portabilidade;</li>
              <li>Revogar consentimentos;</li>
              <li>
                Opor-se a tratamento realizado com base no legítimo interesse.
              </li>
            </ul>
          </div>

          <div className="terms-section-content">
            <h2>8. DAS INTERAÇÕES ENTRE USUÁRIOS</h2>
            <p>
              O aplicativo oferece chat privado e sistema de avaliações. Os
              comentários são públicos, e a moderação se reserva o direito de
              remover conteúdo ofensivo, discriminatório ou falso.
            </p>
          </div>

          <div className="terms-section-content">
            <h2>9. DOS COOKIES E TECNOLOGIAS DE NAVEGAÇÃO</h2>
            <p>
              A plataforma pode usar cookies para melhorar a experiência de
              navegação, registrar preferências e otimizar serviços.
            </p>
          </div>

          <div className="terms-section-content">
            <h2>10. ALTERAÇÕES NOS TERMOS E POLÍTICA</h2>
            <p>
              Estes termos podem ser atualizados periodicamente. Alterações
              relevantes serão informadas no aplicativo. O uso continuado
              implica aceitação das novas condições.
            </p>
          </div>

          <div className="terms-section-content">
            <h2>11. CONTATO DO ENCARREGADO (DPO)</h2>
            <p>
              Dúvidas ou solicitações sobre privacidade devem ser enviadas para:{" "}
              <a href="mailto:appindika.tech@gmail.com">
                appindika.tech@gmail.com
              </a>
            </p>
          </div>

          <div className="terms-section-content">
            <h2>12. DO FORO</h2>
            <p>
              Para dirimir controvérsias oriundas deste instrumento, fica eleito
              o foro da Comarca de Teresina, Estado do Piauí.
            </p>
          </div>

          <div className="terms-section-content">
            <h2>13. LIMITAÇÃO DE RESPONSABILIDADE</h2>
            <p>
              A Indika atua exclusivamente como plataforma de intermediação
              entre usuários, não sendo parte na relação de consumo firmada
              entre cliente e prestador. A empresa não se responsabiliza pela
              qualidade, execução, prazos ou consequências dos serviços
              contratados fora da plataforma, nem por danos causados por
              condutas dos usuários.
            </p>
            <p>
              A Indika envidará esforços razoáveis para manter o serviço
              disponível, mas não se responsabiliza por falhas de conexão,
              interrupções temporárias, ou quaisquer danos indiretos decorrentes
              do uso do aplicativo.
            </p>
          </div>

          <div className="terms-footer">
            <p>
              <em>Última atualização: {new Date().getFullYear()}</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
