import InputText from '../../components/InputText/InputText';
import { Search } from '../../components/Icon/icons';
import './InputTextSection.css';

const STATES = [
  { label: 'Default',  props: { placeholder: 'Placeholder' } },
  { label: 'Filled',   props: { defaultValue: 'Text' } },
  { label: 'Focus',    props: { defaultValue: 'Text', className: 'input-field--focus-demo' } },
  { label: 'Error',    props: { defaultValue: 'Text', error: 'Mensagem de erro' } },
  { label: 'Success',  props: { defaultValue: 'Text', success: 'Mensagem de sucesso' } },
  { label: 'Disabled', props: { defaultValue: 'Text', disabled: true } },
];

function InputGrid({ size }) {
  return (
    <div className="input-grid">
      {STATES.map(({ label, props }) => (
        <div key={label} className="input-grid__col">
          <span className="input-grid__state-label">{label}</span>
          <InputText
            label="Label"
            helperText="Helper text"
            size={size}
            {...props}
          />
        </div>
      ))}
    </div>
  );
}

export default function InputTextSection() {
  return (
    <div className="input-text-section">

      <section className="ds-section">
        <h2 className="ds-section-title">Input Text — Size M</h2>
        <p className="ds-section-sub">Default e Filled são interativos</p>
        <InputGrid size="m" />
      </section>

      <section className="ds-section">
        <h2 className="ds-section-title">Input Text — Size P</h2>
        <InputGrid size="p" />
      </section>

      <section className="ds-section">
        <h2 className="ds-section-title">Variantes especiais</h2>
        <div className="input-special-grid">

          <div className="input-special-col">
            <span className="input-grid__state-label">Password (eye toggle)</span>
            <InputText
              label="Senha"
              helperText="Mínimo 8 caracteres"
              placeholder="••••••••"
              type="password"
              size="m"
            />
          </div>

          <div className="input-special-col">
            <span className="input-grid__state-label">Com ícone customizado</span>
            <InputText
              label="Buscar"
              placeholder="Digite para buscar..."
              size="m"
              icon={<Search size={18} strokeWidth={2} />}
            />
          </div>

          <div className="input-special-col">
            <span className="input-grid__state-label">Sem label</span>
            <InputText
              placeholder="Placeholder"
              helperText="Helper text"
              size="m"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
