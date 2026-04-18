import Logo from '../../components/Logo/Logo';
import './LogoSection.css';

export default function LogoSection() {
  return (
    <div className="logo-section">

      {/* ── Fundo claro ─────────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Logo — Fundo Claro</h2>
        <p className="ds-section-sub">Uso sobre fundos brancos e neutros claros</p>

        <div className="logo-demo logo-demo--light">
          <div className="logo-demo-item">
            <Logo theme="light" type="full" size="M" />
            <span className="logo-demo-label">Full — M</span>
          </div>
          <div className="logo-demo-item">
            <Logo theme="light" type="full" size="P" />
            <span className="logo-demo-label">Full — P</span>
          </div>
        </div>
      </section>

      {/* ── Fundo escuro ─────────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Logo — Fundo Escuro</h2>
        <p className="ds-section-sub">Uso sobre fundos navy — sidebar, headers escuros</p>

        <div className="logo-demo logo-demo--dark">
          <div className="logo-demo-item">
            <Logo theme="dark" type="full" size="M" />
            <span className="logo-demo-label logo-demo-label--dark">Full — M</span>
          </div>
          <div className="logo-demo-item">
            <Logo theme="dark" type="full" size="P" />
            <span className="logo-demo-label logo-demo-label--dark">Full — P</span>
          </div>
          <div className="logo-demo-item">
            <Logo theme="dark" type="symbol" size="P" />
            <span className="logo-demo-label logo-demo-label--dark">Símbolo</span>
          </div>
        </div>
      </section>

      {/* ── Uso correto / incorreto ──────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Área de proteção</h2>
        <p className="ds-section-sub">Manter espaço mínimo equivalente à altura da letra "N" ao redor do logo</p>

        <div className="logo-clearance">
          <div className="logo-clearance-box">
            <div className="logo-clearance-inner">
              <Logo theme="light" type="full" size="M" />
            </div>
          </div>
          <p className="logo-clearance-desc">
            A área de proteção impede que outros elementos visuais comprometam a leitura da marca.
          </p>
        </div>
      </section>

    </div>
  );
}
