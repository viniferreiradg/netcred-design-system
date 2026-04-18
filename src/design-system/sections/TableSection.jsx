import Table from '../../components/Table/Table';
import Badge from '../../components/Badge/Badge';
import { Pencil, Trash2, ArrowRightCircle } from 'lucide-react';
import './TableSection.css';

/* ── Definição de colunas (espelhando o Figma) ─────────────────── */
const COLUMNS = [
  { key: 'id',    label: 'ID',    width: 60  },
  { key: 'nome',  label: 'Nome',  width: 270 },
  { key: 'tipo',  label: 'Tipo',  width: 143 },
  { key: 'doc',   label: 'Doc',   width: 142 },
  {
    key: 'optin', label: 'Opt-in', width: 65, align: 'center',
    render: (val) => (
      <Badge color={val ? 'success' : 'danger'} size="sm">
        {val ? 'Ativo' : 'Inativo'}
      </Badge>
    ),
  },
  {
    key: 'acoes', label: 'Ações', width: 51, align: 'center',
    render: (_, row) => (
      <div className="table-actions">
        <button
          className="table-action-btn table-action-btn--edit"
          aria-label="Editar"
          onClick={e => { e.stopPropagation(); alert(`Editar ${row.nome}`); }}
        >
          <Pencil size={16} strokeWidth={1.5} />
        </button>
        <button
          className="table-action-btn table-action-btn--delete"
          aria-label="Excluir"
          onClick={e => { e.stopPropagation(); alert(`Excluir ${row.nome}`); }}
        >
          <Trash2 size={16} strokeWidth={1.5} />
        </button>
      </div>
    ),
  },
  {
    key: 'detalhes', label: 'Detalhes', width: 62, align: 'center',
    render: (_, row) => (
      <button
        className="table-action-btn table-detail-btn"
        aria-label="Ver detalhes"
        onClick={e => { e.stopPropagation(); alert(`Detalhes ${row.nome}`); }}
      >
        <ArrowRightCircle size={24} strokeWidth={1.5} />
      </button>
    ),
  },
];

/* ── Dados de exemplo ──────────────────────────────────────────── */
const DATA = [
  { id: '8434', nome: 'HRH Fortaleza',      tipo: 'Estabelecimento', doc: '24.241.645/0001-09', optin: true  },
  { id: '8435', nome: 'Clínica São Lucas',  tipo: 'Clínica',         doc: '31.872.190/0001-44', optin: true  },
  { id: '8436', nome: 'Farmácia Central',   tipo: 'Farmácia',        doc: '08.543.212/0001-77', optin: false },
  { id: '8437', nome: 'Lab Diagnósticos',   tipo: 'Laboratório',     doc: '14.990.332/0001-02', optin: true  },
  { id: '8438', nome: 'Ótica Visão Total',  tipo: 'Ótica',           doc: '52.771.003/0001-88', optin: false },
];

export default function TableSection() {
  return (
    <div className="table-section">

      {/* ── Tabela completa ───────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Table</h2>
        <p className="ds-section-sub">
          Cabeçalho com <code>--color-wl-300</code> · Linhas com <code>--color-bg-tertiary</code> ·
          Coluna Opt-in usa Badge · Ações usa ícones · Detalhes usa IconButton
        </p>

        <Table
          columns={COLUMNS}
          data={DATA}
          rowKey="id"
          onRowClick={row => alert(`Linha: ${row.nome}`)}
        />
      </section>

      {/* ── Estado vazio ─────────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Table — Estado vazio</h2>

        <Table
          columns={COLUMNS}
          data={[]}
          emptyText="Nenhum cliente encontrado"
        />
      </section>

    </div>
  );
}
