import { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './SidebarSection.css';

import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart2,
  Bell,
  Settings,
  CreditCard,
  Briefcase,
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Dashboard',    icon: LayoutDashboard },
  { label: 'Clientes',     icon: Users,       subItems: [
    { label: 'Novo Cliente' },
    { label: 'Lista de Clientes' },
  ]},
  { label: 'Propostas',    icon: FileText,     notification: 3 },
  { label: 'Contratos',    icon: Briefcase },
  { label: 'Relatórios',   icon: BarChart2 },
  { label: 'Financeiro',   icon: CreditCard },
  { label: 'Notificações', icon: Bell,         notification: 7 },
];

const COMPANY = { name: 'La moda' };

export default function SidebarSection() {
  const [active, setActive]       = useState('Dashboard');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="sidebar-section">

      {/* ── Interativa ───────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Sidebar — Interativa</h2>
        <p className="ds-section-sub">Clique nos itens e no botão lateral para colapsar</p>

        <div className="sb-demo-wrap">
          <Sidebar
            navItems={NAV_ITEMS}
            activeItem={active}
            company={COMPANY}
            collapsed={collapsed}
            onCollapse={setCollapsed}
            onNavigate={setActive}
            onLogout={() => alert('Logout')}
            onCompany={() => alert('Trocar empresa')}
          />
          <div className="sb-demo-content">
            <span className="sb-demo-active">Página ativa: <strong>{active}</strong></span>
          </div>
        </div>
      </section>

      {/* ── Max expandida ────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Sidebar — Max (272 px)</h2>
        <p className="ds-section-sub">Versão expandida com logo completo, labels e company switcher</p>

        <div className="sb-static-wrap">
          <Sidebar
            navItems={NAV_ITEMS}
            activeItem="Dashboard"
            company={COMPANY}
          />
        </div>
      </section>

      {/* ── Min colapsada ────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Sidebar — Min (64 px)</h2>
        <p className="ds-section-sub">Versão colapsada com símbolo e ícones — labels ocultados</p>

        <div className="sb-static-wrap">
          <Sidebar
            navItems={NAV_ITEMS}
            activeItem="Propostas"
            company={COMPANY}
            collapsed
          />
        </div>
      </section>

    </div>
  );
}
