import { useState } from 'react';
import Sidebar     from '../../components/Sidebar/Sidebar';
import InputText   from '../../components/InputText/InputText';
import IconButton  from '../../components/IconButton/IconButton';
import StatCard    from '../../components/StatCard/StatCard';
import {
  LayoutDashboard,
  User,
  DollarSign,
  RefreshCw,
  FileStack,
  Building2,
  Bell,
  Settings,
  Search,
  Moon,
  HeartHandshake,
  Crown,
  Timer,
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

const USER = {
  name:   'Felipe Coelho',
  email:  'felipe.coelho@empresa.com.br',
  avatar: 'https://i.pravatar.cc/150?img=12',
};

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

        {/* ── Sessão 2 — TopBar ──────────────────────────── */}
        <header className="topbar">
          <h1 className="topbar__title">Clientes</h1>

          <div className="topbar__search">
            <InputText
              placeholder="Pesquisar"
              icon={<Search />}
            />
          </div>

          <div className="topbar__actions">
            <IconButton
              icon={<Bell />}
              variant="circle-notification"
              colorScheme="light"
              badgeVariant="default"
              badgeLabel="1"
              ariaLabel="Notificações"
            />
            <IconButton
              icon={<Settings />}
              variant="circle"
              colorScheme="light"
              ariaLabel="Configurações"
            />
            <IconButton
              icon={<Moon />}
              variant="circle"
              colorScheme="light"
              ariaLabel="Tema"
            />
          </div>

          <div className="topbar__user">
            <img
              src={USER.avatar}
              alt={USER.name}
              className="topbar__avatar"
            />
            <div className="topbar__user-info">
              <span className="topbar__user-name">{USER.name}</span>
              <span className="topbar__user-email">{USER.email}</span>
            </div>
          </div>
        </header>

        {/* ── Sessão 3 — Stat Cards ──────────────────────── */}
        <div className="stat-cards-grid">
          <StatCard icon={HeartHandshake} value="125" label="Total de clientes" trend="up" />
          <StatCard icon={User}           value="15"  label="Novos clientes"    trend="up" />
          <StatCard icon={Crown}          value="72"  label="Opt-in Ativos"     trend="up" />
          <StatCard icon={Timer}          value="18"  label="Opt-in Inativos"   trend="down" />
        </div>

        {/* Sessão 4 — Ações + Tabela */}
        {/* Sessão 5 — Paginação */}
      </main>

    </div>
  );
}
