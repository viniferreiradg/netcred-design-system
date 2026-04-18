import logoLight     from '../../assets/logo/logo-light.png';
import logoDark      from '../../assets/logo/logo-dark.png';
import logoDarkSm    from '../../assets/logo/logo-dark-sm.png';
import logoSymbol    from '../../assets/logo/logo-symbol-dark.png';
import './Logo.css';

/**
 * Logo — marca Netcred
 *
 * Props:
 *  theme   'light' | 'dark'    fundo claro ou escuro
 *  type    'full' | 'symbol'   logotipo completo ou só símbolo
 *  size    'M' | 'P'           tamanho (M = 160px / P = 96px de largura)
 *  alt     string              texto alternativo (acessibilidade)
 *  className / style           customização extra
 */
export default function Logo({
  theme = 'light',
  type  = 'full',
  size  = 'M',
  alt   = 'Netcred',
  className = '',
  style,
  ...props
}) {
  const src = resolveSrc(theme, type, size);
  const sizeClass = `logo--${size.toLowerCase()}`;
  const typeClass  = type === 'symbol' ? 'logo--symbol' : '';

  return (
    <img
      src={src}
      alt={alt}
      className={['logo', sizeClass, typeClass, className].filter(Boolean).join(' ')}
      style={style}
      draggable={false}
      {...props}
    />
  );
}

function resolveSrc(theme, type, size) {
  if (type === 'symbol') return logoSymbol;          // só dark disponível
  if (theme === 'light')  return logoLight;           // claro: só tamanho M (escala por CSS)
  if (size === 'P')       return logoDarkSm;          // escuro pequeno
  return logoDark;                                    // escuro grande
}
