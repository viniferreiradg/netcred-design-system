import { NavLink, Outlet } from 'react-router-dom';
import './DSLayout.css';
import './ds-shared.css';

const BASE = '/design-system';

const nav = [
  {
    group: 'Foundations',
    items: [
      { to: `${BASE}/foundations`, label: 'Foundations' },
      { to: `${BASE}/logo`,        label: 'Logo' },
    ],
  },
  {
    group: 'Components',
    items: [
      { to: `${BASE}/button`,             label: 'Button' },
      { to: `${BASE}/icon-button`,        label: 'Icon Button' },
      { to: `${BASE}/notification-badge`, label: 'Notification Badge' },
      { to: `${BASE}/feedback`,           label: 'Feedback' },
      { to: `${BASE}/toggle`,             label: 'Toggle Switch' },
      { to: `${BASE}/radio`,              label: 'Radio Button' },
      { to: `${BASE}/checkbox`,           label: 'Checkbox' },
      { to: `${BASE}/input-text`,         label: 'Input Text' },
      { to: `${BASE}/badge`,              label: 'Badge' },
    ],
  },
  {
    group: 'Tables',
    items: [
      { to: `${BASE}/table`,      label: 'Table' },
      { to: `${BASE}/pagination`, label: 'Pagination' },
    ],
  },
  {
    group: 'Cards',
    items: [
      { to: `${BASE}/stat-card`, label: 'Stat Card' },
    ],
  },
  {
    group: 'Sidebar',
    items: [
      { to: `${BASE}/nav-item`, label: 'Nav Item' },
      { to: `${BASE}/sidebar`,  label: 'Sidebar' },
    ],
  },
  {
    group: 'Reference',
    items: [
      { to: `${BASE}/icons`, label: 'Icons' },
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
