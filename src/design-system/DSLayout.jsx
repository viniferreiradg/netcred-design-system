import { NavLink, Outlet } from 'react-router-dom';
import './DSLayout.css';
import './ds-shared.css';

const nav = [
  {
    group: 'Foundations',
    items: [
      { to: '/foundations', label: 'Foundations' },
      { to: '/logo',        label: 'Logo' },
    ],
  },
  {
    group: 'Components',
    items: [
      { to: '/button',             label: 'Button' },
      { to: '/icon-button',        label: 'Icon Button' },
      { to: '/notification-badge', label: 'Notification Badge' },
      { to: '/feedback',           label: 'Feedback' },
      { to: '/toggle',             label: 'Toggle Switch' },
      { to: '/radio',              label: 'Radio Button' },
      { to: '/checkbox',           label: 'Checkbox' },
      { to: '/input-text',         label: 'Input Text' },
      { to: '/badge',              label: 'Badge' },
    ],
  },
  {
    group: 'Tables',
    items: [
      { to: '/table',      label: 'Table' },
      { to: '/pagination', label: 'Pagination' },
    ],
  },
  {
    group: 'Cards',
    items: [
      { to: '/stat-card', label: 'Stat Card' },
    ],
  },
  {
    group: 'Sidebar',
    items: [
      { to: '/nav-item', label: 'Nav Item' },
      { to: '/sidebar',  label: 'Sidebar' },
    ],
  },
  {
    group: 'Reference',
    items: [
      { to: '/icons', label: 'Icons' },
    ],
  },
];

export default function DSLayout() {
  return (
    <div className="ds-page">
      <aside className="ds-sidebar">
        <div className="ds-sidebar-header">
          <span className="ds-sidebar-title">Design System</span>
          <span className="ds-sidebar-sub">Netcred</span>
        </div>

        <nav className="ds-nav">
          {nav.map(({ group, items }) => (
            <div key={group} className="ds-nav-group">
              <span className="ds-nav-group-label">{group}</span>
              {items.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    ['ds-nav-item', isActive ? 'ds-nav-item--active' : ''].filter(Boolean).join(' ')
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <main className="ds-main">
        <Outlet />
      </main>
    </div>
  );
}
