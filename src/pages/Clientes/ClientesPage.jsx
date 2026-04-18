import { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import {
  LayoutDashboard,
  User,
  DollarSign,
  RefreshCw,
  FileStack,
  Building2,
  Bell,
  Settings,
} from 'lucide-react';
import './ClientesPage.css';

const NAV_ITEMS = [
  { label: 'Painel Financeiro', icon: LayoutDashboard },
  { label: 'Clientes',          icon: User,        subItems: [
    { label: 'Novo Cliente' },
    { label: 'Importar lista' },
  ]},
  { label: 'Recebíveis',        icon: DollarSign },
  { label: 'Conciliações',      icon: RefreshCw },
  { label: 'Solicitações',      icon: FileStack },
  { label: 'Adquirentes',       icon: Building2 },
  { label: 'Notificações',      icon: Bell,        notification: 1 },
  { label: 'Perfil',            icon: User },
  { label: 'Configurações',     icon: Settings },
];

const COMPANY = { name: 'La moda' };

export default function ClientesPage() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={['clientes-layout', collapsed && 'clientes-layout--collapsed'].filter(Boolean).join(' ')}>

      <Sidebar
        navItems={NAV_ITEMS}
        activeItem="Clientes"
        company={COMPANY}
        collapsed={collapsed}
        onCollapse={setCollapsed}
        onLogout={() => {}}
        onCompany={() => {}}
        onNavigate={() => {}}
      />

      <main className="clientes-content">
        {/* Sessão 2 — TopBar */}
        {/* Sessão 3 — Stat Cards */}
        {/* Sessão 4 — Ações + Tabela */}
        {/* Sessão 5 — Paginação */}
      </main>

    </div>
  );
}
