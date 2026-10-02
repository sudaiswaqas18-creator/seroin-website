import React from 'react';

export default function Achievements() {
  return (
<section className="achieve-sec">
    <div className="c">
        <div className="achieve-header">
            <span className="sec-subtitle orange">THE RETURN YOU WANT</span>
            <h2 className="sec-title dark">WHAT OUR CLIENTS ACHIEVE</h2>
            <p className="sec-desc dark">Every metric reflects a client advancing their brand with our partnership. Here's what they've accomplished.</p>
        </div>

        {/* 2x2 Electric Blue Big Stats */}
        <div className="achieve-stats-grid">
            <div className="achieve-stat-item">
                <div className="achieve-stat-number">$100K</div>
                <div className="achieve-stat-desc">Customer-reported average annual savings on design services after switching to our dedicated platform.</div>
            </div>

            <div className="achieve-stat-item">
                <div className="achieve-stat-number">2X</div>
                <div className="achieve-stat-desc">Faster than the average traditional agency. Customers receive first drafts in 24 hours, while most take 2–3 days.</div>
            </div>

            <div className="achieve-stat-item">
                <div className="achieve-stat-number">3X</div>
                <div className="achieve-stat-desc">On average, customers triple their monthly creative production with a reliable subscription model.</div>
            </div>

            <div className="achieve-stat-item">
                <div className="achieve-stat-number">94%</div>
                <div className="achieve-stat-desc">Customers choose us as their primary creative solution for more than 18 months on average.</div>
            </div>
        </div>

        {/* 3 Visual Showcase Cards */}
        <div className="achieve-cards-grid">
            <div className="achieve-visual-card">
                <img src="/images/achieve_keyboard.png" alt="Keyboard design creative" />
                <div className="achieve-visual-overlay">
                    <div className="achieve-visual-num">3M+</div>
                    <div className="achieve-visual-text">Designs created for our global customers</div>
                </div>
            </div>

            <div className="achieve-visual-card">
                <img src="/images/achieve_creatives.png" alt="Creatives and art directors" />
                <div className="achieve-visual-overlay">
                    <div className="achieve-visual-num">320+</div>
                    <div className="achieve-visual-text">Vetted creatives and experienced art directors</div>
                </div>
            </div>

            <div className="achieve-visual-card">
                <img src="/images/achieve_satisfaction.png" alt="Customer satisfaction" />
                <div className="achieve-visual-overlay blue-bg">
                    <div className="achieve-visual-num">4.8/5 ★</div>
                    <div className="achieve-visual-text">Customer satisfaction rate (and continuously counting)</div>
                </div>
            </div>
        </div>
    </div>
</section>

  );
}
