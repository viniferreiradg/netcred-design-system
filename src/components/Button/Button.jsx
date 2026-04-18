import { cloneElement } from 'react';
import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  size = 'm',
  colorScheme = 'light',
  iconLeft = null,
  iconRight = null,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}) {
  const cls = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    `btn--${colorScheme}`,
    disabled ? 'btn--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  const iconSize = size === 'p' ? 14 : 16;

  return (
    <button className={cls} disabled={disabled} onClick={onClick} type={type}>
      {iconLeft && cloneElement(iconLeft, { size: iconSize, strokeWidth: 2 })}
      {children && <span>{children}</span>}
      {iconRight && cloneElement(iconRight, { size: iconSize, strokeWidth: 2 })}
    </button>
  );
}
