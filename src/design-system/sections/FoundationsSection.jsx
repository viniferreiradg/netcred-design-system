import './FoundationsSection.css';

const colorGroups = [
  {
    label: 'Brand',
    colors: [
      { name: 'Venice Blue 900', var: '--color-brand-01-navy',            hex: '#122e4a' },
      { name: 'Ambar 50',        var: '--color-brand-02-white-linen',     hex: '#fbf3ec' },
      { name: 'Boston Blue 600', var: '--color-brand-03-navy-500',        hex: '#008aad' },
      { name: 'Ambar 400',       var: '--color-brand-04-white-linen-300', hex: '#c88c38' },
    ],
  },
  {
    label: 'Venice Blue',
    colors: [50,100,200,300,400,500,600,700,800,900,950].map(n => ({
      name: `Navy ${n}`,
      var: `--color-navy-${n}`,
      hex: { 50:'#ebf0fb',100:'#d1ddef',200:'#b8cce6',300:'#8caec9',400:'#6090b8',500:'#4a7ca8',600:'#3a6b94',700:'#2b5478',800:'#1e4060',900:'#122e4a',950:'#091c30' }[n],
    })),
  },
  {
    label: 'Ambar',
    colors: [50,100,200,300,400,500,600,700,800,900,950].map(n => ({
      name: `WL ${n}`,
      var: `--color-wl-${n}`,
      hex: { 50:'#fbf3ec',100:'#f4e3cf',200:'#e8cba8',300:'#d4a96c',400:'#c88c38',500:'#be7418',600:'#b86010',700:'#9e4010',800:'#86280a',900:'#6a1c0c',950:'#2c0a06' }[n],
    })),
  },
  {
    label: 'Boston Blue',
    colors: [50,100,200,300,400,500,600,700,800,900,950].map(n => ({
      name: `Boston ${n}`,
      var: `--color-boston-${n}`,
      hex: { 50:'#ebfeff',100:'#cdfaff',200:'#a1f5ff',300:'#60ebff',400:'#18d9f8',500:'#00bcde',600:'#008aad',700:'#087696',800:'#10607a',900:'#124f67',950:'#053447' }[n],
    })),
  },
  {
    label: 'Green',
    colors: [50,100,200,300,400,500,600,700,800,900,950].map(n => ({
      name: `Green ${n}`,
      var: `--color-green-${n}`,
      hex: { 50:'#f0f9f3',100:'#d9f2e1',200:'#b7e3c7',300:'#87cea5',400:'#4faf7b',500:'#339664',600:'#23784f',700:'#1c6041',800:'#184d35',900:'#153f2c',950:'#0b2319' }[n],
    })),
  },
  {
    label: 'Red',
    colors: [50,100,200,300,400,500,600,700,800,900,950].map(n => ({
      name: `Red ${n}`,
      var: `--color-red-${n}`,
      hex: { 50:'#fcf4f4',100:'#fae6e6',200:'#f6d2d2',300:'#efb2b2',400:'#e48585',500:'#d45a5a',600:'#c04242',700:'#a13434',800:'#862e2e',900:'#702c2c',950:'#3c1313' }[n],
    })),
  },
  {
    label: 'Blue',
    colors: [50,100,200,300,400,500,600,700,800,900,950].map(n => ({
      name: `Blue ${n}`,
      var: `--color-blue-${n}`,
      hex: { 50:'#eaf2ff',100:'#c5dbff',200:'#9dc3ff',300:'#6fa6ff',400:'#4a8eff',500:'#2378ff',600:'#1a5ed4',700:'#1246aa',800:'#0b3080',900:'#051c55',950:'#000f2e' }[n],
    })),
  },
  {
    label: 'Amber',
    colors: [50,100,200,300,400,500,600,700,800,900,950].map(n => ({
      name: `Amber ${n}`,
      var: `--color-amber-${n}`,
      hex: { 50:'#fbf3ec',100:'#f4e3cf',200:'#e8cba8',300:'#d4a96c',400:'#c88c38',500:'#be7418',600:'#b86010',700:'#9e4010',800:'#86280a',900:'#6a1c0c',950:'#2c0a06' }[n],
    })),
  },
  {
    label: 'Alias — Text',
    colors: [
      { name: 'Primary',    var: '--color-text-primary',    hex: '#1e4060' },
      { name: 'Secondary',  var: '--color-text-secondary',  hex: '#3a6b94' },
      { name: 'Brand',      var: '--color-text-brand',      hex: '#3a6b94' },
      { name: 'Tertiary',   var: '--color-text-tertiary',   hex: '#e8cba8' },
      { name: 'Quartenary', var: '--color-text-quartenary', hex: '#fbf3ec' },
    ],
  },
  {
    label: 'Alias — Background',
    colors: [
      { name: 'Brand',     var: '--color-bg-brand',     hex: '#3a6b94' },
      { name: 'Primary',   var: '--color-bg-primary',   hex: '#fbf3ec' },
      { name: 'Secondary', var: '--color-bg-secondary', hex: '#f4e3cf' },
      { name: 'Tertiary',  var: '--color-bg-tertiary',  hex: '#e8cba8' },
      { name: 'Sidebar',   var: '--color-bg-sidebar',   hex: '#122e4a' },
    ],
  },
  {
    label: 'System — Success',
    colors: [
      { name: 'Lightest', var: '--color-success-lightest', hex: '#d9f2e1' },
      { name: 'Light',    var: '--color-success-light',    hex: '#87cea5' },
      { name: 'Medium',   var: '--color-success-medium',   hex: '#339664' },
      { name: 'Dark',     var: '--color-success-dark',     hex: '#1c6041' },
    ],
  },
  {
    label: 'System — Error',
    colors: [
      { name: 'Lightest', var: '--color-error-lightest', hex: '#fae6e6' },
      { name: 'Light',    var: '--color-error-light',    hex: '#efb2b2' },
      { name: 'Medium',   var: '--color-error-medium',   hex: '#d45a5a' },
      { name: 'Dark',     var: '--color-error-dark',     hex: '#a13434' },
    ],
  },
  {
    label: 'System — Warning',
    colors: [
      { name: 'Lightest', var: '--color-warning-lightest', hex: '#e8cba8' },
      { name: 'Light',    var: '--color-warning-light',    hex: '#d4a96c' },
      { name: 'Medium',   var: '--color-warning-medium',   hex: '#c88c38' },
      { name: 'Dark',     var: '--color-warning-dark',     hex: '#be7418' },
    ],
  },
  {
    label: 'System — Info',
    colors: [
      { name: 'Lightest', var: '--color-info-lightest', hex: '#c5dbff' },
      { name: 'Light',    var: '--color-info-light',    hex: '#6fa6ff' },
      { name: 'Medium',   var: '--color-info-medium',   hex: '#2378ff' },
      { name: 'Dark',     var: '--color-info-dark',     hex: '#1246aa' },
    ],
  },
];

const typographyRows = [
  { name: 'Heading 1 XL', size: 128, weight: 700, lh: '100%', sample: 'Aa' },
  { name: 'Heading 1 L',  size: 96,  weight: 700, lh: '100%', sample: 'Aa' },
  { name: 'Heading 1 M',  size: 72,  weight: 700, lh: '100%', sample: 'Aa' },
  { name: 'Heading 2',    size: 56,  weight: 700, lh: '100%', sample: 'Aa' },
  { name: 'Heading 3',    size: 48,  weight: 700, lh: '100%', sample: 'Aa' },
  { name: 'Heading 4',    size: 40,  weight: 700, lh: '100%', sample: 'Aa' },
  { name: 'Heading 5',    size: 32,  weight: 700, lh: '100%', sample: 'Aa' },
  { name: 'Heading 6',    size: 24,  weight: 700, lh: '100%', sample: 'Aa' },
  { name: 'Subtitle XL',  size: 20,  weight: 500, lh: '100%', sample: 'Aa' },
  { name: 'Subtitle L',   size: 18,  weight: 500, lh: '100%', sample: 'Aa' },
  { name: 'Subtitle M',   size: 16,  weight: 500, lh: '100%', sample: 'Aa' },
  { name: 'Subtitle S',   size: 14,  weight: 500, lh: '100%', sample: 'Aa' },
  { name: 'Body XXXL',    size: 32,  weight: 400, lh: '100%', sample: 'The quick brown fox' },
  { name: 'Body XXL',     size: 24,  weight: 400, lh: '100%', sample: 'The quick brown fox' },
  { name: 'Body XL',      size: 20,  weight: 400, lh: '100%', sample: 'The quick brown fox' },
  { name: 'Body L',       size: 18,  weight: 400, lh: '150%', sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Body M',       size: 16,  weight: 400, lh: '130%', sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Body S',       size: 14,  weight: 400, lh: '100%', sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Body XS',      size: 12,  weight: 400, lh: '100%', sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Body XXS',     size: 10,  weight: 400, lh: '100%', sample: 'The quick brown fox jumps over the lazy dog' },
  { name: 'Caption M',    size: 18,  weight: 700, lh: '100%', sample: 'LABEL TEXT', ls: '3px' },
  { name: 'Caption S',    size: 14,  weight: 700, lh: '100%', sample: 'LABEL TEXT', ls: '2px' },
  { name: 'Button XL',    size: 22,  weight: 600, lh: '100%', sample: 'Button Label' },
  { name: 'Button L',     size: 18,  weight: 600, lh: '100%', sample: 'Button Label' },
  { name: 'Button M',     size: 14,  weight: 600, lh: '100%', sample: 'Button Label' },
  { name: 'Button S',     size: 12,  weight: 600, lh: '100%', sample: 'Button Label' },
];

const spacingTokens = [0,4,8,12,16,20,24,32,40,48,64,80,96,128];
const radiusTokens = [
  { name: 'none', value: '0px' },
  { name: 'xs',   value: '2px' },
  { name: 'sm',   value: '4px' },
  { name: 'md',   value: '8px' },
  { name: 'lg',   value: '12px' },
  { name: 'xl',   value: '16px' },
  { name: '2xl',  value: '24px' },
  { name: 'full', value: '9999px' },
];

function isDark(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return (r*299 + g*587 + b*114) / 1000 < 128;
}

export default function FoundationsSection() {
  return (
    <div className="foundations">

      {/* COLORS */}
      <section className="ds-section">
        <h2 className="ds-section-title">Colors</h2>
        {colorGroups.map(group => (
          <div key={group.label} className="color-group">
            <h3 className="color-group-label">{group.label}</h3>
            <div className="color-swatches">
              {group.colors.map(c => (
                <div key={c.var} className="color-swatch">
                  <div
                    className="swatch-block"
                    style={{ background: c.hex }}
                  >
                    <span className={`swatch-hex ${isDark(c.hex) ? 'light' : 'dark'}`}>
                      {c.hex}
                    </span>
                  </div>
                  <span className="swatch-name">{c.name}</span>
                  <span className="swatch-var">{c.var}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* TYPOGRAPHY */}
      <section className="ds-section">
        <h2 className="ds-section-title">Typography</h2>
        <p className="ds-section-sub">Font family: <strong>Montserrat</strong> (body &amp; heading)</p>
        <div className="type-table">
          {typographyRows.map(row => (
            <div key={row.name} className="type-row">
              <div className="type-meta">
                <span className="type-name">{row.name}</span>
                <span className="type-specs">{row.size}px · {row.weight} · lh {row.lh}{row.ls ? ` · ls ${row.ls}` : ''}</span>
              </div>
              <div
                className="type-sample"
                style={{
                  fontSize: row.size,
                  fontWeight: row.weight,
                  lineHeight: row.lh,
                  letterSpacing: row.ls || 0,
                }}
              >
                {row.sample}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SPACING */}
      <section className="ds-section">
        <h2 className="ds-section-title">Spacing</h2>
        <div className="spacing-list">
          {spacingTokens.map(n => (
            <div key={n} className="spacing-row">
              <span className="spacing-label">--space-{n} · {n}px</span>
              <div className="spacing-bar" style={{ width: Math.min(n * 1.5, 300), height: 8, background: 'var(--color-brand-03-navy-500)', borderRadius: 4 }} />
            </div>
          ))}
        </div>
      </section>

      {/* BORDER RADIUS */}
      <section className="ds-section">
        <h2 className="ds-section-title">Border Radius</h2>
        <div className="radius-list">
          {radiusTokens.map(r => (
            <div key={r.name} className="radius-item">
              <div
                className="radius-block"
                style={{ borderRadius: r.value === '9999px' ? '9999px' : r.value }}
              />
              <span className="radius-label">--radius-{r.name}</span>
              <span className="radius-value">{r.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BORDER WIDTH */}
      <section className="ds-section">
        <h2 className="ds-section-title">Border Width</h2>
        <div className="border-list">
          {[{name:'thin',v:'1px'},{name:'medium',v:'2px'},{name:'thick',v:'4px'}].map(b => (
            <div key={b.name} className="border-item">
              <div className="border-sample" style={{ border: `${b.v} solid var(--color-brand-01-navy)` }} />
              <span className="border-label">--border-{b.name} · {b.v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="ds-section">
        <h2 className="ds-section-title">Grid — Desktop</h2>
        <p className="ds-section-sub">Frame base: <strong>1440 × 813px</strong> — sidebar fixa + 8 colunas de conteúdo</p>

        {/* Sidebar expandida */}
        <p className="grid-state-label">Sidebar expandida (272px)</p>
        <div className="grid-demo">
          <div className="grid-demo__sidebar">
            <div className="grid-demo__col grid-demo__col--sidebar" style={{ width: 272 }}>
              <span className="grid-demo__label">Sidebar<br/>272px</span>
            </div>
          </div>
          <div className="grid-demo__content">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="grid-demo__col grid-demo__col--content">
                <span className="grid-demo__label">126px</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar minimizada */}
        <p className="grid-state-label">Sidebar minimizada (64px)</p>
        <div className="grid-demo">
          <div className="grid-demo__sidebar">
            <div className="grid-demo__col grid-demo__col--sidebar" style={{ width: 64 }}>
              <span className="grid-demo__label">64px</span>
            </div>
          </div>
          <div className="grid-demo__content">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="grid-demo__col grid-demo__col--content">
                <span className="grid-demo__label">152px</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specs */}
        <div className="grid-specs">
          <div className="grid-spec-group">
            <span className="grid-spec-title">Sidebar</span>
            <span className="grid-spec-row">Expandida: <strong>272px</strong></span>
            <span className="grid-spec-row">Minimizada: <strong>64px</strong></span>
            <span className="grid-spec-row">Offset: <strong>16px</strong></span>
            <span className="grid-spec-row">Gutter: <strong>24px</strong></span>
          </div>
          <div className="grid-spec-group">
            <span className="grid-spec-title">Conteúdo</span>
            <span className="grid-spec-row">Colunas: <strong>8</strong></span>
            <span className="grid-spec-row">Coluna (expandida): <strong>126px</strong></span>
            <span className="grid-spec-row">Coluna (minimizada): <strong>152px</strong></span>
            <span className="grid-spec-row">Gutter: <strong>16px</strong> | Offset: <strong>16px</strong></span>
          </div>
          <div className="grid-spec-group">
            <span className="grid-spec-title">CSS</span>
            <code className="grid-spec-code">{`grid-template-columns: 272px 1fr`}</code>
            <code className="grid-spec-code">{`grid-template-columns: 64px 1fr  /* colapsada */`}</code>
            <code className="grid-spec-code">{`gap: 16px | padding: 16px`}</code>
          </div>
        </div>
      </section>

    </div>
  );
}
