# CLAUDE.md — Netcred Design System
> Source of truth do projeto. Toda decisão visual e estrutural parte daqui.
> Gerado em: 2026-04-18 | Base: componentes validados no Design System React.

---

## Stack

| Item | Decisão |
|------|---------|
| Framework | React + Vite |
| Estilização | CSS Variables (tokens) — sem CSS-in-JS, sem Tailwind |
| Ícones | **Lucide React** — proibido criar ícones do zero |
| Deploy | Vercel ou Netlify |
| Roteamento | React Router v6 (`createBrowserRouter`) |

---

## Regras absolutas

1. **Nunca usar hex, rgb() ou hsl() no CSS.** Toda cor é um token: `var(--color-*)`.
2. **Nunca recriar um componente existente.** Sempre importar de `src/components/`.
3. **Ícones = Lucide React.** Custom icons só em `src/components/Icon/custom/` (SVG extraído do Figma).
4. **Todo valor visual usa token:** espaçamento `var(--space-*)`, raio `var(--radius-*)`, borda `var(--border-*)`, tipografia `var(--text-*)`.
5. **Antes de escrever qualquer cor, ler `src/styles/tokens.css`** e mapear o token correto.
6. **Componente filho antes do pai.** Se um componente usa outro como filho (INSTANCE no Figma), o filho é implementado e aprovado primeiro.

---

## Grid — Layout Desktop

**Frame base:** 1440 × 813px

### Sidebar (grid esquerda)
| Propriedade | Valor |
|-------------|-------|
| Largura fixa | **272px** |
| Alinhamento | LEFT (MIN) |
| Offset | 16px |
| Gutter | 24px |
| Colunas | 1 |

### Conteúdo (grid direita)
| Propriedade | Valor |
|-------------|-------|
| Largura disponível | **1168px** (1440 − 272) |
| Colunas | **8** |
| Largura por coluna | 126px |
| Gutter | 16px |
| Offset | 16px |
| Alinhamento | RIGHT (MAX) |

### Sidebar minimizada
| Propriedade | Valor |
|-------------|-------|
| Largura fixa | **64px** |
| Colunas de conteúdo | 8 × **152px** |
| Gutter | 16px |
| Offset | 16px |

### CSS de referência para telas
```css
/* Layout raiz */
.page-layout {
  display: grid;
  grid-template-columns: 272px 1fr; /* expandida */
  min-height: 100vh;
}
.page-layout--collapsed {
  grid-template-columns: 64px 1fr;  /* minimizada */
}

/* Área de conteúdo */
.page-content {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 16px;
  padding: 16px;
}
```

---

## Tokens — `src/styles/tokens.css`

### Cores de marca
| Token | Valor | Uso |
|-------|-------|-----|
| `--color-brand-01-navy` | Venice Blue 900 | Cor principal de marca |
| `--color-brand-02-white-linen` | Ambar 50 | Fundo claro de marca |
| `--color-brand-03-navy-500` | Boston Blue 600 | Acento azul |
| `--color-brand-04-white-linen-300` | Ambar 400 | Acento dourado |

### Alias — Texto
| Token | Uso |
|-------|-----|
| `--color-text-primary` | Texto principal (`--color-navy-800`) |
| `--color-text-secondary` | Texto secundário (`--color-navy-600`) |
| `--color-text-brand` | Texto de marca (`--color-navy-600`) |
| `--color-text-tertiary` | Texto terciário (`--color-wl-200`) |
| `--color-text-quartenary` | Texto sobre dark / branco-linho (`--color-wl-50`) |

### Alias — Background
| Token | Uso |
|-------|-----|
| `--color-bg-primary` | Fundo principal (`--color-wl-50`) |
| `--color-bg-secondary` | Fundo alternado / cards (`--color-wl-100`) |
| `--color-bg-tertiary` | Fundo terciário / inputs (`--color-wl-200`) |
| `--color-bg-sidebar` | Fundo da sidebar (`--color-navy-900`) |
| `--color-bg-brand` | Fundo de elementos de marca (`--color-navy-600`) |

### Alias — Sistema
| Categoria | Tokens disponíveis |
|-----------|--------------------|
| Sucesso | `--color-success-lightest` / `light` / `medium` / `dark` |
| Erro | `--color-error-lightest` / `light` / `medium` / `dark` |
| Aviso | `--color-warning-lightest` / `light` / `medium` / `dark` |
| Info | `--color-info-lightest` / `light` / `medium` / `dark` |
| Disabled | `--color-disabled-lightest` / `light` / `medium` |
| Focus | `--color-focus-on-light` / `--color-focus-on-dark` |

### Espaçamento
`--space-0` `--space-4` `--space-8` `--space-12` `--space-16` `--space-20` `--space-24` `--space-32` `--space-40` `--space-48` `--space-64` `--space-80` `--space-96` `--space-128`

### Border Radius
`--radius-none` `--radius-xs` (2px) `--radius-sm` (4px) `--radius-md` (8px) `--radius-lg` (12px) `--radius-xl` (16px) `--radius-2xl` (24px) `--radius-full` (9999px)

### Bordas
`--border-thin` (1px) `--border-medium` (2px) `--border-thick` (4px)

### Tipografia
- **Font:** `--font-family-body` e `--font-family-head` → Montserrat
- **Heading:** `--text-h1-xl` → `--text-h6` (128px → 24px, weight 700)
- **Body:** `--text-body-xxxl` → `--text-body-xxs` (32px → 10px, weight 400)
- **Subtitle:** `--text-subtitle-xl` → `--text-subtitle-s` (20px → 14px, weight 500)
- **Button:** `--text-btn-xl` → `--text-btn-s` (22px → 12px, weight 600)
- **Caption:** `--text-caption-m` (18px) e `--text-caption-s` (14px), weight 700, com letter-spacing

---

## Componentes

### Button — `src/components/Button/Button.jsx`
```jsx
import Button from './components/Button/Button';
```
| Prop | Tipo | Default | Valores |
|------|------|---------|---------|
| `variant` | string | `'primary'` | `'primary'` \| `'secondary'` \| `'ghost'` |
| `size` | string | `'m'` | `'m'` \| `'p'` |
| `colorScheme` | string | `'light'` | `'light'` \| `'dark'` |
| `iconLeft` | element | `null` | Lucide element |
| `iconRight` | element | `null` | Lucide element |
| `disabled` | bool | `false` | |
| `onClick` | fn | — | |
| `type` | string | `'button'` | |

**Notas:** Ícone é clonado internamente com o tamanho correto (16px para M, 14px para P).

---

### IconButton — `src/components/IconButton/IconButton.jsx`
```jsx
import IconButton from './components/IconButton/IconButton';
```
| Prop | Tipo | Default | Valores |
|------|------|---------|---------|
| `icon` | element | — | Lucide element |
| `variant` | string | `'fill'` | `'fill'` \| `'outline'` \| `'icon-only'` \| `'circle'` \| `'circle-notification'` |
| `size` | string | `'m'` | `'m'` \| `'p'` |
| `colorScheme` | string | `'light'` | `'light'` \| `'dark'` |
| `badgeVariant` | string | `'default'` | `'default'` \| `'plus9'` \| `'minimize'` \| `'plus'` \| `'less'` |
| `badgeLabel` | string | `'1'` | texto livre |
| `disabled` | bool | `false` | |
| `ariaLabel` | string | `'icon button'` | obrigatório para acessibilidade |

**Notas:** `circle-notification` exibe `NotificationBadge` embutido.

---

### NotificationBadge — `src/components/NotificationBadge/NotificationBadge.jsx`
```jsx
import NotificationBadge from './components/NotificationBadge/NotificationBadge';
```
| Prop | Tipo | Default | Valores |
|------|------|---------|---------|
| `variant` | string | `'default'` | `'default'` \| `'plus9'` \| `'minimize'` \| `'plus'` \| `'less'` |
| `colorScheme` | string | `'light'` | `'light'` \| `'dark'` |
| `label` | string | `'1'` | texto (só usado em `variant='default'`) |

---

### Feedback — `src/components/Feedback/Feedback.jsx`
```jsx
import Feedback from './components/Feedback/Feedback';
```
| Prop | Tipo | Default | Valores |
|------|------|---------|---------|
| `status` | string | `'success'` | `'success'` \| `'error'` \| `'warning'` |
| `mode` | string | `'light'` | `'light'` \| `'dark'` |
| `message` | string | `''` | texto da mensagem |
| `onClose` | fn | — | se fornecido, exibe botão X |

**Notas:** Usa custom icons (`CheckFull`, `CircleXFilled`, `Atencao`).

---

### Toggle — `src/components/Toggle/Toggle.jsx`
```jsx
import Toggle from './components/Toggle/Toggle';
```
| Prop | Tipo | Default | Notas |
|------|------|---------|-------|
| `checked` | bool | — | modo controlado |
| `defaultChecked` | bool | `false` | modo não-controlado |
| `onChange` | fn | — | |
| `disabled` | bool | `false` | |
| `size` | string | `'m'` | `'m'` \| `'p'` |

**Notas:** Suporta modo controlado e não-controlado. Label automático "On"/"Off".

---

### Radio — `src/components/Radio/Radio.jsx`
```jsx
import Radio from './components/Radio/Radio';
```
| Prop | Tipo | Default | |
|------|------|---------|--|
| `checked` | bool | — | modo controlado |
| `defaultChecked` | bool | `false` | modo não-controlado |
| `onChange` | fn | — | |
| `disabled` | bool | `false` | |
| `size` | string | `'m'` | `'m'` \| `'p'` |
| `label` | string | `''` | |
| `name` / `value` | string | — | para agrupamento HTML nativo |

---

### Checkbox — `src/components/Checkbox/Checkbox.jsx`
```jsx
import Checkbox from './components/Checkbox/Checkbox';
```
| Prop | Tipo | Default | |
|------|------|---------|--|
| `checked` | bool | — | modo controlado |
| `defaultChecked` | bool | `false` | modo não-controlado |
| `onChange` | fn | — | |
| `indeterminate` | bool | `false` | terceiro estado (ícone Minus) |
| `disabled` | bool | `false` | |
| `size` | string | `'m'` | `'m'` \| `'p'` |
| `label` | string | `''` | |

---

### InputText — `src/components/InputText/InputText.jsx`
```jsx
import InputText from './components/InputText/InputText';
```
| Prop | Tipo | Default | |
|------|------|---------|--|
| `value` | string | — | modo controlado |
| `defaultValue` | string | `''` | modo não-controlado |
| `onChange` | fn | — | |
| `label` | string | `''` | |
| `helperText` | string | `''` | texto de apoio (some se houver error/success) |
| `placeholder` | string | `''` | |
| `type` | string | `'text'` | `'text'` \| `'password'` \| `'email'` \| etc. |
| `size` | string | `'m'` | `'m'` \| `'p'` |
| `disabled` | bool | `false` | |
| `error` | string | `''` | ativa estado de erro + mensagem |
| `success` | string | `''` | ativa estado de sucesso + mensagem |
| `icon` | element | `null` | ícone customizado à direita |

**Notas:** `type='password'` exibe toggle Eye/EyeOff automaticamente. `error` tem prioridade sobre `success`.

---

### Badge — `src/components/Badge/Badge.jsx`
```jsx
import Badge from './components/Badge/Badge';
```
| Prop | Tipo | Default | Valores |
|------|------|---------|---------|
| `children` | string | `'Badge'` | texto |
| `color` | string | `'neutral'` | `'neutral'` \| `'primary'` \| `'success'` \| `'warning'` \| `'danger'` \| `'info'` |
| `size` | string | `'sm'` | `'sm'` \| `'md'` |
| `theme` | string | `'light'` | `'light'` \| `'dark'` — só afeta `neutral` e `success` |

---

### Logo — `src/components/Logo/Logo.jsx`
```jsx
import Logo from './components/Logo/Logo';
```
| Prop | Tipo | Default | Valores |
|------|------|---------|---------|
| `theme` | string | `'light'` | `'light'` \| `'dark'` |
| `type` | string | `'full'` | `'full'` \| `'symbol'` |
| `size` | string | `'M'` | `'M'` \| `'P'` |
| `alt` | string | `'Netcred'` | |

**Arquivos:** `src/assets/logo/logo-light.png`, `logo-dark.png`, `logo-dark-sm.png`, `logo-symbol-dark.png`
**Notas:** `symbol` só existe na versão dark. `light` só existe no tamanho M (escala via CSS).

---

### NavItem — `src/components/NavItem/NavItem.jsx`
```jsx
import NavItem from './components/NavItem/NavItem';
```
| Prop | Tipo | Default | |
|------|------|---------|--|
| `label` | string | — | texto do item |
| `icon` | component | — | Lucide component (não element) |
| `notification` | false \| number | `false` | badge numérico |
| `sub` | bool | `false` | sub-item: indentado, sem ícone |
| `size` | string | `'max'` | `'max'` (ícone + texto) \| `'min'` (só ícone) |
| `active` | bool | `false` | |
| `state` | string | — | demo: `'hover'` \| `'pressed'` \| `'focus'` \| `'active'` |
| `as` | element | `'button'` | tag raiz (`'a'`, `NavLink`, etc.) |
| `onClick` | fn | — | |

---

### CompanySwitcher — `src/components/CompanySwitcher/CompanySwitcher.jsx`
```jsx
import CompanySwitcher from './components/CompanySwitcher/CompanySwitcher';
```
| Prop | Tipo | Default | |
|------|------|---------|--|
| `name` | string | `'Empresa'` | nome da empresa |
| `logo` | string | — | URL da imagem (opcional — usa iniciais se ausente) |
| `collapsed` | bool | `false` | modo sidebar colapsada (oculta nome e chevron) |
| `onClick` | fn | — | abre seletor de empresas |

**Notas:** Fica no rodapé da Sidebar, acima do NavItem "Sair". Iniciais geradas automaticamente (2 letras) quando não há logo.

---

### Sidebar — `src/components/Sidebar/Sidebar.jsx`
```jsx
import Sidebar from './components/Sidebar/Sidebar';
```
| Prop | Tipo | Default | |
|------|------|---------|--|
| `navItems` | array | `[]` | `[{ label, icon, notification?, subItems?: [{label, notification?}] }]` |
| `activeItem` | string | `''` | label do item ativo |
| `company` | object | `{name}` | `{ name, logo? }` — empresa exibida no rodapé |
| `onCompany` | fn | — | abre seletor de empresas |
| `collapsed` | bool | `false` | controlado externamente |
| `onCollapse` | fn | — | recebe novo bool |
| `onLogout` | fn | — | |
| `onNavigate` | fn(label) | — | chamado ao clicar em qualquer item |

**Dimensões:** expandida 272px, colapsada 64px. Transição animada.
**Notas:** Sub-menus só ficam abertos no modo expandido. Perfil + settings + logout ficam no rodapé.

---

### StatCard — `src/components/StatCard/StatCard.jsx`
```jsx
import StatCard from './components/StatCard/StatCard';
```
| Prop | Tipo | Default | |
|------|------|---------|--|
| `icon` | component | — | Lucide component |
| `value` | string | — | ex: `"125"`, `"R$ 4.2k"` |
| `label` | string | — | ex: `"Novos clientes"` |
| `trend` | string \| null | `null` | `'up'` \| `'down'` \| `null` |

**Uso em dashboard:** Grid de 4 colunas (`repeat(4, 1fr)`).

---

### Table — `src/components/Table/Table.jsx`
```jsx
import Table from './components/Table/Table';
```
| Prop | Tipo | Default | |
|------|------|---------|--|
| `columns` | array | `[]` | `[{ key, label, width?, align?, render? }]` |
| `data` | array | `[]` | lista de objetos |
| `rowKey` | string | `'id'` | chave única por linha |
| `onRowClick` | fn(row) | — | torna linha clicável |
| `emptyText` | string | `'Nenhum dado encontrado'` | |

**Coluna `render`:** `render(value, row) → ReactNode` — para células customizadas (Badge, botões, etc).
**Linhas:** alternadas odd=`--color-bg-primary`, even=`--color-bg-secondary`.
**Ações:** usar `.table-actions` + `.table-action-btn--edit` / `.table-action-btn--delete` para ícones de ação.

---

### Pagination — `src/components/Pagination/Pagination.jsx`
```jsx
import Pagination from './components/Pagination/Pagination';
```
| Prop | Tipo | Default | |
|------|------|---------|--|
| `totalPages` | number | `1` | |
| `current` | number | `1` | 1-based |
| `onChange` | fn(page) | — | |
| `theme` | string | `'light'` | `'light'` \| `'dark'` |

**Algoritmo:** Sempre exibe primeira, última, atual ± 1. Gaps de 1 exibem o número; gaps maiores exibem `...`.

---

## Ícones

### Lucide (registrados em `src/components/Icon/icons.js`)
Importar sempre de `../Icon/icons` dentro de componentes, ou direto de `lucide-react` nas telas.

Ícones disponíveis: `House`, `Star`, `User`, `Settings`, `CircleArrowRight`, `Eye`, `EyeOff`, `Search`, `DollarSign`, `Copy`, `GripVertical`, `Grip`, `Info`, `Check`, `Files`, `Link`, `Filter`, `Video`, `MessageCircle`, `Send`, `Sparkles`, `PiggyBank`, `RotateCcw`, `Handshake`, `BriefcaseBusiness`, `StretchHorizontal`, `Download`, `Upload`, `Gauge`, `Folder`, `FolderOpen`, `Trash2`, `SquarePen`, `PaintBucket`, `Expand`, `FileStack`, `ZoomIn`, `ZoomOut`, `Clock`, `Save`, `Crosshair`, `Lightbulb`, `ChartSpline`, `SwatchBook`, `Pipette`, `File`, `TrendingUp`, `TrendingDown`, `History`, `Newspaper`, `SendHorizontal`, `ThumbsUp`, `ThumbsDown`, `Flag`, `LayoutDashboard`, `HeartHandshake`, `Calculator`, `LogOut`, `Bell`, `Scroll`, `Moon`, `Timer`, `Sun`, `Calendar`, `TriangleAlert`, `Pencil`, `X`, `AlertTriangle`, `Plus`, `Minus`, `Map`, `Building2`, `Menu`, `RefreshCw`, `Crown`, `MoreHorizontal`, `Paperclip`, `QrCode`, `ChevronUp`, `ChevronDown`, `ChevronLeft`, `ChevronRight`, `Loader2`, `CheckCheck`, `CircleCheck`, `CircleX`, `CircleAlert`, `Image`, `Maximize2`, `Minimize2`, `Grid2X2`, `ArrowRightCircle`

### Custom Icons (`src/components/Icon/custom/`)
SVGs extraídos do Figma — não existem no Lucide:

| Arquivo | Uso |
|---------|-----|
| `Atencao.jsx` | Ícone de atenção (Feedback warning) |
| `CheckFull.jsx` | Check preenchido (Feedback success) |
| `CircleXFilled.jsx` | Circle X preenchido (Feedback error) |
| `CircleAlertFilled.jsx` | Circle alert preenchido |
| `ChartSpline2.jsx` | Variação de chart spline |
| `PlathanusTolerancias.jsx` | Ícone específico do produto |
| `StatusAberto.jsx` | Badge de status — aberto |
| `StatusDev.jsx` | Badge de status — em dev |
| `StatusRascunho.jsx` | Badge de status — rascunho |
| `Uncheck1.jsx` | Estado desmarcado variante 1 |
| `Uncheck2.jsx` | Estado desmarcado variante 2 |
| `Whatsapp.jsx` | Logo Whatsapp |

---

## Estrutura de pastas

```
src/
├── assets/
│   └── logo/          # PNGs exportados do Figma (3x)
├── components/
│   ├── Badge/
│   ├── Button/
│   ├── Checkbox/
│   ├── Feedback/
│   ├── Icon/
│   │   ├── icons.js   # registry Lucide
│   │   └── custom/    # SVGs do Figma
│   ├── IconButton/
│   ├── InputText/
│   ├── Logo/
│   ├── NavItem/
│   ├── NotificationBadge/
│   ├── Pagination/
│   ├── Radio/
│   ├── Sidebar/
│   ├── StatCard/
│   ├── Table/
│   └── Toggle/
├── design-system/     # Design System React (showcase)
│   ├── DSLayout.jsx
│   ├── DSRouter.jsx
│   └── sections/
└── styles/
    └── tokens.css     # Fonte única de tokens — ler antes de escrever qualquer cor
```

---

## Convenções de nomenclatura

- **Componente:** PascalCase — `Button`, `StatCard`
- **Pasta:** PascalCase igual ao componente — `src/components/Button/`
- **CSS class base:** kebab-case igual ao componente — `.button`, `.stat-card`
- **Modificadores:** `--` BEM — `.btn--primary`, `.btn--disabled`
- **Elementos internos:** `__` BEM — `.btn__label`, `.sidebar__top`
- **Variante de tema:** `--light` / `--dark` como modificador de classe

---

## Padrão controlado / não-controlado

Toggle, Radio, Checkbox e InputText suportam ambos os modos:
- **Controlado:** passar `value`/`checked` + `onChange`
- **Não-controlado:** passar `defaultValue`/`defaultChecked` — o componente gerencia o estado internamente
