import './StatCard.css';

/**
 * StatCard — card de métrica para dashboards
 *
 * Props:
 *  icon      component   ícone Lucide (renderizado em 24px)
 *  value     string      valor principal exibido em destaque ("125", "R$ 4.2k")
 *  label     string      descrição da métrica ("Novos clientes")
 *  trend     'up'|'down'|null   exibe badge + ou - com cor semântica
 */
export default function StatCard({
  icon: Icon,
  value,
  label,
  trend = null,
}) {
  return (
    <div className="stat-card">

      {/* Bolha do ícone */}
      <div className="stat-card__icon-bubble">
        {Icon && <Icon size={24} strokeWidth={2} className="stat-card__icon" />}
      </div>

      {/* Linha inferior: valor + label */}
      <div className="stat-card__bottom">
        <div className="stat-card__number">
          {trend && (
            <span className={`stat-card__trend stat-card__trend--${trend}`}>
              {trend === 'up' ? '+' : '−'}
            </span>
          )}
          <span className="stat-card__value">{value}</span>
        </div>
        <span className="stat-card__label">{label}</span>
      </div>

    </div>
  );
}
