import './NavItem.css';

/**
 * NavItem — item de navegação da sidebar
 *
 * Props:
 *  label        string       texto do item
 *  icon         component    ícone Lucide (size 16 aplicado internamente)
 *  notification false | num  badge de notificação
 *  sub          boolean      sub-item (indentado, sem ícone, menor)
 *  size         'max'|'min'  max = ícone + texto  |  min = só ícone (sidebar colapsada)
 *  active       boolean      estado ativo/selecionado
 *  state        string       força estado visual p/ showcase: 'hover'|'pressed'|'focus'|'active'
 *  onClick      fn
 *  as           element      tag raiz: 'button' (default) | 'a' | NavLink etc.
 */
export default function NavItem({
  label,
  icon: Icon,
  notification = false,
  sub = false,
  size = 'max',
  active = false,
  state,           // demo only
  onClick,
  as: Tag = 'button',
  className = '',
  ...props
}) {
  const isMin  = size === 'min';
  const isSub  = sub && !isMin;

  const classes = [
    'nav-item',
    isSub                       && 'nav-item--sub',
    isMin                       && 'nav-item--min',
    (active || state === 'active')  && 'nav-item--active',
    state === 'hover'           && 'nav-item--hover',
    state === 'pressed'         && 'nav-item--pressed',
    state === 'focus'           && 'nav-item--focus',
    className,
  ].filter(Boolean).join(' ');

  if (isSub) {
    return (
      <Tag className={classes} onClick={onClick} {...props}>
        <span className="nav-item__label">{label}</span>
      </Tag>
    );
  }

  return (
    <Tag className={classes} onClick={onClick} {...props}>
      <span className="nav-item__left">
        {Icon && <Icon size={16} strokeWidth={1.5} className="nav-item__icon" />}
        {!isMin && <span className="nav-item__label">{label}</span>}
      </span>

      {notification !== false && notification !== 0 && (
        <span className="nav-item__badge">
          {typeof notification === 'number' ? notification : ''}
        </span>
      )}
    </Tag>
  );
}
