import { useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import './PaginationSection.css';

export default function PaginationSection() {
  const [pageLight, setPageLight] = useState(1);
  const [pageDark,  setPageDark]  = useState(1);

  return (
    <div className="pagination-section">

      {/* ── Light interativa ─────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Pagination — Light</h2>
        <p className="ds-section-sub">Página atual: <strong>{pageLight}</strong> de 12</p>

        <div className="pgn-demo">
          <Pagination
            totalPages={12}
            current={pageLight}
            onChange={setPageLight}
            theme="light"
          />
        </div>
      </section>

      {/* ── Dark interativa ──────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Pagination — Dark</h2>
        <p className="ds-section-sub">Página atual: <strong>{pageDark}</strong> de 12</p>

        <div className="pgn-demo pgn-demo--dark">
          <Pagination
            totalPages={12}
            current={pageDark}
            onChange={setPageDark}
            theme="dark"
          />
        </div>
      </section>

      {/* ── Estados fixos ────────────────────────────────────── */}
      <section className="ds-section">
        <h2 className="ds-section-title">Variações de página ativa</h2>
        <p className="ds-section-sub">Comportamento do ellipsis conforme a página selecionada</p>

        <div className="pgn-states">
          {[1, 3, 6, 10, 12].map(p => (
            <div key={p} className="pgn-state-row">
              <span className="pgn-state-label">Página {p}</span>
              <Pagination totalPages={12} current={p} theme="light" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
