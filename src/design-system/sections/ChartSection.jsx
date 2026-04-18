import Chart from '../../components/Chart/Chart';

const DATA_30D = Array.from({ length: 30 }, (_, i) => ({
  date:  `${String(i + 1).padStart(2, '0')}/04`,
  value: Math.floor(8000 + Math.random() * 14000),
}));

const DATA_7D = [
  { date: '12/04', value: 12400 },
  { date: '13/04', value: 9800  },
  { date: '14/04', value: 15200 },
  { date: '15/04', value: 11000 },
  { date: '16/04', value: 17800 },
  { date: '17/04', value: 14300 },
  { date: '18/04', value: 19600 },
];

export default function ChartSection() {
  return (
    <div className="ds-section">
      <h2 className="ds-section-title">Chart</h2>
      <p className="ds-section-desc">
        Gráfico de área para séries temporais. Usa <strong>Recharts</strong>.
        Tooltip com fundo navy. Gradiente na área abaixo da linha.
      </p>

      <div className="ds-group">
        <h3 className="ds-group-title">7 dias — com título</h3>
        <Chart data={DATA_7D} title="Recebíveis por dia" />
      </div>

      <div className="ds-group">
        <h3 className="ds-group-title">30 dias — sem título, altura custom</h3>
        <Chart data={DATA_30D} height={160} />
      </div>
    </div>
  );
}
