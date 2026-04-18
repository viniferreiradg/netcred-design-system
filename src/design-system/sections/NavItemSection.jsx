import NavItem from '../../components/NavItem/NavItem';
import './NavItemSection.css';
import {
  LayoutGrid,
  Users,
  FileText,
  Settings,
  Bell,
  ChevronRight,
  BarChart2,
} from 'lucide-react';

const STATES = ['Default', 'Hover', 'Pressed', 'Focus', 'Active'];

const stateKey = s => s.toLowerCase();

export default function NavItemSection() {
  return (
    <div className="nav-item-section">

      {/* ── Size Max ─────────────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Nav Item — Size Max</h2>
        <p className="ds-section-sub">Versão completa com ícone + label · usada na sidebar expandida</p>

        <div className="ni-demo-block ds-section--dark">

          {/* header de colunas */}
          <div className="ni-col-header">
            <span className="ni-row-spacer" />
            {STATES.map(s => (
              <span key={s} className="ni-col-label">{s}</span>
            ))}
          </div>

          {/* sem notificação */}
          <div className="ni-row">
            <span className="ni-row-label">Sem badge</span>
            {STATES.map(s => (
              <div key={s} className="ni-cell">
                <NavItem
                  label="Nav Item"
                  icon={LayoutGrid}
                  state={stateKey(s)}
                />
              </div>
            ))}
          </div>

          {/* com notificação */}
          <div className="ni-row">
            <span className="ni-row-label">Com badge</span>
            {STATES.map(s => (
              <div key={s} className="ni-cell">
                <NavItem
                  label="Nav Item"
                  icon={Bell}
                  notification={4}
                  state={stateKey(s)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sub-item ─────────────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Nav Item — Sub</h2>
        <p className="ds-section-sub">Item filho, indentado, sem ícone · altura reduzida (20 px)</p>

        <div className="ni-demo-block ds-section--dark">
          <div className="ni-col-header">
            <span className="ni-row-spacer" />
            {STATES.filter(s => s !== 'Pressed').map(s => (
              <span key={s} className="ni-col-label">{s}</span>
            ))}
          </div>

          <div className="ni-row">
            <span className="ni-row-label">Sub-item</span>
            {STATES.filter(s => s !== 'Pressed').map(s => (
              <div key={s} className="ni-cell">
                <NavItem
                  label="Novo Cliente"
                  sub
                  state={stateKey(s)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Size Min ─────────────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Nav Item — Size Min</h2>
        <p className="ds-section-sub">Somente ícone · sidebar colapsada (32 × 32)</p>

        <div className="ni-demo-block ds-section--dark">
          <div className="ni-col-header">
            <span className="ni-row-spacer" />
            {STATES.map(s => (
              <span key={s} className="ni-col-label">{s}</span>
            ))}
          </div>

          <div className="ni-row">
            <span className="ni-row-label">Sem badge</span>
            {STATES.map(s => (
              <div key={s} className="ni-cell">
                <NavItem
                  label="Nav Item"
                  icon={LayoutGrid}
                  size="min"
                  state={stateKey(s)}
                />
              </div>
            ))}
          </div>

          <div className="ni-row">
            <span className="ni-row-label">Com badge</span>
            {STATES.map(s => (
              <div key={s} className="ni-cell">
                <NavItem
                  label="Nav Item"
                  icon={Bell}
                  size="min"
                  notification={4}
                  state={stateKey(s)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Exemplo real ─────────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Exemplo de uso</h2>
        <p className="ds-section-sub">Simulação de sidebar com itens reais e sub-item</p>

        <div className="ni-sidebar-preview ds-section--dark">
          <NavItem label="Dashboard"   icon={BarChart2}   active />
          <NavItem label="Clientes"    icon={Users} />
          <NavItem label="Novo Cliente" sub />
          <NavItem label="Relatórios"  icon={FileText}  notification={2} />
          <NavItem label="Configurações" icon={Settings} />
        </div>
      </section>

    </div>
  );
}
