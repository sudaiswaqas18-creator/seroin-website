import React, { useState } from 'react';

const CHIPS = [
  { id: 1, label: '🎯 Amazon Listings', price: 499 },
  { id: 2, label: '📐 A+ Brand Content', price: 699 },
  { id: 3, label: '🏪 Brand Store Design', price: 599 },
  { id: 4, label: '🎨 Brand Identity & Logo', price: 899 },
  { id: 5, label: '📱 Social Media Graphics', price: 399 },
  { id: 6, label: '📦 Packaging & Labels', price: 499 },
  { id: 7, label: '🎬 Motion & Video Editing', price: 599 },
  { id: 8, label: '📊 Presentations & Pitch Decks', price: 349 },
  { id: 9, label: '🖨️ Print & Editorial', price: 299 },
];

export default function QuoteCalculator() {
  const [selected, setSelected] = useState(new Set());

  const toggleChip = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const total = Array.from(selected).reduce((acc, id) => {
    const item = CHIPS.find((c) => c.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  return (
    <section className="quote-sec" id="ai-quote">
      <div className="c">
        <div className="quote-box">
          <span className="sec-subtitle">INSTANT ESTIMATE</span>
          <h2 className="sec-title">Get an instant AI quote</h2>
          <p className="sec-desc" style={{ margin: '0 auto' }}>
            Select the creative services you need — calculate your estimated monthly rate in real-time.
          </p>

          <div className="quote-grid" id="qGrid">
            {CHIPS.map((chip) => {
              const isSel = selected.has(chip.id);
              return (
                <div
                  key={chip.id}
                  className={`quote-chip ${isSel ? 'selected' : ''}`}
                  data-price={chip.price}
                  onClick={() => toggleChip(chip.id)}
                >
                  {chip.label}
                </div>
              );
            })}
          </div>

          <div className={`quote-result ${total > 0 ? 'show' : ''}`} id="qResult">
            <div style={{ fontSize: '0.8125rem', color: 'var(--primary-color)', fontWeight: 700, textTransform: 'uppercase' }}>
              ⚡ AI-Calculated Monthly Estimate
            </div>
            <div className="quote-price-val" id="qDisplayVal">
              ${total}<span>/mo</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Includes unlimited requests • Dedicated designer • 24hr first-draft speed
            </p>
            <a href="#pricing" className="btn btn-primary">Lock in this pricing →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
