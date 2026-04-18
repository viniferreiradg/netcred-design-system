import { useState } from 'react';
import { Check, Minus } from '../Icon/icons';
import './Checkbox.css';

export default function Checkbox({
  // Controlled: checked + onChange
  // Uncontrolled: defaultChecked
  checked,
  defaultChecked = false,
  onChange,
  indeterminate = false,  // third state — partially selected
  disabled  = false,
  size      = 'm',        // 'm' | 'p'
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
    'checkbox',
    `checkbox--${size}`,
    isChecked || indeterminate ? 'checkbox--checked' : '',
    indeterminate ? 'checkbox--indeterminate' : '',
    disabled ? 'checkbox--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  const iconSize = size === 'p' ? 10 : 12;

  return (
    <label className={cls}>
      <input
        type="checkbox"
        className="checkbox__input"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        name={name}
        value={value}
        id={id}
      />
      <span className="checkbox__box" aria-hidden="true">
        {indeterminate
          ? <Minus size={iconSize} strokeWidth={2.5} />
          : isChecked && <Check size={iconSize} strokeWidth={2.5} />
        }
      </span>
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
}
