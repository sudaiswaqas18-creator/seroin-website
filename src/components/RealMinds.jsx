import React from 'react';

export default function RealMinds() {
  return (
<section className="real-minds-sec">
    <div className="c">
        <div className="real-minds-header">
            <span className="sec-subtitle">HUMAN CREATIVITY SUPPORTED BY AI</span>
            <h2 className="sec-title">REAL MINDS, SMART TOOLS, EXCEPTIONAL DESIGN</h2>
        </div>

        <div className="real-minds-grid">
            {/* Left: Featured Talent Card */}
            <div className="rm-talent-card">
                <div className="rm-talent-image">
                    <img src="/images/real_people_james.png" alt="Creative Talent James" />
                </div>
                <div className="rm-talent-text">
                    <h4>Quality guaranteed by talent and process</h4>
                    <p>Vetted creatives supported by standardized processes and AI-assisted tools to deliver world-class design every time.</p>
                </div>
            </div>

            {/* Right: 2x2 Feature Grid */}
            <div className="rm-features-grid">
                <div className="rm-feature-card">
                    <div className="rm-feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" /><path d="m8 6 2-2" /><path d="m18 16 2-2" /><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" /><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" /></svg>
                    </div>
                    <h5>Spin up a creative team fast</h5>
                    <p>Low complexity to build from scratch or seamlessly plug into your current marketing department.</p>
                </div>

                <div className="rm-feature-card">
                    <div className="rm-feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <h5>Reliable turnarounds</h5>
                    <p>Average 24-hour first drafts, handled with consistency, precision, and ongoing care.</p>
                </div>

                <div className="rm-feature-card">
                    <div className="rm-feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>
                    </div>
                    <h5>Transparent pricing</h5>
                    <p>Build a flexible subscription that directly matches your current monthly creative demands.</p>
                </div>

                <div className="rm-feature-card">
                    <div className="rm-feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" /><path d="M21 16v2a4 4 0 0 1-4 4h-5" /></svg>
                    </div>
                    <h5>Human support, always on</h5>
                    <p>Never get stuck on a request. Our dedicated team is here 24/5 to guarantee your project's success.</p>
                </div>
            </div>
        </div>
    </div>
</section>

  );
}
