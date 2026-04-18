import NotificationBadge from '../../components/NotificationBadge/NotificationBadge';
import './NotificationBadgeSection.css';

const variants = ['default', 'plus9', 'minimize', 'plus', 'less'];

export default function NotificationBadgeSection() {
  return (
    <div className="notif-badge-section">

      <section className="ds-section">
        <h2 className="ds-section-title">Notification Badge — Light</h2>

        <div className="notif-badge-grid">
          {variants.map(v => (
            <div key={v} className="notif-badge-item">
              <NotificationBadge variant={v} colorScheme="light" label="1" />
              <span className="notif-badge-name">{v}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-section ds-section--dark">
        <h2 className="ds-section-title ds-section-title--light">Notification Badge — Dark</h2>

        <div className="notif-badge-grid">
          {variants.map(v => (
            <div key={v} className="notif-badge-item">
              <NotificationBadge variant={v} colorScheme="dark" label="1" />
              <span className="notif-badge-name notif-badge-name--dark">{v}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
