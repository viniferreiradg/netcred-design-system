import { cloneElement } from 'react';
import NotificationBadge from '../NotificationBadge/NotificationBadge';
import './IconButton.css';

export default function IconButton({
  icon,
  variant = 'fill',            // fill | outline | icon-only | circle | circle-notification
  size = 'm',                  // m | p
  colorScheme = 'light',       // light | dark
  badgeVariant = 'default',    // default | plus9 | minimize | plus | less
  badgeLabel = '1',            // label do badge (variant=default)
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ariaLabel = 'icon button',
}) {
  const cls = [
    'icon-btn',
    `icon-btn--${variant}`,
    `icon-btn--${size}`,
    `icon-btn--${colorScheme}`,
    disabled ? 'icon-btn--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  const iconSize = size === 'p' ? 13 : 18;

  return (
    <button
      className={cls}
      disabled={disabled}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}
    >
      {icon && cloneElement(icon, { size: iconSize, strokeWidth: 2 })}
      {variant === 'circle-notification' && (
        <span className="icon-btn__badge">
          <NotificationBadge
            variant={badgeVariant}
            colorScheme={colorScheme}
            label={badgeLabel}
          />
        </span>
      )}
    </button>
  );
}
