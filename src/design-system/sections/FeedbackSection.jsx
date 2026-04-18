import Feedback from '../../components/Feedback/Feedback';
import './FeedbackSection.css';

const ROWS = [
  {
    status: 'success',
    message: 'Operação realizada com sucesso! Os dados foram salvos.',
  },
  {
    status: 'error',
    message: 'Não foi possível processar a solicitação. Verifique os dados e tente novamente.',
  },
  {
    status: 'warning',
    message: 'Atenção: algumas informações precisam ser revisadas antes de continuar.',
  },
];

export default function FeedbackSection() {
  return (
    <div className="feedback-section">

      <section className="ds-section">
        <h2 className="ds-section-title">Feedback — Light</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 600 }}>
          {ROWS.map(({ status, message }) => (
            <Feedback
              key={status}
              status={status}
              mode="light"
              message={message}
              onClose={() => {}}
            />
          ))}
        </div>
      </section>

      <section className="ds-section">
        <h2 className="ds-section-title">Feedback — Dark</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 600 }}>
          {ROWS.map(({ status, message }) => (
            <Feedback
              key={status}
              status={status}
              mode="dark"
              message={message}
              onClose={() => {}}
            />
          ))}
        </div>
      </section>

      <section className="ds-section">
        <h2 className="ds-section-title">Feedback — sem botão de fechar</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 600 }}>
          <Feedback status="success" mode="light" message="Cadastro confirmado com sucesso." />
          <Feedback status="error"   mode="dark"  message="Erro ao conectar com o servidor." />
          <Feedback status="warning" mode="light" message="Limite de crédito próximo do teto." />
        </div>
      </section>

    </div>
  );
}
