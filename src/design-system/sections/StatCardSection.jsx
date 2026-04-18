import StatCard from '../../components/StatCard/StatCard';
import './StatCardSection.css';
import {
  HeartHandshake,
  Users,
  FileText,
  TrendingUp,
  DollarSign,
  AlertCircle,
} from 'lucide-react';

export default function StatCardSection() {
  return (
    <div className="stat-card-section">

      {/* ── Anatomia ─────────────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Stat Card</h2>
        <p className="ds-section-sub">Card de métrica — ícone + valor em destaque + label descritivo</p>

        <div className="sc-demo-row">
          <div className="sc-demo-item">
            <StatCard
              icon={HeartHandshake}
              value="125"
              label="Novos clientes"
              trend="up"
            />
            <span className="sc-demo-label">trend=up</span>
          </div>
          <div className="sc-demo-item">
            <StatCard
              icon={FileText}
              value="38"
              label="Propostas abertas"
              trend="down"
            />
            <span className="sc-demo-label">trend=down</span>
          </div>
          <div className="sc-demo-item">
            <StatCard
              icon={DollarSign}
              value="R$ 4.2k"
              label="Receita mensal"
            />
            <span className="sc-demo-label">sem trend</span>
          </div>
        </div>
      </section>

      {/* ── Exemplo de uso ───────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Exemplo de uso — Dashboard</h2>
        <p className="ds-section-sub">Grid de métricas como aparece em tela real</p>

        <div className="sc-dashboard-grid">
          <StatCard icon={Users}         value="1.240"   label="Total de clientes"   trend="up"   />
          <StatCard icon={HeartHandshake} value="125"     label="Novos clientes"      trend="up"   />
          <StatCard icon={FileText}       value="38"      label="Propostas abertas"   trend="down" />
          <StatCard icon={TrendingUp}     value="89%"     label="Taxa de aprovação"   trend="up"   />
          <StatCard icon={DollarSign}     value="R$ 4.2k" label="Receita mensal"                   />
          <StatCard icon={AlertCircle}    value="7"       label="Pendências"          trend="down" />
        </div>
      </section>

    </div>
  );
}
