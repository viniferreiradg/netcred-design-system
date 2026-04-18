import './Badge.css';

/**
 * Badge — etiqueta de status
 *
 * Props:
 *  children   string    texto do badge
 *  color      string    'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
 *  size       string    'sm' | 'md'
 *  theme      string    'light' | 'dark'  — só afeta neutral e success
 */
export default function Badge({
  children = 'Badge',
  color = 'neutral',
  size  = 'sm',
  theme = 'light',
  className = '',
  ...props
}) {
  const classes = [
    'badge',
    `badge--${color}`,
    `badge--${size}`,
    (color === 'neutral' || color === 'success') && `badge--${theme}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
