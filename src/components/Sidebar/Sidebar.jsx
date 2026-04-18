import { useState } from 'react';
import { LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import Logo             from '../Logo/Logo';
import NavItem          from '../NavItem/NavItem';
import CompanySwitcher  from '../CompanySwitcher/CompanySwitcher';
import './Sidebar.css';

/**
 * Sidebar — barra lateral de navegação
 *
 * Props:
 *  navItems    array   [ { label, icon, notification?, subItems?: [{ label, notification? }] } ]
 *  activeItem  string  label do item ativo
 *  company     object  { name, logo? } — empresa ativa no rodapé
 *  onCompany   fn      abre o seletor de empresas
 *  collapsed   bool    controle externo de estado colapsado
 *  onCollapse  fn      chamado ao clicar no botão colapsar (passa novo bool)
 *  onLogout    fn
 *  onNavigate  fn(label) chamado ao clicar em qualquer item
 */
export default function Sidebar({
  navItems    = [],
  activeItem  = '',
  company     = { name: 'Empresa' },
  onCompany,
  collapsed   = false,
  onCollapse,
  onLogout,
  onNavigate,
}) {
  // abrir/fechar sub-menus internamente
  const [openSub, setOpenSub] = useState(null);

  const isCollapsed = collapsed;

  function handleNav(label, hasSub) {
    if (hasSub && !isCollapsed) {
      setOpenSub(prev => (prev === label ? null : label));
    }
    onNavigate?.(label);
  }

  return (
    <aside className={['sidebar', isCollapsed && 'sidebar--min'].filter(Boolean).join(' ')}>

      {/* ── Logo + Nav ────────────────────────────────────── */}
      <div className="sidebar__top">

        {/* Logo */}
        <div className="sidebar__logo">
          {isCollapsed
            ? <Logo theme="dark" type="symbol" size="P" />
            : <Logo theme="dark" type="full"   size="P" />
          }
        </div>

        {/* Navigation */}
        <nav className="sidebar__nav">
          {navItems.map(({ label, icon, notification, subItems }) => {
            const hasSub    = subItems?.length > 0;
            const isActive  = activeItem === label || subItems?.some(s => s.label === activeItem);
            const isOpen    = openSub === label;

            return (
              <div key={label} className="sidebar__nav-group">
                <NavItem
                  label={label}
                  icon={icon}
                  notification={notification}
                  size={isCollapsed ? 'min' : 'max'}
                  active={isActive}
                  as="button"
                  onClick={() => handleNav(label, hasSub)}
                />

                {/* Sub-items — só no max */}
                {hasSub && isOpen && !isCollapsed && (
                  <div className="sidebar__sub">
                    {subItems.map(sub => (
                      <NavItem
                        key={sub.label}
                        label={sub.label}
                        notification={sub.notification}
                        sub
                        active={activeItem === sub.label}
                        as="button"
                        onClick={() => onNavigate?.(sub.label)}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* ── Rodapé: company switcher + logout ────────────── */}
      <div className="sidebar__bottom">

        {/* Company Switcher */}
        <CompanySwitcher
          name={company.name}
          logo={company.logo}
          collapsed={isCollapsed}
          onClick={onCompany}
        />

        {/* Logout */}
        <NavItem
          label="Sair"
          icon={LogOut}
          size={isCollapsed ? 'min' : 'max'}
          as="button"
          onClick={onLogout}
        />

        {/* Botão colapsar */}
        {onCollapse && (
          <button
            className="sidebar__collapse-btn"
            aria-label={isCollapsed ? 'Expandir sidebar' : 'Colapsar sidebar'}
            onClick={() => onCollapse(!isCollapsed)}
          >
            {isCollapsed
              ? <ChevronRight size={14} strokeWidth={2} />
              : <ChevronLeft  size={14} strokeWidth={2} />
            }
          </button>
        )}
      </div>

    </aside>
  );
}

