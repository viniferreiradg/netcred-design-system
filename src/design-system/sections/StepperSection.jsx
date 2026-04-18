import { useState } from 'react';
import Stepper from '../../components/Stepper/Stepper';

const STEPS = ['Método de divisão', 'Seleção de %', 'Detalhes do contrato'];

export default function StepperSection() {
  const [current, setCurrent] = useState(1);

  return (
    <div className="ds-section">
      <h2 className="ds-section-title">Stepper</h2>
      <p className="ds-section-desc">
        Indicador visual de progresso em etapas. <code>current</code> é 1-based.
      </p>

      <div className="ds-group">
        <h3 className="ds-group-title">Interativo</h3>
        <div style={{ maxWidth: 600 }}>
          <Stepper steps={STEPS} current={current} />
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <button className="ds-btn" onClick={() => setCurrent(c => Math.max(1, c - 1))}>← Anterior</button>
          <button className="ds-btn" onClick={() => setCurrent(c => Math.min(STEPS.length + 1, c + 1))}>Próximo →</button>
        </div>
        <p className="ds-note">Etapa atual: {current} / {STEPS.length}</p>
      </div>

      <div className="ds-group">
        <h3 className="ds-group-title">Estados fixos</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 600 }}>
          <div>
            <p className="ds-note" style={{ marginBottom: 8 }}>Etapa 1 ativa</p>
            <Stepper steps={STEPS} current={1} />
          </div>
          <div>
            <p className="ds-note" style={{ marginBottom: 8 }}>Etapa 2 ativa (1 concluída)</p>
            <Stepper steps={STEPS} current={2} />
          </div>
          <div>
            <p className="ds-note" style={{ marginBottom: 8 }}>Etapa 3 ativa (1 e 2 concluídas)</p>
            <Stepper steps={STEPS} current={3} />
          </div>
          <div>
            <p className="ds-note" style={{ marginBottom: 8 }}>Todas concluídas</p>
            <Stepper steps={STEPS} current={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
