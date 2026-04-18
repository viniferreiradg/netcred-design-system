import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Pagination.css';

/**
 * Pagination — navegação entre páginas
 *
 * Props:
 *  totalPages  number   total de páginas
 *  current     number   página ativa (1-based)
 *  onChange    fn(page) callback ao mudar página
 *  theme       'light' | 'dark'
 */
export default function Pagination({
  totalPages = 1,
  current    = 1,
  onChange,
  theme      = 'light',
}) {
  const pages = buildPages(current, totalPages);

  function go(page) {
    if (page < 1 || page > totalPages || page === current) return;
    onChange?.(page);
  }

  return (
    <nav className={`pagination pagination--${theme}`} aria-label="Paginação">

      {/* Anterior */}
      <PaginationItem
        theme={theme}
        disabled={current === 1}
        onClick={() => go(current - 1)}
        aria-label="Página anterior"
      >
        <ChevronLeft size={16} strokeWidth={2} />
      </PaginationItem>

      {/* Páginas */}
      {pages.map((p, i) =>
        p === '...' ? (
          <PaginationItem key={`ellipsis-${i}`} theme={theme} ellipsis>
            ...
          </PaginationItem>
        ) : (
          <PaginationItem
            key={p}
            theme={theme}
            active={p === current}
            onClick={() => go(p)}
            aria-label={`Página ${p}`}
            aria-current={p === current ? 'page' : undefined}
          >
            {p}
          </PaginationItem>
        )
      )}

      {/* Próxima */}
      <PaginationItem
        theme={theme}
        disabled={current === totalPages}
        onClick={() => go(current + 1)}
        aria-label="Próxima página"
      >
        <ChevronRight size={16} strokeWidth={2} />
      </PaginationItem>

    </nav>
  );
}

/* ─── Item individual ───────────────────────────────────────────── */
function PaginationItem({
  children,
  active    = false,
  disabled  = false,
  ellipsis  = false,
  theme     = 'light',
  onClick,
  ...props
}) {
  const classes = [
    'pagination__item',
    `pagination__item--${theme}`,
    active   && 'pagination__item--active',
    disabled && 'pagination__item--disabled',
    ellipsis && 'pagination__item--ellipsis',
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      onClick={!disabled && !ellipsis ? onClick : undefined}
      disabled={disabled}
      tabIndex={ellipsis ? -1 : 0}
      {...props}
    >
      {children}
    </button>
  );
}

/* ─── Lógica de páginas com ellipsis ───────────────────────────── */
function buildPages(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = [];
  const delta = 1; // vizinhos do current

  const left  = current - delta;
  const right = current + delta;

  // sempre mostra: 1, last, current e vizinhos
  const show = new Set([1, total, current]);
  for (let i = left; i <= right; i++) {
    if (i >= 1 && i <= total) show.add(i);
  }

  let prev = null;
  for (const p of [...show].sort((a, b) => a - b)) {
    if (prev !== null) {
      if (p - prev === 2) pages.push(prev + 1); // gap de 1 → mostra o número
      else if (p - prev > 2) pages.push('...');  // gap maior → ellipsis
    }
    pages.push(p);
    prev = p;
  }

  return pages;
}
