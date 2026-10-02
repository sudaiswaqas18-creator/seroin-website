import React from 'react';

export default function Footer() {
  return (
    <>
<footer>
    <div className="c">
        {/* Top row: Newsletter + 4 Badges + Social - Exact match to Image 4 */}
        <div className="footer-top-row">
            <div className="newsletter-box">
                <h4>Subscribe to the cookbook</h4>
                <p>We'll send creative recipes and product updates your way.</p>
                <div className="newsletter-form-row">
                    <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
                        <input type="email" placeholder="Business email" required />
                        <button type="submit" className="newsletter-arrow-btn" aria-label="Subscribe">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </form>
                    <div className="footer-badges">
                        {/* Badge 1: G2 Users Love Us */}
                        <div className="footer-badge-shield" title="G2 Users Love Us">
                            <svg width="34" height="42" viewBox="0 0 28 34" fill="none">
                                <path d="M14 0L28 5V18C28 26.5 14 34 14 34C14 34 0 26.5 0 18V5L14 0Z" fill="#181918" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
                                <text x="14" y="15" fill="#FF492C" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">G2</text>
                                <text x="14" y="24" fill="#E0E0E0" fontSize="4.2" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">USERS LOVE US</text>
                            </svg>
                        </div>
                        {/* Badge 2: G2 High Performer */}
                        <div className="footer-badge-shield" title="G2 High Performer">
                            <svg width="34" height="42" viewBox="0 0 28 34" fill="none">
                                <path d="M14 0L28 5V18C28 26.5 14 34 14 34C14 34 0 26.5 0 18V5L14 0Z" fill="#181918" stroke="rgba(255,255,255,0.18)" strokeWidth="1"/>
                                <text x="14" y="15" fill="#FF492C" fontSize="9" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">G2</text>
                                <text x="14" y="24" fill="#60A5FA" fontSize="4.2" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">PERFORMER</text>
                            </svg>
                        </div>
                        {/* Badge 3: G2 Leader (Orange crest as in Image 4) */}
                        <div className="footer-badge-shield" title="G2 Leader Fall 2024">
                            <svg width="34" height="42" viewBox="0 0 28 34" fill="none">
                                <path d="M14 0L28 5V18C28 26.5 14 34 14 34C14 34 0 26.5 0 18V5L14 0Z" fill="#FFFFFF"/>
                                <path d="M0 5L14 0L28 5V14H0V5Z" fill="#EA580C"/>
                                <text x="14" y="9" fill="#FFFFFF" fontSize="4.5" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">FALL</text>
                                <text x="14" y="21" fill="#111211" fontSize="6.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">Leader</text>
                                <path d="M11 26L14 24L17 26L14 28Z" fill="#EA580C"/>
                            </svg>
                        </div>
                        {/* Badge 4: Canva Partner */}
                        <div className="footer-badge-canva" title="Canva Verified Partner">
                            <img src="/images/canva_badge.png" alt="Canva Partner" className="footer-badge-item" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="social-badges-wrap">
                <span className="footer-follow-label">Follow us</span>
                <div className="social-icons-row">
                    <a href="#" className="social-icon-btn" aria-label="Facebook">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="#" className="social-icon-btn" aria-label="X">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                    </a>
                    <a href="#" className="social-icon-btn" aria-label="Instagram">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                    </a>
                    <a href="#" className="social-icon-btn" aria-label="YouTube">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </a>
                    <a href="#" className="social-icon-btn" aria-label="TikTok">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.48 6.3 6.3 0 0 0 1.96-4.52V8.92a8.28 8.28 0 0 0 4.81 1.52v-3.7a4.85 4.85 0 0 1-1-.05z"/></svg>
                    </a>
                </div>
            </div>
        </div>

        {/* 5 Column Links Grid */}
        <div className="footer-cols-grid">
            <div className="footer-col">
                <h6>SOLUTIONS & SERVICES</h6>
                <ul>
                    <li><a href="#">AI in Design</a></li>
                    <li><a href="#">Brand & Identity</a></li>
                    <li><a href="#">Marketing & Advertising</a></li>
                    <li><a href="#">Motion & Video</a></li>
                    <li><a href="#">Print</a></li>
                    <li><a href="#">Illustration & Artwork</a></li>
                    <li><a href="#">Presentations</a></li>
                    <li><a href="#">Product & Packaging</a></li>
                    <li><a href="#">Environmental & Event</a></li>
                    <li><a href="#">Corporate & Internal</a></li>
                    <li><a href="#">Canva Conversion Services</a></li>
                </ul>
            </div>

            <div className="footer-col">
                <h6>PLATFORM & PRICING</h6>
                <ul>
                    <li><a href="#">Platform</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
            </div>

            <div className="footer-col">
                <h6>RESOURCES</h6>
                <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Customer Stories</a></li>
                    <li><a href="#">Guides & Ebooks</a></li>
                    <li><a href="#">Podcast</a></li>
                    <li><a href="#">Webinars & Events</a></li>
                </ul>
            </div>

            <div className="footer-col">
                <h6>WHY DESIGN PICKLE?</h6>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our People</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Creative Application</a></li>
                    <li><a href="#">Merch Store</a></li>
                    <li><a href="#">Our Work</a></li>
                    <li><a href="#">How We Work</a></li>
                    <li><a href="#">Compare Plans & Alternatives</a></li>
                </ul>
            </div>

            <div className="footer-col footer-col-help">
                <h6>NEED HELP</h6>
                <ul className="footer-help-list">
                    <li>
                        <a href="mailto:help@designpickle.com">
                            <svg className="help-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            <span>help@designpickle.com</span>
                        </a>
                    </li>
                    <li>
                        <a href="tel:+16023537845">
                            <svg className="help-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span>+1 (602) 353-7845</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg className="help-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                            <span>24/5 live chat</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg className="help-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                            <span>Help Center</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg className="help-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                            <span>System Status</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>

{/* Sticky Lime Bottom Bar (Exact Image 1 Reference) */}
<div className="sticky-lime-bar">
    <div className="c sticky-bar-content">
        <div className="sticky-bar-left">
            <span className="sticky-logo-pickle">DESIGN PICKLE</span>
            <div className="ai-summary-pill-btn">
                <span className="sparkle-sym">✦</span>
                <span className="ai-summary-text">AI Summary</span>
                <span className="chatgpt-sym">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.98 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 8.687a4.477 4.477 0 0 1 2.34-1.974V12.2a.79.79 0 0 0 .392.682l5.844 3.37-2.02 1.168a.076.076 0 0 1-.067 0L4.01 14.63a4.503 4.503 0 0 1-1.67-5.943zm16.597 3.825-5.843-3.372 2.02-1.167a.076.076 0 0 1 .067 0l4.82 2.79a4.503 4.503 0 0 1 1.67 5.943 4.477 4.477 0 0 1-2.342 1.976v-5.488a.789.789 0 0 0-.392-.682zm2.013-3.023l-.142-.085-4.779-2.782a.776.776 0 0 0-.785 0L9.409 9.997V7.669a.078.078 0 0 1 .034-.061l4.839-2.793a4.5 4.5 0 0 1 6.669 4.675zM8.306 13.06l-2.02-1.163a.08.08 0 0 1-.038-.057V6.257a4.496 4.496 0 0 1 7.37-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.392.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.607 1.5-2.602-1.5z"/></svg>
                </span>
                <span className="chevron-down">▾</span>
            </div>
        </div>
        <div className="sticky-bar-right">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">API Docs</a>
        </div>
    </div>
</div>

    </>
  );
}
