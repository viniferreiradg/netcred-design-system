import Badge from '../../components/Badge/Badge';
import './BadgeSection.css';

const COLORS = ['neutral', 'primary', 'success', 'warning', 'danger', 'info'];

export default function BadgeSection() {
  return (
    <div className="badge-section">

      {/* ── Size SM ──────────────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Badge — Size SM</h2>
        <p className="ds-section-sub">Altura 20 px · padding 4×12 · Montserrat Regular 12 px</p>

        <div className="badge-grid">

          {/* Light theme */}
          <div className="badge-row">
            <span className="badge-row-label">Light</span>
            {COLORS.map(color => (
              <div key={color} className="badge-cell">
                <Badge color={color} size="sm" theme="light">{label(color)}</Badge>
                <span className="badge-cell-name">{color}</span>
              </div>
            ))}
          </div>

          {/* Dark theme */}
          <div className="badge-row badge-row--dark">
            <span className="badge-row-label badge-row-label--dark">Dark</span>
            {COLORS.map(color => (
              <div key={color} className="badge-cell">
                <Badge color={color} size="sm" theme="dark">{label(color)}</Badge>
                <span className="badge-cell-name badge-cell-name--dark">{color}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Size MD ──────────────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Badge — Size MD</h2>
        <p className="ds-section-sub">Altura 24 px · mesmas cores · sem variante de tema</p>

        <div className="badge-row badge-row--light">
          <span className="badge-row-label">MD</span>
          {COLORS.map(color => (
            <div key={color} className="badge-cell">
              <Badge color={color} size="md">{label(color)}</Badge>
              <span className="badge-cell-name">{color}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Exemplos de uso ──────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Exemplos de uso</h2>
        <p className="ds-section-sub">Como o Badge aparece em contexto real</p>

        <div className="badge-examples">
          <div className="badge-example-row">
            <span className="badge-example-label">Status de proposta</span>
            <div className="badge-example-chips">
              <Badge color="info"    size="sm">Em análise</Badge>
              <Badge color="warning" size="sm">Pendente</Badge>
              <Badge color="success" size="sm">Aprovado</Badge>
              <Badge color="danger"  size="sm">Recusado</Badge>
            </div>
          </div>
          <div className="badge-example-row">
            <span className="badge-example-label">Status de contrato</span>
            <div className="badge-example-chips">
              <Badge color="primary" size="sm">Ativo</Badge>
              <Badge color="neutral" size="sm">Encerrado</Badge>
            </div>
          </div>
          <div className="badge-example-row">
            <span className="badge-example-label">Sobre fundo escuro</span>
            <div className="badge-example-chips badge-example-chips--dark">
              <Badge color="success" size="sm" theme="dark">Aprovado</Badge>
              <Badge color="neutral" size="sm" theme="dark">Encerrado</Badge>
              <Badge color="danger"  size="sm">Recusado</Badge>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function label(color) {
  const map = {
    neutral: 'Neutro',
    primary: 'Primary',
    success: 'Sucesso',
    warning: 'Atenção',
    danger:  'Erro',
    info:    'Info',
  };
  return map[color] ?? color;
}
