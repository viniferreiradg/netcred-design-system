import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar    from '../../components/Sidebar/Sidebar';
import InputText  from '../../components/InputText/InputText';
import IconButton from '../../components/IconButton/IconButton';
import Button     from '../../components/Button/Button';
import StatCard   from '../../components/StatCard/StatCard';
import Table      from '../../components/Table/Table';
import Badge      from '../../components/Badge/Badge';
import Pagination from '../../components/Pagination/Pagination';
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
  Filter,
  Plus,
  CircleCheck,
  Clock,
} from 'lucide-react';
import './ReceiveisPage.css';

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

const CONTRATOS = [
  { id: '2401', dataCriacao: '12/01/2024', nome: 'Contrato HRH Fortaleza',    cliente: 'HRH Fortaleza',      financiador: '24.241.645/0001-09', tipo: 'Cessão',     status: 'Ativo'      },
  { id: '2402', dataCriacao: '15/01/2024', nome: 'Contrato Jardim das Flores', cliente: 'Jardim das Flores',  financiador: '12.345.678/0001-10', tipo: 'Gravame',    status: 'Pendente'   },
  { id: '2403', dataCriacao: '18/01/2024', nome: 'Contrato Tech Innovations',  cliente: 'Tech Innovations',   financiador: '34.567.890/0001-12', tipo: 'Cessão',     status: 'Ativo'      },
  { id: '2404', dataCriacao: '22/01/2024', nome: 'Contrato Café do Sol',       cliente: 'Café do Sol',        financiador: '23.456.789/0001-11', tipo: 'Troca',      status: 'Encerrado'  },
  { id: '2405', dataCriacao: '25/01/2024', nome: 'Contrato Livraria Central',  cliente: 'Livraria Central',   financiador: '56.789.012/0001-14', tipo: 'Gravame',    status: 'Pendente'   },
  { id: '2406', dataCriacao: '28/01/2024', nome: 'Contrato Museu de Pintura',  cliente: 'Museu de Pintura',   financiador: '45.678.901/0001-13', tipo: 'Cessão',     status: 'Ativo'      },
  { id: '2407', dataCriacao: '02/02/2024', nome: 'Contrato Biblioteca Central',cliente: 'Biblioteca Central', financiador: '12.345.678/0001-99', tipo: 'Troca',      status: 'Ativo'      },
  { id: '2408', dataCriacao: '05/02/2024', nome: 'Contrato Nova Empresa',      cliente: 'Nova Empresa',       financiador: '98.765.432/0001-88', tipo: 'Cessão',     status: 'Encerrado'  },
];

const STATUS_COLOR = {
  Ativo:      'success',
  Pendente:   'warning',
  Encerrado:  'neutral',
};

const COLUNAS = [
  { key: 'id',          label: 'ID',               width: 60  },
  { key: 'dataCriacao', label: 'Data de criação',  width: 130 },
  { key: 'nome',        label: 'Nome do contrato', width: 220 },
  { key: 'cliente',     label: 'Cliente',          width: 160 },
  { key: 'financiador', label: 'Financiador',      width: 160 },
  { key: 'tipo',        label: 'Tipo',             width: 80  },
  {
    key: 'status', label: 'Status', width: 90, align: 'center',
    render: (v) => (
      <Badge color={STATUS_COLOR[v] ?? 'neutral'} size="sm">{v}</Badge>
    ),
  },
  {
    key: 'acoes', label: 'Ações', width: 60, align: 'center',
    render: (_, row) => (
      <div className="table-actions">
        <button className="table-action-btn table-action-btn--edit" aria-label={`Editar ${row.nome}`}>
          <Settings size={16} />
        </button>
      </div>
    ),
  },
];

export default function ReceiveisPage() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [page, setPage]           = useState(1);

  return (
    <div className={['recebiveis-layout', collapsed && 'recebiveis-layout--collapsed'].filter(Boolean).join(' ')}>

      <Sidebar
        navItems={NAV_ITEMS}
        activeItem="Recebíveis"
        company={COMPANY}
        collapsed={collapsed}
        onCollapse={setCollapsed}
        onLogout={() => {}}
        onCompany={() => {}}
        onNavigate={() => {}}
      />

      <main className="recebiveis-content">

        {/* ── TopBar ─────────────────────────────────────────────── */}
        <header className="topbar">
          <h1 className="topbar__title">Recebíveis</h1>

          <div className="topbar__search">
            <InputText placeholder="Pesquisar" icon={<Search />} />
          </div>

          <div className="topbar__actions">
            <IconButton icon={<Bell />}     variant="circle-notification" colorScheme="light" badgeVariant="default" badgeLabel="1" ariaLabel="Notificações" />
            <IconButton icon={<Settings />} variant="circle"              colorScheme="light" ariaLabel="Configurações" />
            <IconButton icon={<Moon />}     variant="circle"              colorScheme="light" ariaLabel="Tema" />
          </div>

          <div className="topbar__user">
            <img src={USER.avatar} alt={USER.name} className="topbar__avatar" />
            <div className="topbar__user-info">
              <span className="topbar__user-name">{USER.name}</span>
              <span className="topbar__user-email">{USER.email}</span>
            </div>
          </div>
        </header>

        {/* ── Stat Cards ─────────────────────────────────────────── */}
        <div className="stat-cards-grid">
          <StatCard icon={FileStack}   value="48"        label="Total de contratos"   trend="up"   />
          <StatCard icon={DollarSign}  value="R$ 1.2M"   label="Valor em recebíveis"  trend="up"   />
          <StatCard icon={CircleCheck} value="32"        label="Contratos ativos"     trend="up"   />
          <StatCard icon={Clock}       value="11"        label="Contratos pendentes"  trend="down" />
        </div>

        {/* ── Ações ──────────────────────────────────────────────── */}
        <div className="session-actions">
          <Button variant="secondary" size="m" iconLeft={<Filter />}>Filtros</Button>
          <Button variant="primary"   size="m" iconLeft={<Plus />} onClick={() => navigate('/recebiveis/novo-contrato')}>Novo contrato</Button>
        </div>

        {/* ── Tabela ─────────────────────────────────────────────── */}
        <Table
          columns={COLUNAS}
          data={CONTRATOS}
          rowKey="id"
          onRowClick={(row) => console.log('Ver detalhes:', row)}
        />

        {/* ── Paginação ──────────────────────────────────────────── */}
        <div className="session-pagination">
          <Pagination totalPages={7} current={page} onChange={setPage} theme="light" />
        </div>

      </main>
    </div>
  );
}
