import { Check } from 'lucide-react';
import './Stepper.css';

/**
 * Stepper — indicador visual de progresso em etapas
 *
 * Props:
 *  steps    string[]  lista de labels das etapas
 *  current  number    etapa atual (1-based)
 */
export default function Stepper({ steps = [], current = 1 }) {
  return (
    <div className="stepper">
      {steps.map((label, i) => {
        const stepNum  = i + 1;
        const state    = stepNum < current ? 'completed'
                       : stepNum === current ? 'active'
                       : 'pending';
        const isLast   = i === steps.length - 1;

        return (
          <div key={label} className="stepper__item">
            <div className="stepper__track">
              <div className={`stepper__circle stepper__circle--${state}`}>
                {state === 'completed'
                  ? <Check size={16} strokeWidth={2.5} />
                  : <span className="stepper__number">{stepNum}</span>
                }
              </div>
              {!isLast && <div className={`stepper__line stepper__line--${state === 'completed' ? 'done' : 'pending'}`} />}
            </div>
            <span className={`stepper__label stepper__label--${state}`}>{label}</span>
          </div>
        );
      })}
    </div>
  );
}
