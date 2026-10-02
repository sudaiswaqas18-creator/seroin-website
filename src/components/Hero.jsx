import React from 'react';

export default function Hero() {
  return (
<section className="hero" id="home">
    <div className="hero-layout">
        <div className="hero-content">
            <span className="sec-subtitle">#1 IN DESIGN PRODUCTION</span>
            <h1>YOUR ULTIMATE<br />CREATIVE PARTNER</h1>
            <p>Seroin is a creative-as-a-service platform delivering graphic design, motion, and illustration. This standardized framework provides teams with scalable asset production and reliable 24-hour turnaround times for initial first drafts.</p>
            <div className="hero-buttons">
                <a href="#pricing" className="btn btn-hero-primary">Get started</a>
                <a href="#how" className="btn btn-hero-secondary">How it works</a>
            </div>
        </div>

        {/* Hero Cards Marquee (bleeds off the right edge without black cut) */}
        <div className="hero-carousel-wrap">
            <div className="hero-marquee">
                {/* Set 1 */}
                <div className="hero-card"><img src="/images/hero_card_1.png" alt="Creative Design 1" /></div>
                <div className="hero-card"><img src="/images/hero_card_2.png" alt="Creative Design 2" /></div>
                <div className="hero-card"><img src="/images/converted_image1.png" alt="Creative Design 3" /></div>
                <div className="hero-card"><img src="/images/hero_card_4.png" alt="Creative Design 4" /></div>
                <div className="hero-card"><img src="/images/hero_card_5.png" alt="Creative Design 5" /></div>
                <div className="hero-card"><img src="/images/converted_image6.png" alt="Creative Design 6" /></div>
                {/* Set 2 (Duplicate for continuous marquee) */}
                <div className="hero-card"><img src="/images/hero_card_1.png" alt="Creative Design 1" /></div>
                <div className="hero-card"><img src="/images/hero_card_2.png" alt="Creative Design 2" /></div>
                <div className="hero-card"><img src="/images/converted_image1.png" alt="Creative Design 3" /></div>
                <div className="hero-card"><img src="/images/hero_card_4.png" alt="Creative Design 4" /></div>
                <div className="hero-card"><img src="/images/hero_card_5.png" alt="Creative Design 5" /></div>
                <div className="hero-card"><img src="/images/converted_image6.png" alt="Creative Design 6" /></div>
            </div>
        </div>
    </div>
</section>

  );
}
