import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import './Chart.css';

function formatBRL(value) {
  return `R$ ${(value / 1000).toFixed(0)}k`;
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <span className="chart-tooltip__label">{label}</span>
      <span className="chart-tooltip__value">
        R$ {payload[0].value.toLocaleString('pt-BR')}
      </span>
    </div>
  );
}

/**
 * Chart — gráfico de área para séries temporais
 *
 * Props:
 *  data    { date: string, value: number }[]
 *  title   string  (opcional)
 *  height  number  (default: 220)
 */
export default function Chart({ data = [], title, height = 220 }) {
  return (
    <div className="chart">
      {title && <p className="chart__title">{title}</p>}
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="var(--color-brand-03-navy-500)" stopOpacity={0.25} />
              <stop offset="95%" stopColor="var(--color-brand-03-navy-500)" stopOpacity={0}    />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-bg-tertiary)" vertical={false} />
          <XAxis
            dataKey="date"
            tick={{ fontFamily: 'var(--font-family-body)', fontSize: 11, fill: 'var(--color-text-secondary)' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={formatBRL}
            tick={{ fontFamily: 'var(--font-family-body)', fontSize: 11, fill: 'var(--color-text-secondary)' }}
            axisLine={false}
            tickLine={false}
            width={48}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="var(--color-brand-03-navy-500)"
            strokeWidth={2}
            fill="url(#chartGradient)"
            dot={false}
            activeDot={{ r: 4, fill: 'var(--color-brand-03-navy-500)' }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
