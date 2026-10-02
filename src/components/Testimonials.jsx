import React, { useState, useEffect, useRef } from 'react';

export default function Testimonials() {
  const [currentReviewIdx, setCurrentReviewIdx] = useState(0);
  const timerRef = useRef(null);
  const totalSlides = 3;

  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setCurrentReviewIdx((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  return (
    <section className="testimonial-sec">
      <div className="c">
        <div
          className="testimonial-carousel-wrap"
          id="testiCarousel"
          onMouseEnter={stopTimer}
          onMouseLeave={startTimer}
        >
          {/* Slide 1: Joshua B. Lee */}
          <div className={`testi-slide ${currentReviewIdx === 0 ? 'active' : ''}`} data-index="0">
            <div className="testi-avatar-box">
              <img src="/images/review_portrait_1.png" alt="Joshua B. Lee" className="testi-portrait-img" />
            </div>
            <div className="testi-quote-content">
              <blockquote>
                “Implementing Design Pickle has transformed our design process. We've reduced our turnaround times in half and significantly improved the quality of our outputs. Our clients are thrilled!”
              </blockquote>
              <div className="testi-author-info">
                <span className="author-name">Joshua B. Lee, CEO at Standout Authority</span>
              </div>
              <div className="testi-bottom-row">
                <div className="testi-brand-logo">STANDOUT<br />AUTHORITY</div>
                <div className="testi-stat-box">
                  <span className="testi-stat-val">$200K+</span>
                  <span className="testi-stat-sub">Saved<br />annually</span>
                </div>
                <a href="#clients" className="testi-case-btn">
                  <span className="case-btn-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                      <path d="M6 6h10" />
                      <path d="M6 10h10" />
                    </svg>
                  </span>
                  <span>Read case study</span>
                </a>
              </div>
            </div>
          </div>

          {/* Slide 2: Deborah Wyant */}
          <div className={`testi-slide ${currentReviewIdx === 1 ? 'active' : ''}`} data-index="1">
            <div className="testi-avatar-box">
              <img src="/images/review_portrait_1.png" alt="Deborah Wyant" className="testi-portrait-img" />
            </div>
            <div className="testi-quote-content">
              <blockquote>
                “Our project was enormous and the team contributed from end to end. The process has been exceptionally efficient, and the quality is consistently high. Most often, the team sends exactly what I need with no revisions.”
              </blockquote>
              <div className="testi-author-info">
                <span className="author-name">Deborah Wyant, President & Founder at American VoxPop</span>
              </div>
              <div className="testi-bottom-row">
                <div className="testi-brand-logo">AMERICAN<br />VOXPOP</div>
                <div className="testi-stat-box">
                  <span className="testi-stat-val">$150K+</span>
                  <span className="testi-stat-sub">Saved<br />annually</span>
                </div>
                <a href="#clients" className="testi-case-btn">
                  <span className="case-btn-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                      <path d="M6 6h10" />
                      <path d="M6 10h10" />
                    </svg>
                  </span>
                  <span>Read case study</span>
                </a>
              </div>
            </div>
          </div>

          {/* Slide 3: Strato Doumanis */}
          <div className={`testi-slide ${currentReviewIdx === 2 ? 'active' : ''}`} data-index="2">
            <div className="testi-avatar-box">
              <img src="/images/review_portrait_1.png" alt="Strato Doumanis" className="testi-portrait-img" />
            </div>
            <div className="testi-quote-content">
              <blockquote>
                “Design Pickle has given our agency the agility to scale production effortlessly while maintaining pristine quality across every single deliverable.”
              </blockquote>
              <div className="testi-author-info">
                <span className="author-name">Strato Doumanis, CEO at MediaCutlet</span>
              </div>
              <div className="testi-bottom-row">
                <div className="testi-brand-logo">MEDIA<br />CUTLET</div>
                <div className="testi-stat-box">
                  <span className="testi-stat-val">$167K+</span>
                  <span className="testi-stat-sub">Saved on<br />design</span>
                </div>
                <a href="#clients" className="testi-case-btn">
                  <span className="case-btn-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                      <path d="M6 6h10" />
                      <path d="M6 10h10" />
                    </svg>
                  </span>
                  <span>Read case study</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Navigation Indicators */}
        <div className="testi-dots" id="testiDots">
          <span
            className={`testi-dot ${currentReviewIdx === 0 ? 'active' : ''}`}
            onClick={() => setCurrentReviewIdx(0)}
          ></span>
          <span
            className={`testi-dot ${currentReviewIdx === 1 ? 'active' : ''}`}
            onClick={() => setCurrentReviewIdx(1)}
          ></span>
          <span
            className={`testi-dot ${currentReviewIdx === 2 ? 'active' : ''}`}
            onClick={() => setCurrentReviewIdx(2)}
          ></span>
        </div>
      </div>
    </section>
  );
}
