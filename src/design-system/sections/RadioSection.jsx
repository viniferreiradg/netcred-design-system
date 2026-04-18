import Radio from '../../components/Radio/Radio';
import './RadioSection.css';

const STATES = ['Default', 'Hover', 'Pressed', 'Disabled', 'Focus'];

function RadioGrid({ size }) {
  return (
    <div className="radio-grid">

      {/* Header */}
      <div className="radio-grid__header">
        <span className="radio-grid__corner" />
        {STATES.map(s => (
          <span key={s} className="radio-grid__state-label">{s}</span>
        ))}
      </div>

      {/* Unselected row */}
      <div className="radio-grid__row">
        <span className="radio-grid__value-label">Off</span>

        <div className="radio-grid__cell">
          <Radio defaultChecked={false} size={size} label="Label" />
        </div>
        <div className="radio-grid__cell">
          <Radio defaultChecked={false} size={size} label="Label" className="radio--hover" />
        </div>
        <div className="radio-grid__cell">
          <Radio defaultChecked={false} size={size} label="Label" className="radio--pressed" />
        </div>
        <div className="radio-grid__cell">
          <Radio defaultChecked={false} size={size} label="Label" disabled />
        </div>
        <div className="radio-grid__cell">
          <Radio defaultChecked={false} size={size} label="Label" className="radio--focus" />
        </div>
      </div>

      {/* Selected row */}
      <div className="radio-grid__row">
        <span className="radio-grid__value-label">On</span>

        <div className="radio-grid__cell">
          <Radio defaultChecked={true} size={size} label="Label" />
        </div>
        <div className="radio-grid__cell">
          <Radio defaultChecked={true} size={size} label="Label" className="radio--hover radio--checked" />
        </div>
        <div className="radio-grid__cell">
          <Radio defaultChecked={true} size={size} label="Label" className="radio--pressed radio--checked" />
        </div>
        <div className="radio-grid__cell">
          <Radio defaultChecked={true} size={size} label="Label" disabled />
        </div>
        <div className="radio-grid__cell">
          <Radio defaultChecked={true} size={size} label="Label" className="radio--focus radio--checked" />
        </div>
      </div>

    </div>
  );
}

function RadioGroupExample() {
  return (
    <div className="radio-group-example">
      <p className="radio-group-example__title">Exemplo de grupo (mutuamente exclusivos)</p>
      <div className="radio-group-example__options">
        <Radio name="example" value="a" defaultChecked={true}  size="m" label="Opção A" />
        <Radio name="example" value="b" defaultChecked={false} size="m" label="Opção B" />
        <Radio name="example" value="c" defaultChecked={false} size="m" label="Opção C" />
      </div>
    </div>
  );
}

export default function RadioSection() {
  return (
    <div className="radio-section">

      <section className="ds-section">
        <h2 className="ds-section-title">Radio Button — Size M</h2>
        <p className="ds-section-sub">Coluna Default é interativa</p>
        <RadioGrid size="m" />
      </section>

      <section className="ds-section">
        <h2 className="ds-section-title">Radio Button — Size P</h2>
        <RadioGrid size="p" />
      </section>

      <section className="ds-section">
        <h2 className="ds-section-title">Radio Group</h2>
        <RadioGroupExample />
      </section>

    </div>
  );
}
