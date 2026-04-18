import './DesignSystemPage.css';
import FoundationsSection from './sections/FoundationsSection';
import ButtonSection from './sections/ButtonSection';
import IconsSection from './sections/IconsSection';
import IconButtonSection from './sections/IconButtonSection';
import NotificationBadgeSection from './sections/NotificationBadgeSection';
import FeedbackSection from './sections/FeedbackSection';
import ToggleSection from './sections/ToggleSection';
import RadioSection from './sections/RadioSection';
import CheckboxSection from './sections/CheckboxSection';
import InputTextSection from './sections/InputTextSection';

const sections = [
  { id: 'foundations', label: 'Foundations' },
  { id: 'buttons', label: 'Buttons' },
  { id: 'notification-badge', label: 'Notification Badge' },
  { id: 'icon-buttons', label: 'Icon Buttons' },
  { id: 'feedback', label: 'Feedback' },
  { id: 'toggle', label: 'Toggle Switch' },
  { id: 'radio', label: 'Radio Button' },
  { id: 'checkbox', label: 'Checkbox' },
  { id: 'input-text', label: 'Input Text' },
  { id: 'icons', label: 'Icons' },
];

export default function DesignSystemPage() {
  return (
    <div className="ds-page">
      <aside className="ds-sidebar">
        <div className="ds-sidebar-header">
          <span className="ds-sidebar-title">Design System</span>
          <span className="ds-sidebar-sub">Netcred</span>
        </div>
        <nav className="ds-nav">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`} className="ds-nav-item">{s.label}</a>
          ))}
        </nav>
      </aside>
      <main className="ds-main">
        <section id="foundations">
          <FoundationsSection />
        </section>
        <section id="buttons">
          <ButtonSection />
        </section>
        <section id="notification-badge">
          <NotificationBadgeSection />
        </section>
        <section id="icon-buttons">
          <IconButtonSection />
        </section>
        <section id="feedback">
          <FeedbackSection />
        </section>
        <section id="toggle">
          <ToggleSection />
        </section>
        <section id="radio">
          <RadioSection />
        </section>
        <section id="checkbox">
          <CheckboxSection />
        </section>
        <section id="input-text">
          <InputTextSection />
        </section>
        <section id="icons">
          <IconsSection />
        </section>
      </main>
    </div>
  );
}
