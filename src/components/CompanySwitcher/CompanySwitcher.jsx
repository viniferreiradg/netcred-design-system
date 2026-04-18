import { ChevronDown } from 'lucide-react';
import './CompanySwitcher.css';

/**
 * CompanySwitcher — seletor de empresa no rodapé da sidebar
 *
 * Props:
 *  name      string   nome da empresa
 *  logo      string   URL da imagem (opcional — usa iniciais se não fornecida)
 *  onClick   fn       abre o seletor de empresas
 *  collapsed bool     modo sidebar colapsada (oculta nome e chevron)
 */
export default function CompanySwitcher({
  name     = 'Empresa',
  logo,
  onClick,
  collapsed = false,
}) {
  return (
    <button className={['company-switcher', collapsed && 'company-switcher--collapsed'].filter(Boolean).join(' ')} onClick={onClick} type="button">
      <div className="company-switcher__avatar">
        {logo
          ? <img src={logo} alt={name} className="company-switcher__logo" />
          : <span className="company-switcher__initials">{initials(name)}</span>
        }
      </div>

      {!collapsed && (
        <>
          <span className="company-switcher__name">{name}</span>
          <ChevronDown size={16} strokeWidth={1.5} className="company-switcher__chevron" />
        </>
      )}
    </button>
  );
}

function initials(name = '') {
  return name
    .split(' ')
    .slice(0, 2)
    .map(n => n[0]?.toUpperCase() ?? '')
    .join('');
}
