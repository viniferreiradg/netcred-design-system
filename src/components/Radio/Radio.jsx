import { useState } from 'react';
import './Radio.css';

// Single radio button — use RadioGroup for a real group
export default function Radio({
  // Controlled: checked + onChange
  // Uncontrolled: defaultChecked
  checked,
  defaultChecked = false,
  onChange,
  disabled  = false,
  size      = 'm',     // 'm' | 'p'
  label     = '',
  name,
  value,
  className = '',
  id,
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = useState(defaultChecked);
  const isChecked = isControlled ? checked : internal;

  function handleChange(e) {
    if (!isControlled) setInternal(e.target.checked);
    onChange?.(e);
  }

  const cls = [
    'radio',
    `radio--${size}`,
    disabled ? 'radio--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <label className={cls}>
      <input
        type="radio"
        className="radio__input"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        name={name}
        value={value}
        id={id}
      />
      <span className="radio__circle" aria-hidden="true">
        <span className="radio__dot" />
      </span>
      {label && <span className="radio__label">{label}</span>}
    </label>
  );
}
