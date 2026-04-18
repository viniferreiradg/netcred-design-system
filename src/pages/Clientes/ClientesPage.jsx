import { useState } from 'react';
import Sidebar     from '../../components/Sidebar/Sidebar';
import InputText   from '../../components/InputText/InputText';
import IconButton  from '../../components/IconButton/IconButton';
import StatCard    from '../../components/StatCard/StatCard';
import Button      from '../../components/Button/Button';
import Table       from '../../components/Table/Table';
import Badge       from '../../components/Badge/Badge';
import Pagination  from '../../components/Pagination/Pagination';
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
  Filter,
  SquarePen,
  Trash2,
  ArrowRightCircle,
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

const CLIENTES = [
  { id: 8434, nome: 'HRH Fortaleza',      tipo: 'Estabelecimento', doc: '24.241.645/0001-09', optin: 'Ativo'   },
  { id: 8435, nome: 'Jardim das Flores',  tipo: 'Estabelecimento', doc: '12.345.678/0001-10', optin: 'Inativo' },
  { id: 8437, nome: 'Tech Innovations',   tipo: 'Financiador',     doc: '34.567.890/0001-12', optin: 'Ativo'   },
  { id: 8436, nome: 'Café do Sol',        tipo: 'Estabelecimento', doc: '23.456.789/0001-11', optin: 'Ativo'   },
  { id: 8439, nome: 'Livraria Central',   tipo: 'Financiador',     doc: '56.789.012/0001-14', optin: 'Inativo' },
  { id: 9274, nome: 'Museu de Pintura',   tipo: 'Financiador',     doc: '45.678.901/0001-13', optin: 'Ativo'   },
  { id: 9275, nome: 'Biblioteca Central', tipo: 'Financiador',     doc: '12.345.678/0001-99', optin: 'Inativo' },
  { id: 9276, nome: 'Museu de Pintura',   tipo: 'Financiador',     doc: '98.765.432/0001-88', optin: 'Ativo'   },
];

const COLUNAS = [
  { key: 'id',    label: 'ID',       width: 84  },
  { key: 'nome',  label: 'Nome',     width: 270 },
  { key: 'tipo',  label: 'Tipo',     width: 143 },
  { key: 'doc',   label: 'Doc',      width: 142 },
  {
    key: 'optin', label: 'Opt-in',   width: 65, align: 'center',
    render: (v) => (
      <Badge color={v === 'Ativo' ? 'success' : 'neutral'} size="sm">
        {v}
      </Badge>
    ),
  },
  {
    key: 'acoes', label: 'Ações',    width: 51, align: 'center',
    render: (_, row) => (
      <div className="table-actions">
        <button className="table-action-btn table-action-btn--edit"  aria-label={`Editar ${row.nome}`}>
          <SquarePen size={16} />
        </button>
        <button className="table-action-btn table-action-btn--delete" aria-label={`Excluir ${row.nome}`}>
          <Trash2 size={16} />
        </button>
      </div>
    ),
  },
  {
    key: 'detalhes', label: 'Detalhes', width: 62, align: 'center',
    render: (_, row) => (
      <button className="table-action-btn" aria-label={`Ver detalhes de ${row.nome}`}>
        <ArrowRightCircle size={16} />
      </button>
    ),
  },
];

const USER = {
  name:   'Felipe Coelho',
  email:  'felipe.coelho@empresa.com.br',
  avatar: 'https://i.pravatar.cc/150?img=12',
};

export default function ClientesPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [page, setPage]           = useState(1);

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

        {/* ── Sessão 4 — Ações ───────────────────────────────────────── */}
        <div className="session-actions">
          <Button variant="secondary" size="m" iconLeft={<Filter />}>Filtros</Button>
          <Button variant="secondary" size="m">Importar lista</Button>
          <Button variant="primary"   size="m">Novo Cliente</Button>
        </div>

        {/* ── Sessão 5 — Tabela ──────────────────────────────────────── */}
        <Table
          columns={COLUNAS}
          data={CLIENTES}
          rowKey="id"
        />

        {/* ── Sessão 6 — Paginação ───────────────────────────────────── */}
        <div className="session-pagination">
          <Pagination totalPages={7} current={page} onChange={setPage} theme="light" />
        </div>
      </main>

    </div>
  );
}
