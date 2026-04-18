import Toggle from '../../components/Toggle/Toggle';
import './ToggleSection.css';

const STATES = ['Default', 'Hover', 'Pressed', 'Disabled', 'Focus'];

function ToggleGrid({ size }) {
  return (
    <div className="toggle-grid">

      {/* Header row */}
      <div className="toggle-grid__header">
        <span className="toggle-grid__corner" />
        {STATES.map(s => (
          <span key={s} className="toggle-grid__state-label">{s}</span>
        ))}
      </div>

      {/* Off row */}
      <div className="toggle-grid__row">
        <span className="toggle-grid__value-label">Off</span>

        {/* Default — real interactive, starts Off */}
        <div className="toggle-grid__cell">
          <Toggle defaultChecked={false} size={size} />
        </div>

        {/* Hover — static */}
        <div className="toggle-grid__cell">
          <Toggle defaultChecked={false} size={size} className="toggle--hover" />
        </div>

        {/* Pressed — static */}
        <div className="toggle-grid__cell">
          <Toggle defaultChecked={false} size={size} className="toggle--pressed" />
        </div>

        {/* Disabled */}
        <div className="toggle-grid__cell">
          <Toggle defaultChecked={false} size={size} disabled />
        </div>

        {/* Focus — static */}
        <div className="toggle-grid__cell">
          <Toggle defaultChecked={false} size={size} className="toggle--focus" />
        </div>
      </div>

      {/* On row */}
      <div className="toggle-grid__row">
        <span className="toggle-grid__value-label">On</span>

        {/* Default — real interactive, starts On */}
        <div className="toggle-grid__cell">
          <Toggle defaultChecked={true} size={size} />
        </div>

        {/* Hover — static */}
        <div className="toggle-grid__cell">
          <Toggle defaultChecked={true} size={size} className="toggle--hover toggle--checked" />
        </div>

        {/* Pressed — static */}
        <div className="toggle-grid__cell">
          <Toggle defaultChecked={true} size={size} className="toggle--pressed toggle--checked" />
        </div>

        {/* Disabled */}
        <div className="toggle-grid__cell">
          <Toggle defaultChecked={true} size={size} disabled />
        </div>

        {/* Focus — static */}
        <div className="toggle-grid__cell">
          <Toggle defaultChecked={true} size={size} className="toggle--focus toggle--checked" />
        </div>
      </div>

    </div>
  );
}

export default function ToggleSection() {
  return (
    <div className="toggle-section">

      <section className="ds-section">
        <h2 className="ds-section-title">Toggle Switch — Size M</h2>
        <p className="ds-section-sub">Coluna Default é interativa — clique para alternar</p>
        <ToggleGrid size="m" />
      </section>

      <section className="ds-section">
        <h2 className="ds-section-title">Toggle Switch — Size P</h2>
        <ToggleGrid size="p" />
      </section>

    </div>
  );
}
