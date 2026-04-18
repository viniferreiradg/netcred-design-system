import Checkbox from '../../components/Checkbox/Checkbox';
import './CheckboxSection.css';

const STATES = ['Default', 'Hover', 'Pressed', 'Disabled', 'Focus'];

function CheckboxGrid({ size }) {
  return (
    <div className="checkbox-grid">

      {/* Header */}
      <div className="checkbox-grid__header">
        <span className="checkbox-grid__corner" />
        {STATES.map(s => (
          <span key={s} className="checkbox-grid__state-label">{s}</span>
        ))}
      </div>

      {/* Unchecked row */}
      <div className="checkbox-grid__row">
        <span className="checkbox-grid__value-label">Off</span>
        <div className="checkbox-grid__cell"><Checkbox defaultChecked={false} size={size} label="Label" /></div>
        <div className="checkbox-grid__cell"><Checkbox defaultChecked={false} size={size} label="Label" className="checkbox--hover" /></div>
        <div className="checkbox-grid__cell"><Checkbox defaultChecked={false} size={size} label="Label" className="checkbox--pressed" /></div>
        <div className="checkbox-grid__cell"><Checkbox defaultChecked={false} size={size} label="Label" disabled /></div>
        <div className="checkbox-grid__cell"><Checkbox defaultChecked={false} size={size} label="Label" className="checkbox--focus" /></div>
      </div>

      {/* Checked row */}
      <div className="checkbox-grid__row">
        <span className="checkbox-grid__value-label">On</span>
        <div className="checkbox-grid__cell"><Checkbox defaultChecked={true} size={size} label="Label" /></div>
        <div className="checkbox-grid__cell"><Checkbox defaultChecked={true} size={size} label="Label" className="checkbox--hover checkbox--checked" /></div>
        <div className="checkbox-grid__cell"><Checkbox defaultChecked={true} size={size} label="Label" className="checkbox--pressed checkbox--checked" /></div>
        <div className="checkbox-grid__cell"><Checkbox defaultChecked={true} size={size} label="Label" disabled /></div>
        <div className="checkbox-grid__cell"><Checkbox defaultChecked={true} size={size} label="Label" className="checkbox--focus checkbox--checked" /></div>
      </div>

      {/* Indeterminate row */}
      <div className="checkbox-grid__row">
        <span className="checkbox-grid__value-label">—</span>
        <div className="checkbox-grid__cell"><Checkbox size={size} label="Label" indeterminate /></div>
        <div className="checkbox-grid__cell"><Checkbox size={size} label="Label" indeterminate className="checkbox--hover" /></div>
        <div className="checkbox-grid__cell"><Checkbox size={size} label="Label" indeterminate className="checkbox--pressed" /></div>
        <div className="checkbox-grid__cell"><Checkbox size={size} label="Label" indeterminate disabled /></div>
        <div className="checkbox-grid__cell"><Checkbox size={size} label="Label" indeterminate className="checkbox--focus" /></div>
      </div>

    </div>
  );
}

export default function CheckboxSection() {
  return (
    <div className="checkbox-section">

      <section className="ds-section">
        <h2 className="ds-section-title">Checkbox — Size M</h2>
        <p className="ds-section-sub">Coluna Default é interativa · terceira linha = indeterminate</p>
        <CheckboxGrid size="m" />
      </section>

      <section className="ds-section">
        <h2 className="ds-section-title">Checkbox — Size P</h2>
        <CheckboxGrid size="p" />
      </section>

    </div>
  );
}
