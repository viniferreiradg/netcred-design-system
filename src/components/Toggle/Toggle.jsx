import { useState } from 'react';
import './Toggle.css';

export default function Toggle({
  // Controlled: pass both checked + onChange
  // Uncontrolled: pass only defaultChecked (or nothing) — component manages its own state
  checked,
  defaultChecked = false,
  onChange,
  disabled  = false,
  size      = 'm',   // 'm' | 'p'
  className = '',
  id,
  ariaLabel,
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = useState(defaultChecked);
  const isChecked = isControlled ? checked : internal;

  function handleChange(e) {
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  }

  const cls = [
    'toggle',
    `toggle--${size}`,
    disabled ? 'toggle--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <label className={cls} aria-label={ariaLabel}>
      <input
        type="checkbox"
        className="toggle__input"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        id={id}
      />
      <span className="toggle__track" aria-hidden="true">
        <span className="toggle__thumb" />
      </span>
      <span className="toggle__label">{isChecked ? 'On' : 'Off'}</span>
    </label>
  );
}
