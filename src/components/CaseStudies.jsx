import React, { useState, useEffect, useRef } from 'react';

export default function CaseStudies() {
  const [currentCaseIdx, setCurrentCaseIdx] = useState(1);
  const [shiftX, setShiftX] = useState(0);
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const totalCases = 12;

  const isPausedRef = useRef(false);

  const updatePosition = (idx) => {
    if (!trackRef.current || !trackRef.current.children.length) return;
    const card = trackRef.current.children[0];
    const cardWidth = card.offsetWidth || 610;
    const gap = 52;
    const vw = window.innerWidth;
    const centerOffset = Math.floor((vw - cardWidth) / 2);
    const shift = -(idx * (cardWidth + gap)) + centerOffset;
    setShiftX(shift);
  };

  const goToCase = (idx) => {
    setCurrentCaseIdx(idx);
  };

  useEffect(() => {
    updatePosition(currentCaseIdx);
  }, [currentCaseIdx]);

  useEffect(() => {
    const handleResize = () => updatePosition(currentCaseIdx);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentCaseIdx]);

  useEffect(() => {
    // Start at card index 1 (Shift Up as in Image 2)
    updatePosition(1);

    const interval = setInterval(() => {
      if (!isPausedRef.current) {
        setCurrentCaseIdx((prev) => (prev + 1) % totalCases);
      }
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="clients-sec" id="clients">
      <div className="c">
        <div className="clients-header">
          <span className="sec-subtitle">OUR CLIENTS</span>
          <h2 className="sec-title">HELPING SINCE DAY ONE</h2>
        </div>
      </div>

      <div className="clients-slider-viewport">
        <div
          className="clients-track"
          id="caseTrack"
          ref={trackRef}
          style={{ transform: `translateX(${shiftX}px)` }}
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
        >
            <div className="case-study-card">
                <div className="cs-image-box">
                    <img src="/images/American_Vox_Pop_da58840c7c.avif" alt="American Vox Pop Case Study" />
                </div>
                <div className="cs-content-box">
                    <div className="cs-stats-list">
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">97+</div>
                            <div className="cs-stat-label">Creative requests completed</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">80</div>
                            <div className="cs-stat-label">Hours saved every month across web, branding, and ad campaigns</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">66%</div>
                            <div className="cs-stat-label">Saved versus traditional agency costs</div>
                        </div>
                    </div>
                    <div className="cs-footer">
                        <a href="#recommend" className="btn">Read more</a>
                    </div>
                </div>
            </div>

            {/* Card 2: Shift Up (Prominent in Image 1) */}
            <div className="case-study-card">
                <div className="cs-image-box">
                    <img src="/images/Shift_Up_aeda00cf0f.avif" alt="Shift Up Case Study" />
                </div>
                <div className="cs-content-box">
                    <div className="cs-stats-list">
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">66</div>
                            <div className="cs-stat-label">Creative requests completed</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">10</div>
                            <div className="cs-stat-label">Hours saved weekly</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">100%</div>
                            <div className="cs-stat-label">Brand consistency across assets</div>
                        </div>
                    </div>
                    <div className="cs-footer">
                        <a href="#recommend" className="btn">Read more</a>
                    </div>
                </div>
            </div>

            {/* Card 3: Basata (Center in Image 1) */}
            <div className="case-study-card">
                <div className="cs-image-box">
                    <img src="/images/Basata_f06b352c5a.avif" alt="Basata Case Study" />
                </div>
                <div className="cs-content-box">
                    <div className="cs-stats-list">
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">10+</div>
                            <div className="cs-stat-label">Hours saved weekly</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">2X</div>
                            <div className="cs-stat-label">Design output</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">21+</div>
                            <div className="cs-stat-label">Requests created</div>
                        </div>
                    </div>
                    <div className="cs-footer">
                        <a href="#recommend" className="btn">Read more</a>
                    </div>
                </div>
            </div>

            {/* Card 4: Commit (Right in Image 1) */}
            <div className="case-study-card">
                <div className="cs-image-box">
                    <img src="/images/Commit_61886e9bbb.avif" alt="Commit Case Study" />
                </div>
                <div className="cs-content-box">
                    <div className="cs-stats-list">
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">$185K</div>
                            <div className="cs-stat-label">saved annually</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">215+</div>
                            <div className="cs-stat-label">hours reclaimed for strategy</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">600+</div>
                            <div className="cs-stat-label">assets created</div>
                        </div>
                    </div>
                    <div className="cs-footer">
                        <a href="#recommend" className="btn">Read more</a>
                    </div>
                </div>
            </div>

            {/* Card 5: Smarty Pants (Peeking right in Image 1) */}
            <div className="case-study-card">
                <div className="cs-image-box">
                    <img src="/images/Smarty_Pants_05c6abb467.avif" alt="Smarty Pants Case Study" />
                </div>
                <div className="cs-content-box">
                    <div className="cs-stats-list">
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">24hr</div>
                            <div className="cs-stat-label">Turnaround time</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">50+</div>
                            <div className="cs-stat-label">Creative assets per month</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">98%</div>
                            <div className="cs-stat-label">On-brand accuracy</div>
                        </div>
                    </div>
                    <div className="cs-footer">
                        <a href="#recommend" className="btn">Read more</a>
                    </div>
                </div>
            </div>

            {/* Card 6: The Vegan Shop */}
            <div className="case-study-card">
                <div className="cs-image-box">
                    <img src="/images/The_Vegan_Shop_e17d781324.avif" alt="The Vegan Shop Case Study" />
                </div>
                <div className="cs-content-box">
                    <div className="cs-stats-list">
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">3.5X</div>
                            <div className="cs-stat-label">Faster go-to-market speed</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">120+</div>
                            <div className="cs-stat-label">Packaging & digital assets created</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">40%</div>
                            <div className="cs-stat-label">Production cost reduction</div>
                        </div>
                    </div>
                    <div className="cs-footer">
                        <a href="#recommend" className="btn">Read more</a>
                    </div>
                </div>
            </div>

            {/* Card 7: Shift Up 2 */}
            <div className="case-study-card">
                <div className="cs-image-box">
                    <img src="/images/Shift_Up_aeda00cf0f.avif" alt="Shift Up Case Study" />
                </div>
                <div className="cs-content-box">
                    <div className="cs-stats-list">
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">66</div>
                            <div className="cs-stat-label">Creative requests completed</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">10</div>
                            <div className="cs-stat-label">Hours saved weekly</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">100%</div>
                            <div className="cs-stat-label">Brand consistency across assets</div>
                        </div>
                    </div>
                    <div className="cs-footer">
                        <a href="#recommend" className="btn">Read more</a>
                    </div>
                </div>
            </div>

            {/* Card 8: Basata 2 */}
            <div className="case-study-card">
                <div className="cs-image-box">
                    <img src="/images/Basata_f06b352c5a.avif" alt="Basata Case Study" />
                </div>
                <div className="cs-content-box">
                    <div className="cs-stats-list">
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">10+</div>
                            <div className="cs-stat-label">Hours saved weekly</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">2X</div>
                            <div className="cs-stat-label">Design output</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">21+</div>
                            <div className="cs-stat-label">Requests created</div>
                        </div>
                    </div>
                    <div className="cs-footer">
                        <a href="#recommend" className="btn">Read more</a>
                    </div>
                </div>
            </div>

            {/* Card 9: Commit 2 */}
            <div className="case-study-card">
                <div className="cs-image-box">
                    <img src="/images/Commit_61886e9bbb.avif" alt="Commit Case Study" />
                </div>
                <div className="cs-content-box">
                    <div className="cs-stats-list">
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">$185K</div>
                            <div className="cs-stat-label">saved annually</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">215+</div>
                            <div className="cs-stat-label">hours reclaimed for strategy</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">600+</div>
                            <div className="cs-stat-label">assets created</div>
                        </div>
                    </div>
                    <div className="cs-footer">
                        <a href="#recommend" className="btn">Read more</a>
                    </div>
                </div>
            </div>

            {/* Card 10: Smarty Pants 2 */}
            <div className="case-study-card">
                <div className="cs-image-box">
                    <img src="/images/Smarty_Pants_05c6abb467.avif" alt="Smarty Pants Case Study" />
                </div>
                <div className="cs-content-box">
                    <div className="cs-stats-list">
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">24hr</div>
                            <div className="cs-stat-label">Turnaround time</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">50+</div>
                            <div className="cs-stat-label">Creative assets per month</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">98%</div>
                            <div className="cs-stat-label">On-brand accuracy</div>
                        </div>
                    </div>
                    <div className="cs-footer">
                        <a href="#recommend" className="btn">Read more</a>
                    </div>
                </div>
            </div>

            {/* Card 11: The Vegan Shop 2 */}
            <div className="case-study-card">
                <div className="cs-image-box">
                    <img src="/images/The_Vegan_Shop_e17d781324.avif" alt="The Vegan Shop Case Study" />
                </div>
                <div className="cs-content-box">
                    <div className="cs-stats-list">
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">3.5X</div>
                            <div className="cs-stat-label">Faster go-to-market speed</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">120+</div>
                            <div className="cs-stat-label">Packaging & digital assets created</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">40%</div>
                            <div className="cs-stat-label">Production cost reduction</div>
                        </div>
                    </div>
                    <div className="cs-footer">
                        <a href="#recommend" className="btn">Read more</a>
                    </div>
                </div>
            </div>

            {/* Card 12: American Vox Pop 2 */}
            <div className="case-study-card">
                <div className="cs-image-box">
                    <img src="/images/American_Vox_Pop_da58840c7c.avif" alt="American Vox Pop Case Study" />
                </div>
                <div className="cs-content-box">
                    <div className="cs-stats-list">
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">97+</div>
                            <div className="cs-stat-label">Creative requests completed</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">80</div>
                            <div className="cs-stat-label">Hours saved every month across web, branding, and ad campaigns</div>
                        </div>
                        <div className="cs-stat-item">
                            <div className="cs-stat-num">66%</div>
                            <div className="cs-stat-label">Saved versus traditional agency costs</div>
                        </div>
                    </div>
                    <div className="cs-footer">
                        <a href="#recommend" className="btn">Read more</a>
                    </div>
                </div>
            </div>

        </div>
      </div>

      <div className="c">
        <div className="slider-dots" id="caseDots">
          {Array.from({ length: totalCases }).map((_, i) => (
            <span
              key={i}
              className={`slider-dot ${currentCaseIdx === i ? 'active' : ''}`}
              onClick={() => goToCase(i)}
            ></span>
          ))}
        </div>

        <div className="support-banner">
          <div className="support-left">
            <div className="support-icon-wrap">
              <img src="/images/intercom_1a17a96c34.png" alt="Intercom Support" />
            </div>
            <div className="support-text">
              <h6>Have questions?</h6>
              <p>Our team is available 24/5 with live responses in 10 minutes or less. Visit our help center to learn more.</p>
            </div>
          </div>
          <a href="#pricing" className="btn btn-connect">Let's connect</a>
        </div>
      </div>
    </section>
  );
}
