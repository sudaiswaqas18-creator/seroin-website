import React from 'react';

export default function Recommend() {
  return (
<section className="recommend-sec" id="recommend">
    <div className="c">
        <div className="recommend-header">
            <div>
                <span className="sec-subtitle recommend-subtitle">GOT TIME?</span>
                <h2 className="sec-title dark">WE RECOMMEND</h2>
            </div>
            <a href="#pricing" className="btn btn-outline-pill">View all</a>
        </div>

        <div className="recommend-grid">
            {/* Card 1 */}
            <div className="blog-card">
                <div className="blog-card-img">
                    <img src="/images/recommend_1.png" alt="The State of AI Search" />
                </div>
                <div className="blog-card-body">
                    <span className="blog-tag">GUIDES & EBOOKS</span>
                    <h5 className="blog-card-title">The State of AI Search</h5>
                </div>
            </div>

            {/* Card 2 */}
            <div className="blog-card">
                <div className="blog-card-img">
                    <img src="/images/recommend_basket.png" alt="Best Graphic Design Subscription for E-commerce Brands (2026 Comparison)" />
                </div>
                <div className="blog-card-body">
                    <span className="blog-tag">BUSINESS TIPS</span>
                    <h5 className="blog-card-title">Best Graphic Design Subscription for E-commerce Brands (2026 Comparison)</h5>
                </div>
            </div>

            {/* Card 3 */}
            <div className="blog-card">
                <div className="blog-card-img">
                    <img src="/images/recommend_bottlenecks.png" alt="Agency design bottlenecks vs. subscription fixes: 10 questions marketing teams are asking" />
                </div>
                <div className="blog-card-body">
                    <span className="blog-tag">BUSINESS TIPS</span>
                    <h5 className="blog-card-title">Agency design bottlenecks vs. subscription fixes: 10 questions marketing teams are asking</h5>
                </div>
            </div>
        </div>
    </div>
</section>

  );
}
