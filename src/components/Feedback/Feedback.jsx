import CheckFull        from '../Icon/custom/CheckFull';
import CircleXFilled    from '../Icon/custom/CircleXFilled';
import Atencao          from '../Icon/custom/Atencao';
import { X }            from '../Icon/icons';
import './Feedback.css';

const STATUS_CONFIG = {
  success: { Icon: CheckFull,     label: 'Sucesso' },
  error:   { Icon: CircleXFilled, label: 'Erro'   },
  warning: { Icon: Atencao,       label: 'Atenção' },
};

const DARK_ICON_COLOR = '#F9F6F0'; // --color-wl-50

export default function Feedback({
  status   = 'success',
  mode     = 'light',
  message  = '',
  onClose,
}) {
  const { Icon } = STATUS_CONFIG[status] ?? STATUS_CONFIG.success;
  const iconColor = mode === 'dark' ? DARK_ICON_COLOR : undefined;

  const cls = [
    'feedback',
    `feedback--${status}`,
    `feedback--${mode}`,
  ].join(' ');

  return (
    <div className={cls} role="alert">
      <span className="feedback__icon">
        <Icon size={20} color={iconColor} />
      </span>

      <span className="feedback__message">{message}</span>

      {onClose && (
        <button
          className="feedback__close"
          onClick={onClose}
          aria-label="Fechar"
          type="button"
        >
          <X size={16} strokeWidth={2} />
        </button>
      )}
    </div>
  );
}
