import { Search } from '../../components/Icon/icons';
import IconButton from '../../components/IconButton/IconButton';
import './IconButtonSection.css';

const states = ['Default', 'Hover', 'Pressed', 'Disabled', 'Focus'];

function StateLabel({ label }) {
  return <span className="state-label">{label}</span>;
}

function IconBtnRow({ label, buttons }) {
  return (
    <div className="btn-row">
      <span className="btn-row-label">{label}</span>
      <div className="btn-row-items">{buttons}</div>
    </div>
  );
}

export default function IconButtonSection() {
  return (
    <div className="icon-button-section">

      {/* ICON BUTTON M — LIGHT */}
      <section className="ds-section">
        <h2 className="ds-section-title">Icon Button M — Light</h2>

        <div className="state-header">
          {states.map(s => <StateLabel key={s} label={s} />)}
        </div>

        {/* FILL */}
        <IconBtnRow label="Fill" buttons={<>
          <IconButton variant="fill" colorScheme="light" icon={<Search />} />
          <IconButton variant="fill" colorScheme="light" icon={<Search />} className="icon-btn--hover-fill-light" />
          <IconButton variant="fill" colorScheme="light" icon={<Search />} className="icon-btn--pressed" />
          <IconButton variant="fill" colorScheme="light" icon={<Search />} disabled />
          <IconButton variant="fill" colorScheme="light" icon={<Search />} className="icon-btn--focus-fill-light" />
        </>} />

        {/* OUTLINE */}
        <IconBtnRow label="Outline" buttons={<>
          <IconButton variant="outline" colorScheme="light" icon={<Search />} />
          <IconButton variant="outline" colorScheme="light" icon={<Search />} className="icon-btn--hover-outline-light" />
          <IconButton variant="outline" colorScheme="light" icon={<Search />} className="icon-btn--pressed" />
          <IconButton variant="outline" colorScheme="light" icon={<Search />} disabled />
          <IconButton variant="outline" colorScheme="light" icon={<Search />} className="icon-btn--focus-outline-light" />
        </>} />

        {/* ICON ONLY */}
        <IconBtnRow label="Icon only" buttons={<>
          <IconButton variant="icon-only" colorScheme="light" icon={<Search />} />
          <IconButton variant="icon-only" colorScheme="light" icon={<Search />} className="icon-btn--hover-icon-only-light" />
          <IconButton variant="icon-only" colorScheme="light" icon={<Search />} className="icon-btn--pressed" />
          <IconButton variant="icon-only" colorScheme="light" icon={<Search />} disabled />
          <IconButton variant="icon-only" colorScheme="light" icon={<Search />} className="icon-btn--focus-icon-only-light" />
        </>} />

        {/* CIRCLE */}
        <IconBtnRow label="Circle" buttons={<>
          <IconButton variant="circle" colorScheme="light" icon={<Search />} />
          <IconButton variant="circle" colorScheme="light" icon={<Search />} className="icon-btn--hover-circle-light" />
          <IconButton variant="circle" colorScheme="light" icon={<Search />} className="icon-btn--pressed" />
          <IconButton variant="circle" colorScheme="light" icon={<Search />} disabled />
          <IconButton variant="circle" colorScheme="light" icon={<Search />} className="icon-btn--focus-circle-light" />
        </>} />

        {/* CIRCLE W/ NOTIFICATION */}
        <IconBtnRow label="Circle w/ notif" buttons={<>
          <IconButton variant="circle-notification" colorScheme="light" icon={<Search />} />
          <IconButton variant="circle-notification" colorScheme="light" icon={<Search />} className="icon-btn--hover-circle-light" />
          <IconButton variant="circle-notification" colorScheme="light" icon={<Search />} className="icon-btn--pressed" />
          <IconButton variant="circle-notification" colorScheme="light" icon={<Search />} disabled />
          <IconButton variant="circle-notification" colorScheme="light" icon={<Search />} className="icon-btn--focus-circle-light" />
        </>} />

      </section>

      {/* ICON BUTTON P — LIGHT */}
      <section className="ds-section">
        <h2 className="ds-section-title">Icon Button P — Light</h2>

        <div className="state-header">
          {states.map(s => <StateLabel key={s} label={s} />)}
        </div>

        {/* FILL */}
        <IconBtnRow label="Fill" buttons={<>
          <IconButton variant="fill" size="p" colorScheme="light" icon={<Search />} />
          <IconButton variant="fill" size="p" colorScheme="light" icon={<Search />} className="icon-btn--hover-fill-light" />
          <IconButton variant="fill" size="p" colorScheme="light" icon={<Search />} className="icon-btn--pressed" />
          <IconButton variant="fill" size="p" colorScheme="light" icon={<Search />} disabled />
          <IconButton variant="fill" size="p" colorScheme="light" icon={<Search />} className="icon-btn--focus-fill-light" />
        </>} />

        {/* OUTLINE */}
        <IconBtnRow label="Outline" buttons={<>
          <IconButton variant="outline" size="p" colorScheme="light" icon={<Search />} />
          <IconButton variant="outline" size="p" colorScheme="light" icon={<Search />} className="icon-btn--hover-outline-light" />
          <IconButton variant="outline" size="p" colorScheme="light" icon={<Search />} className="icon-btn--pressed" />
          <IconButton variant="outline" size="p" colorScheme="light" icon={<Search />} disabled />
          <IconButton variant="outline" size="p" colorScheme="light" icon={<Search />} className="icon-btn--focus-outline-light" />
        </>} />

        {/* ICON ONLY */}
        <IconBtnRow label="Icon only" buttons={<>
          <IconButton variant="icon-only" size="p" colorScheme="light" icon={<Search />} />
          <IconButton variant="icon-only" size="p" colorScheme="light" icon={<Search />} className="icon-btn--hover-icon-only-light" />
          <IconButton variant="icon-only" size="p" colorScheme="light" icon={<Search />} className="icon-btn--pressed" />
          <IconButton variant="icon-only" size="p" colorScheme="light" icon={<Search />} disabled />
          <IconButton variant="icon-only" size="p" colorScheme="light" icon={<Search />} className="icon-btn--focus-icon-only-light" />
        </>} />

        {/* CIRCLE */}
        <IconBtnRow label="Circle" buttons={<>
          <IconButton variant="circle" size="p" colorScheme="light" icon={<Search />} />
          <IconButton variant="circle" size="p" colorScheme="light" icon={<Search />} className="icon-btn--hover-circle-light" />
          <IconButton variant="circle" size="p" colorScheme="light" icon={<Search />} className="icon-btn--pressed" />
          <IconButton variant="circle" size="p" colorScheme="light" icon={<Search />} disabled />
          <IconButton variant="circle" size="p" colorScheme="light" icon={<Search />} className="icon-btn--focus-circle-light" />
        </>} />

        {/* CIRCLE W/ NOTIFICATION */}
        <IconBtnRow label="Circle w/ notif" buttons={<>
          <IconButton variant="circle-notification" size="p" colorScheme="light" icon={<Search />} />
          <IconButton variant="circle-notification" size="p" colorScheme="light" icon={<Search />} className="icon-btn--hover-circle-light" />
          <IconButton variant="circle-notification" size="p" colorScheme="light" icon={<Search />} className="icon-btn--pressed" />
          <IconButton variant="circle-notification" size="p" colorScheme="light" icon={<Search />} disabled />
          <IconButton variant="circle-notification" size="p" colorScheme="light" icon={<Search />} className="icon-btn--focus-circle-light" />
        </>} />

      </section>
    </div>
  );
}
