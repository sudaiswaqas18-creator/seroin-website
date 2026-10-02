import React from 'react';

export default function WhyUs() {
  return (
<section className="why-sec" id="why">
    <div className="c">
        <div className="why-header">
            <div>
                <span className="sec-subtitle orange">BUILT FOR YOU</span>
                <h2 className="sec-title dark">WHY US?</h2>
            </div>
            <a href="#pricing" className="btn btn-dark">Get started</a>
        </div>

        {/* The Comparison Table */}
        <div className="table-wrap">
            {/* Header Row */}
            <div className="table-header-row">
                <div className="th-logo">
                    <img src="/images/logo/seroin logo light.png" alt="Seroin" />
                </div>
                <div className="th-col">Platform</div>
                <div className="th-col">Speed</div>
                <div className="th-col">Quality</div>
                <div className="th-col">Support</div>
                <div className="th-col">Cost</div>
            </div>

            {/* Row 1: Seroin (Highlighted with Neon Lime Box) */}
            <div className="table-body-row highlighted-row">
                <div className="highlighted-box"></div>
                <div className="tb-entity">
                    <h5>Seroin</h5>
                    <p>Your dedicated creative team, always on and ready to produce.</p>
                </div>
                <div className="tb-cell">
                    <svg className="icon-check-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <div className="tb-cell">
                    <svg className="icon-check-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <div className="tb-cell">
                    <svg className="icon-check-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <div className="tb-cell">
                    <svg className="icon-check-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <div className="tb-cell">
                    <svg className="icon-check-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
            </div>

            {/* Row 2: In-house team */}
            <div className="table-body-row">
                <div className="tb-entity">
                    <h5>In-house team</h5>
                    <p>Hiring takes months, replacements are slow, and fixed full-time salaries make scaling costly.</p>
                </div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
            </div>

            {/* Row 3: Freelancers */}
            <div className="table-body-row">
                <div className="tb-entity">
                    <h5>Freelancers</h5>
                    <p>Hit or miss quality. Constant sourcing and talent management keeps you chasing reliability.</p>
                </div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
            </div>

            {/* Row 4: Agencies */}
            <div className="table-body-row">
                <div className="tb-entity">
                    <h5>Agencies</h5>
                    <p>Heavy retainers, bloated scopes, and lengthy bureaucratic timelines slow everyday production.</p>
                </div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
            </div>

            {/* Row 5: DIY tools */}
            <div className="table-body-row">
                <div className="tb-entity">
                    <h5>DIY tools</h5>
                    <p>Templates look generic, lack custom nuance, and require substantial internal team hours to execute.</p>
                </div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
                <div className="tb-cell"><svg className="icon-x-gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg></div>
            </div>
        </div>

        {/* Plan Selector Bar */}
        <div className="plan-bar" id="pricing">
            <div className="plan-item">
                <span className="plan-label">Platform</span>
                <div className="plan-pills">
                    <span className="plan-pill active">Base</span>
                    <span className="plan-pill">Pro</span>
                </div>
            </div>

            <div className="plan-item">
                <span className="plan-label">Creative Services</span>
                <div className="plan-pills">
                    <span className="plan-pill active">Graphics</span>
                    <span className="plan-pill active">Motion</span>
                    <span className="plan-pill">Canva</span>
                </div>
            </div>

            <div className="plan-item">
                <span className="plan-label">Daily Output</span>
                <div className="plan-pills">
                    <span className="plan-pill active">2–3 Tasks / Day</span>
                </div>
            </div>

            <div className="plan-item">
                <div className="plan-price">$999<span>/mo</span></div>
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
                <a href="#ai-quote" className="btn btn-primary">Get started</a>
                <a href="#how" className="btn btn-dark">Learn more</a>
            </div>
        </div>
    </div>
</section>

  );
}
