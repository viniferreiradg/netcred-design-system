import { Search, ChevronDown } from '../../components/Icon/icons';
import Button from '../../components/Button/Button';
import './ButtonSection.css';

const states = ['Default', 'Hover', 'Pressed', 'Disabled', 'Focus'];

function StateLabel({ label }) {
  return <span className="state-label">{label}</span>;
}

function ButtonRow({ label, buttons }) {
  return (
    <div className="btn-row">
      <span className="btn-row-label">{label}</span>
      <div className="btn-row-items">{buttons}</div>
    </div>
  );
}

export default function ButtonSection() {
  return (
    <div className="button-section">

      {/* PRIMARY — LIGHT */}
      <section className="ds-section">
        <h2 className="ds-section-title">Button — Primary (Light)</h2>

        <div className="state-header">
          {states.map(s => <StateLabel key={s} label={s} />)}
        </div>

        <ButtonRow label="M · No icon" buttons={<>
          <Button variant="primary" size="m" colorScheme="light">Label</Button>
          <Button variant="primary" size="m" colorScheme="light" className="btn--hover-demo">Label</Button>
          <Button variant="primary" size="m" colorScheme="light" className="btn--pressed">Label</Button>
          <Button variant="primary" size="m" colorScheme="light" disabled>Label</Button>
          <Button variant="primary" size="m" colorScheme="light" className="btn--focus-demo">Label</Button>
        </>} />

        <ButtonRow label="M · Icon left" buttons={<>
          <Button variant="primary" size="m" colorScheme="light" iconLeft={<Search />}>Label</Button>
          <Button variant="primary" size="m" colorScheme="light" iconLeft={<Search />} className="btn--hover-demo">Label</Button>
          <Button variant="primary" size="m" colorScheme="light" iconLeft={<Search />} className="btn--pressed">Label</Button>
          <Button variant="primary" size="m" colorScheme="light" iconLeft={<Search />} disabled>Label</Button>
          <Button variant="primary" size="m" colorScheme="light" iconLeft={<Search />} className="btn--focus-demo">Label</Button>
        </>} />

        <ButtonRow label="M · Icon right" buttons={<>
          <Button variant="primary" size="m" colorScheme="light" iconRight={<ChevronDown />}>Label</Button>
          <Button variant="primary" size="m" colorScheme="light" iconRight={<ChevronDown />} className="btn--hover-demo">Label</Button>
          <Button variant="primary" size="m" colorScheme="light" iconRight={<ChevronDown />} className="btn--pressed">Label</Button>
          <Button variant="primary" size="m" colorScheme="light" iconRight={<ChevronDown />} disabled>Label</Button>
          <Button variant="primary" size="m" colorScheme="light" iconRight={<ChevronDown />} className="btn--focus-demo">Label</Button>
        </>} />

        <ButtonRow label="P · No icon" buttons={<>
          <Button variant="primary" size="p" colorScheme="light">Label</Button>
          <Button variant="primary" size="p" colorScheme="light" className="btn--hover-demo">Label</Button>
          <Button variant="primary" size="p" colorScheme="light" className="btn--pressed">Label</Button>
          <Button variant="primary" size="p" colorScheme="light" disabled>Label</Button>
          <Button variant="primary" size="p" colorScheme="light" className="btn--focus-demo">Label</Button>
        </>} />

        <ButtonRow label="P · Icon left" buttons={<>
          <Button variant="primary" size="p" colorScheme="light" iconLeft={<Search />}>Label</Button>
          <Button variant="primary" size="p" colorScheme="light" iconLeft={<Search />} className="btn--hover-demo">Label</Button>
          <Button variant="primary" size="p" colorScheme="light" iconLeft={<Search />} className="btn--pressed">Label</Button>
          <Button variant="primary" size="p" colorScheme="light" iconLeft={<Search />} disabled>Label</Button>
          <Button variant="primary" size="p" colorScheme="light" iconLeft={<Search />} className="btn--focus-demo">Label</Button>
        </>} />

        <ButtonRow label="P · Icon right" buttons={<>
          <Button variant="primary" size="p" colorScheme="light" iconRight={<ChevronDown />}>Label</Button>
          <Button variant="primary" size="p" colorScheme="light" iconRight={<ChevronDown />} className="btn--hover-demo">Label</Button>
          <Button variant="primary" size="p" colorScheme="light" iconRight={<ChevronDown />} className="btn--pressed">Label</Button>
          <Button variant="primary" size="p" colorScheme="light" iconRight={<ChevronDown />} disabled>Label</Button>
          <Button variant="primary" size="p" colorScheme="light" iconRight={<ChevronDown />} className="btn--focus-demo">Label</Button>
        </>} />
      </section>

      {/* PRIMARY — DARK */}
      <section className="ds-section ds-section--dark">
        <h2 className="ds-section-title ds-section-title--light">Button — Primary (Dark)</h2>

        <div className="state-header">
          {states.map(s => <StateLabel key={s} label={s} />)}
        </div>

        <ButtonRow label="M · No icon" buttons={<>
          <Button variant="primary" size="m" colorScheme="dark">Label</Button>
          <Button variant="primary" size="m" colorScheme="dark" className="btn--hover-demo--dark">Label</Button>
          <Button variant="primary" size="m" colorScheme="dark" className="btn--pressed">Label</Button>
          <Button variant="primary" size="m" colorScheme="dark" disabled>Label</Button>
          <Button variant="primary" size="m" colorScheme="dark" className="btn--focus-demo--dark">Label</Button>
        </>} />

        <ButtonRow label="M · Icon left" buttons={<>
          <Button variant="primary" size="m" colorScheme="dark" iconLeft={<Search />}>Label</Button>
          <Button variant="primary" size="m" colorScheme="dark" iconLeft={<Search />} className="btn--hover-demo--dark">Label</Button>
          <Button variant="primary" size="m" colorScheme="dark" iconLeft={<Search />} className="btn--pressed">Label</Button>
          <Button variant="primary" size="m" colorScheme="dark" iconLeft={<Search />} disabled>Label</Button>
          <Button variant="primary" size="m" colorScheme="dark" iconLeft={<Search />} className="btn--focus-demo--dark">Label</Button>
        </>} />

        <ButtonRow label="M · Icon right" buttons={<>
          <Button variant="primary" size="m" colorScheme="dark" iconRight={<ChevronDown />}>Label</Button>
          <Button variant="primary" size="m" colorScheme="dark" iconRight={<ChevronDown />} className="btn--hover-demo--dark">Label</Button>
          <Button variant="primary" size="m" colorScheme="dark" iconRight={<ChevronDown />} className="btn--pressed">Label</Button>
          <Button variant="primary" size="m" colorScheme="dark" iconRight={<ChevronDown />} disabled>Label</Button>
          <Button variant="primary" size="m" colorScheme="dark" iconRight={<ChevronDown />} className="btn--focus-demo--dark">Label</Button>
        </>} />

        <ButtonRow label="P · No icon" buttons={<>
          <Button variant="primary" size="p" colorScheme="dark">Label</Button>
          <Button variant="primary" size="p" colorScheme="dark" className="btn--hover-demo--dark">Label</Button>
          <Button variant="primary" size="p" colorScheme="dark" className="btn--pressed">Label</Button>
          <Button variant="primary" size="p" colorScheme="dark" disabled>Label</Button>
          <Button variant="primary" size="p" colorScheme="dark" className="btn--focus-demo--dark">Label</Button>
        </>} />

        <ButtonRow label="P · Icon left" buttons={<>
          <Button variant="primary" size="p" colorScheme="dark" iconLeft={<Search />}>Label</Button>
          <Button variant="primary" size="p" colorScheme="dark" iconLeft={<Search />} className="btn--hover-demo--dark">Label</Button>
          <Button variant="primary" size="p" colorScheme="dark" iconLeft={<Search />} className="btn--pressed">Label</Button>
          <Button variant="primary" size="p" colorScheme="dark" iconLeft={<Search />} disabled>Label</Button>
          <Button variant="primary" size="p" colorScheme="dark" iconLeft={<Search />} className="btn--focus-demo--dark">Label</Button>
        </>} />

        <ButtonRow label="P · Icon right" buttons={<>
          <Button variant="primary" size="p" colorScheme="dark" iconRight={<ChevronDown />}>Label</Button>
          <Button variant="primary" size="p" colorScheme="dark" iconRight={<ChevronDown />} className="btn--hover-demo--dark">Label</Button>
          <Button variant="primary" size="p" colorScheme="dark" iconRight={<ChevronDown />} className="btn--pressed">Label</Button>
          <Button variant="primary" size="p" colorScheme="dark" iconRight={<ChevronDown />} disabled>Label</Button>
          <Button variant="primary" size="p" colorScheme="dark" iconRight={<ChevronDown />} className="btn--focus-demo--dark">Label</Button>
        </>} />
      </section>

      {/* SECONDARY — LIGHT */}
      <section className="ds-section">
        <h2 className="ds-section-title">Button — Secondary (Light)</h2>

        <div className="state-header">
          {states.map(s => <StateLabel key={s} label={s} />)}
        </div>

        <ButtonRow label="M · No icon" buttons={<>
          <Button variant="secondary" size="m" colorScheme="light">Label</Button>
          <Button variant="secondary" size="m" colorScheme="light" className="btn--hover-demo--sec-light">Label</Button>
          <Button variant="secondary" size="m" colorScheme="light" className="btn--pressed">Label</Button>
          <Button variant="secondary" size="m" colorScheme="light" disabled>Label</Button>
          <Button variant="secondary" size="m" colorScheme="light" className="btn--focus-demo--sec-light">Label</Button>
        </>} />

        <ButtonRow label="M · Icon left" buttons={<>
          <Button variant="secondary" size="m" colorScheme="light" iconLeft={<Search />}>Label</Button>
          <Button variant="secondary" size="m" colorScheme="light" iconLeft={<Search />} className="btn--hover-demo--sec-light">Label</Button>
          <Button variant="secondary" size="m" colorScheme="light" iconLeft={<Search />} className="btn--pressed">Label</Button>
          <Button variant="secondary" size="m" colorScheme="light" iconLeft={<Search />} disabled>Label</Button>
          <Button variant="secondary" size="m" colorScheme="light" iconLeft={<Search />} className="btn--focus-demo--sec-light">Label</Button>
        </>} />

        <ButtonRow label="M · Icon right" buttons={<>
          <Button variant="secondary" size="m" colorScheme="light" iconRight={<ChevronDown />}>Label</Button>
          <Button variant="secondary" size="m" colorScheme="light" iconRight={<ChevronDown />} className="btn--hover-demo--sec-light">Label</Button>
          <Button variant="secondary" size="m" colorScheme="light" iconRight={<ChevronDown />} className="btn--pressed">Label</Button>
          <Button variant="secondary" size="m" colorScheme="light" iconRight={<ChevronDown />} disabled>Label</Button>
          <Button variant="secondary" size="m" colorScheme="light" iconRight={<ChevronDown />} className="btn--focus-demo--sec-light">Label</Button>
        </>} />

        <ButtonRow label="P · No icon" buttons={<>
          <Button variant="secondary" size="p" colorScheme="light">Label</Button>
          <Button variant="secondary" size="p" colorScheme="light" className="btn--hover-demo--sec-light">Label</Button>
          <Button variant="secondary" size="p" colorScheme="light" className="btn--pressed">Label</Button>
          <Button variant="secondary" size="p" colorScheme="light" disabled>Label</Button>
          <Button variant="secondary" size="p" colorScheme="light" className="btn--focus-demo--sec-light">Label</Button>
        </>} />

        <ButtonRow label="P · Icon left" buttons={<>
          <Button variant="secondary" size="p" colorScheme="light" iconLeft={<Search />}>Label</Button>
          <Button variant="secondary" size="p" colorScheme="light" iconLeft={<Search />} className="btn--hover-demo--sec-light">Label</Button>
          <Button variant="secondary" size="p" colorScheme="light" iconLeft={<Search />} className="btn--pressed">Label</Button>
          <Button variant="secondary" size="p" colorScheme="light" iconLeft={<Search />} disabled>Label</Button>
          <Button variant="secondary" size="p" colorScheme="light" iconLeft={<Search />} className="btn--focus-demo--sec-light">Label</Button>
        </>} />

        <ButtonRow label="P · Icon right" buttons={<>
          <Button variant="secondary" size="p" colorScheme="light" iconRight={<ChevronDown />}>Label</Button>
          <Button variant="secondary" size="p" colorScheme="light" iconRight={<ChevronDown />} className="btn--hover-demo--sec-light">Label</Button>
          <Button variant="secondary" size="p" colorScheme="light" iconRight={<ChevronDown />} className="btn--pressed">Label</Button>
          <Button variant="secondary" size="p" colorScheme="light" iconRight={<ChevronDown />} disabled>Label</Button>
          <Button variant="secondary" size="p" colorScheme="light" iconRight={<ChevronDown />} className="btn--focus-demo--sec-light">Label</Button>
        </>} />
      </section>

      {/* SECONDARY — DARK */}
      <section className="ds-section ds-section--dark">
        <h2 className="ds-section-title ds-section-title--light">Button — Secondary (Dark)</h2>

        <div className="state-header">
          {states.map(s => <StateLabel key={s} label={s} />)}
        </div>

        <ButtonRow label="M · No icon" buttons={<>
          <Button variant="secondary" size="m" colorScheme="dark">Label</Button>
          <Button variant="secondary" size="m" colorScheme="dark" className="btn--hover-demo--sec-dark">Label</Button>
          <Button variant="secondary" size="m" colorScheme="dark" className="btn--pressed">Label</Button>
          <Button variant="secondary" size="m" colorScheme="dark" disabled>Label</Button>
          <Button variant="secondary" size="m" colorScheme="dark" className="btn--focus-demo--sec-dark">Label</Button>
        </>} />

        <ButtonRow label="M · Icon left" buttons={<>
          <Button variant="secondary" size="m" colorScheme="dark" iconLeft={<Search />}>Label</Button>
          <Button variant="secondary" size="m" colorScheme="dark" iconLeft={<Search />} className="btn--hover-demo--sec-dark">Label</Button>
          <Button variant="secondary" size="m" colorScheme="dark" iconLeft={<Search />} className="btn--pressed">Label</Button>
          <Button variant="secondary" size="m" colorScheme="dark" iconLeft={<Search />} disabled>Label</Button>
          <Button variant="secondary" size="m" colorScheme="dark" iconLeft={<Search />} className="btn--focus-demo--sec-dark">Label</Button>
        </>} />

        <ButtonRow label="M · Icon right" buttons={<>
          <Button variant="secondary" size="m" colorScheme="dark" iconRight={<ChevronDown />}>Label</Button>
          <Button variant="secondary" size="m" colorScheme="dark" iconRight={<ChevronDown />} className="btn--hover-demo--sec-dark">Label</Button>
          <Button variant="secondary" size="m" colorScheme="dark" iconRight={<ChevronDown />} className="btn--pressed">Label</Button>
          <Button variant="secondary" size="m" colorScheme="dark" iconRight={<ChevronDown />} disabled>Label</Button>
          <Button variant="secondary" size="m" colorScheme="dark" iconRight={<ChevronDown />} className="btn--focus-demo--sec-dark">Label</Button>
        </>} />

        <ButtonRow label="P · No icon" buttons={<>
          <Button variant="secondary" size="p" colorScheme="dark">Label</Button>
          <Button variant="secondary" size="p" colorScheme="dark" className="btn--hover-demo--sec-dark">Label</Button>
          <Button variant="secondary" size="p" colorScheme="dark" className="btn--pressed">Label</Button>
          <Button variant="secondary" size="p" colorScheme="dark" disabled>Label</Button>
          <Button variant="secondary" size="p" colorScheme="dark" className="btn--focus-demo--sec-dark">Label</Button>
        </>} />

        <ButtonRow label="P · Icon left" buttons={<>
          <Button variant="secondary" size="p" colorScheme="dark" iconLeft={<Search />}>Label</Button>
          <Button variant="secondary" size="p" colorScheme="dark" iconLeft={<Search />} className="btn--hover-demo--sec-dark">Label</Button>
          <Button variant="secondary" size="p" colorScheme="dark" iconLeft={<Search />} className="btn--pressed">Label</Button>
          <Button variant="secondary" size="p" colorScheme="dark" iconLeft={<Search />} disabled>Label</Button>
          <Button variant="secondary" size="p" colorScheme="dark" iconLeft={<Search />} className="btn--focus-demo--sec-dark">Label</Button>
        </>} />

        <ButtonRow label="P · Icon right" buttons={<>
          <Button variant="secondary" size="p" colorScheme="dark" iconRight={<ChevronDown />}>Label</Button>
          <Button variant="secondary" size="p" colorScheme="dark" iconRight={<ChevronDown />} className="btn--hover-demo--sec-dark">Label</Button>
          <Button variant="secondary" size="p" colorScheme="dark" iconRight={<ChevronDown />} className="btn--pressed">Label</Button>
          <Button variant="secondary" size="p" colorScheme="dark" iconRight={<ChevronDown />} disabled>Label</Button>
          <Button variant="secondary" size="p" colorScheme="dark" iconRight={<ChevronDown />} className="btn--focus-demo--sec-dark">Label</Button>
        </>} />
      </section>

      {/* INTERACTIVE NOTE */}
      <section className="ds-section">
        <h2 className="ds-section-title">Interactive — passe o mouse</h2>
        <div className="btn-interactive">
          <Button variant="primary" size="m" colorScheme="light">Primary M Light</Button>
          <Button variant="primary" size="p" colorScheme="light">Primary P Light</Button>
          <Button variant="secondary" size="m" colorScheme="light">Secondary M Light</Button>
          <Button variant="secondary" size="p" colorScheme="light">Secondary P Light</Button>
          <Button variant="primary" size="m" colorScheme="light" iconLeft={<Search />}>Com ícone</Button>
          <Button variant="secondary" size="m" colorScheme="light" iconRight={<ChevronDown />}>Com ícone</Button>
        </div>
      </section>

    </div>
  );
}
