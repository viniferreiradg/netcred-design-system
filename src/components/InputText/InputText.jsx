import { useState } from 'react';
import { Eye, EyeOff, CircleX, CircleCheck } from '../Icon/icons';
import './InputText.css';

export default function InputText({
  // Controlled: value + onChange  |  Uncontrolled: defaultValue
  value,
  defaultValue = '',
  onChange,

  label       = '',
  helperText  = '',
  placeholder = '',
  type        = 'text',    // 'text' | 'password' | 'email' | 'number' | etc.
  size        = 'm',       // 'm' | 'p'
  disabled    = false,
  error       = '',        // mensagem — ativa estado error
  success     = '',        // mensagem — ativa estado success
  icon        = null,      // ícone direita customizado (Lucide element)
  id,
  name,
  className   = '',
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue);
  const [showPassword, setShowPassword] = useState(false);

  const currentValue = isControlled ? value : internal;

  function handleChange(e) {
    if (!isControlled) setInternal(e.target.value);
    onChange?.(e);
  }

  const isPassword  = type === 'password';
  const inputType   = isPassword && showPassword ? 'text' : type;
  const iconSize    = size === 'p' ? 13 : 18;

  // Ícone da direita: customizado > eye toggle > nada
  const rightIcon = icon
    ? icon
    : isPassword
      ? showPassword
        ? <EyeOff size={iconSize} strokeWidth={2} />
        : <Eye    size={iconSize} strokeWidth={2} />
      : null;

  const cls = [
    'input-field',
    `input-field--${size}`,
    disabled ? 'input-field--disabled' : '',
    error    ? 'input-field--error'    : '',
    success && !error ? 'input-field--success' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls}>

      {label && (
        <label className="input-field__label" htmlFor={id}>
          {label}
        </label>
      )}

      <div className="input-field__wrapper">
        <input
          className="input-field__input"
          type={inputType}
          id={id}
          name={name}
          value={currentValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
        />

        {rightIcon && (
          <button
            className="input-field__icon-btn"
            type="button"
            tabIndex={-1}
            onClick={isPassword ? () => setShowPassword(p => !p) : undefined}
            aria-label={
              isPassword
                ? showPassword ? 'Ocultar senha' : 'Mostrar senha'
                : undefined
            }
          >
            {rightIcon}
          </button>
        )}
      </div>

      {helperText && !error && !success && (
        <span className="input-field__helper">{helperText}</span>
      )}

      {error && (
        <span className="input-field__message input-field__message--error">
          <CircleX size={12} strokeWidth={2} />
          {error}
        </span>
      )}

      {success && !error && (
        <span className="input-field__message input-field__message--success">
          <CircleCheck size={12} strokeWidth={2} />
          {success}
        </span>
      )}

    </div>
  );
}
