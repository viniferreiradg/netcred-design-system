import { cloneElement } from 'react';
import { Minus } from '../Icon/icons';
import './NotificationBadge.css';

export default function NotificationBadge({
  variant = 'default',    // default | plus9 | minimize | plus | less
  colorScheme = 'light',  // light | dark
  label = '1',            // texto customizável (só usado no variant=default)
}) {
  const cls = [
    'notif-badge',
    `notif-badge--${variant}`,
    `notif-badge--${colorScheme}`,
  ].join(' ');

  const renderContent = () => {
    switch (variant) {
      case 'default': return <span className="notif-badge__label">{label}</span>;
      case 'plus9':   return <span className="notif-badge__label">+9</span>;
      case 'plus':    return <span className="notif-badge__label">+</span>;
      case 'less':    return <span className="notif-badge__label">−</span>;
      case 'minimize': return cloneElement(<Minus />, { size: 10, strokeWidth: 2.5 });
      default:        return null;
    }
  };

  return (
    <span className={cls} aria-hidden="true">
      {renderContent()}
    </span>
  );
}
