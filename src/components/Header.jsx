import React from 'react';

export default function Header() {
  return (
<header className="page-header-container">
    <div className="page-header">
        <div className="c header-content">
            <a href="#" className="logo-wrap">
                <img src="/images/logo/seroin logo light.png" alt="Seroin Logo" />
            </a>

            <nav className="main-nav">
                <ul className="nav-menu">
                    {/* Dropdown 1: Solutions & Services (Exact match to Image 3) */}
                    <li className="nav-item has-dropdown">
                        <a href="#services" className="nav-link">Solutions & Services <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
                        <div className="mega-menu mega-solutions">
                            <div className="mega-header-title">Solutions & Services</div>
                            <div className="mega-solutions-grid">
                                {/* Col 1 */}
                                <div className="mega-col">
                                    <a href="#services" className="mega-item">
                                        <div className="mega-item-text">
                                            <span className="mega-item-title">AI in design</span>
                                            <span className="mega-item-desc">AI-powered automation to streamline design requests</span>
                                        </div>
                                        <svg className="mega-item-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m12 3-1.9 6.1L4 11l6.1 1.9L12 19l1.9-6.1L20 11l-6.1-1.9z"/>
                                        </svg>
                                    </a>
                                    <a href="#services" className="mega-item">
                                        <div className="mega-item-text">
                                            <span className="mega-item-title">Apparel & Merchandise</span>
                                            <span className="mega-item-desc">Designs that work IRL</span>
                                        </div>
                                        <svg className="mega-item-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M6 2 2 7l4 2v13h12V9l4-2-4-5-4 2a4 4 0 0 1-4 0Z"/>
                                        </svg>
                                    </a>
                                    <a href="#services" className="mega-item">
                                        <div className="mega-item-text">
                                            <span className="mega-item-title">Brand & Identity</span>
                                            <span className="mega-item-desc">Build brand experiences that last</span>
                                        </div>
                                        <svg className="mega-item-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12.5 2H6a2 2 0 0 0-2 2v6.5a2 2 0 0 0 .59 1.41l9.5 9.5a2 2 0 0 0 2.82 0l6.5-6.5a2 2 0 0 0 0-2.82l-9.5-9.5A2 2 0 0 0 12.5 2Z"/>
                                            <circle cx="7.5" cy="7.5" r="1.5"/>
                                        </svg>
                                    </a>
                                    <a href="#services" className="mega-item">
                                        <div className="mega-item-text">
                                            <span className="mega-item-title">Corporate & Internal</span>
                                            <span className="mega-item-desc">Professional visuals for internal success</span>
                                        </div>
                                        <svg className="mega-item-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                            <rect width="18" height="14" x="3" y="7" rx="2"/>
                                            <path d="M9 7V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3"/>
                                            <circle cx="9" cy="14" r="2"/>
                                            <path d="M14 13h3m-3 3h3"/>
                                        </svg>
                                    </a>
                                    <a href="#services" className="mega-item">
                                        <div className="mega-item-text">
                                            <span className="mega-item-title">Digital & Web</span>
                                            <span className="mega-item-desc">UI designs that captivate and convert</span>
                                        </div>
                                        <svg className="mega-item-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"/>
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>
                                        </svg>
                                    </a>
                                    <a href="#services" className="mega-item">
                                        <div className="mega-item-text">
                                            <span className="mega-item-title">Environmental & Event</span>
                                            <span className="mega-item-desc">Graphics for every experience</span>
                                        </div>
                                        <svg className="mega-item-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h11zm0 0c0-2.76 2.46-5 5.5-5S24 5.24 24 8H13zm-1 0v14"/>
                                        </svg>
                                    </a>
                                    <a href="#services" className="mega-item">
                                        <div className="mega-item-text">
                                            <span className="mega-item-title">eBooks & Digital Report</span>
                                            <span className="mega-item-desc">Turn data into designs that deliver</span>
                                        </div>
                                        <svg className="mega-item-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
                                            <path d="M6 6h10m-10 4h10"/>
                                        </svg>
                                    </a>
                                </div>

                                {/* Col 2 */}
                                <div className="mega-col">
                                    <a href="#services" className="mega-item">
                                        <div className="mega-item-text">
                                            <span className="mega-item-title">Illustration & Artwork</span>
                                            <span className="mega-item-desc">Custom designs to enhance your brand's presence</span>
                                        </div>
                                        <svg className="mega-item-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m12 19 7-7 3 3-7 7-3-3z"/>
                                            <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18"/>
                                        </svg>
                                    </a>
                                    <a href="#services" className="mega-item">
                                        <div className="mega-item-text">
                                            <span className="mega-item-title">Marketing & Advertising</span>
                                            <span className="mega-item-desc">Creative that drives results</span>
                                        </div>
                                        <svg className="mega-item-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m3 11 18-5v12L3 13v-2zM11.6 16.8a3 3 0 1 1-5.8-1.6"/>
                                        </svg>
                                    </a>
                                    <a href="#services" className="mega-item">
                                        <div className="mega-item-text">
                                            <span className="mega-item-title">Motion & Video</span>
                                            <span className="mega-item-desc">Make every message move</span>
                                        </div>
                                        <svg className="mega-item-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m16 13 5.4-3.6A1 1 0 0 1 23 10.3v7.4a1 1 0 0 1-1.6.8L16 15"/>
                                            <rect width="14" height="12" x="2" y="8" rx="2"/>
                                        </svg>
                                    </a>
                                    <a href="#services" className="mega-item">
                                        <div className="mega-item-text">
                                            <span className="mega-item-title">Presentations</span>
                                            <span className="mega-item-desc">Decks for every report, pitch, and keynote</span>
                                        </div>
                                        <svg className="mega-item-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                            <rect width="20" height="14" x="2" y="3" rx="2"/>
                                            <path d="M12 17v4m-4 0h8"/>
                                        </svg>
                                    </a>
                                    <a href="#services" className="mega-item">
                                        <div className="mega-item-text">
                                            <span className="mega-item-title">Print</span>
                                            <span className="mega-item-desc">Print designs for memorable communication</span>
                                        </div>
                                        <svg className="mega-item-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                                            <path d="M6 9V3h12v6"/>
                                            <rect width="12" height="8" x="6" y="14" rx="1"/>
                                        </svg>
                                    </a>
                                    <a href="#services" className="mega-item">
                                        <div className="mega-item-text">
                                            <span className="mega-item-title">Product & Packaging</span>
                                            <span className="mega-item-desc">Creative on full display</span>
                                        </div>
                                        <svg className="mega-item-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m21 16-9 5-9-5V8l9-5 9 5v8z"/>
                                            <path d="m3.3 8 8.7 5 8.7-5M12 13v8"/>
                                        </svg>
                                    </a>
                                    <a href="#services" className="mega-item">
                                        <div className="mega-item-text">
                                            <span className="mega-item-title">Canva Design Services</span>
                                            <span className="mega-item-desc">Custom Canva designs and templates</span>
                                        </div>
                                        <svg className="mega-item-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                        </svg>
                                    </a>
                                </div>

                                {/* Col 3: Right Side Industry + Canva Partner Badge */}
                                <div className="mega-col-side">
                                    <div className="mega-side-section">
                                        <span className="mega-side-label">For your industry</span>
                                        <div className="mega-side-links">
                                            <a href="#services">B2B</a>
                                            <a href="#services">B2C</a>
                                            <a href="#services">Agencies</a>
                                        </div>
                                    </div>
                                    <div className="mega-canva-card">
                                        <img src="/images/canva_badge.png" alt="Canva Certified Agency Partner" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* Plain Link: Platform */}
                    <li className="nav-item">
                        <a href="#how" className="nav-link">Platform</a>
                    </li>

                    {/* Plain Link: Pricing */}
                    <li className="nav-item">
                        <a href="#pricing" className="nav-link">Pricing</a>
                    </li>

                    {/* Dropdown 2: Resources (Exact match to Image 5) */}
                    <li className="nav-item has-dropdown">
                        <a href="#recommend" className="nav-link">Resources <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
                        <div className="mega-menu mega-resources">
                            <div className="mega-header-title">Resources</div>
                            <div className="mega-resources-layout">
                                <div className="mega-cards-row">
                                    <a href="#recommend" className="mega-feature-card">
                                        <div className="mega-card-thumb mega-blue-thumb">
                                            <img src="/images/blog_blue_glasses.jpg" alt="Blog" />
                                        </div>
                                        <div className="mega-card-info">
                                            <h6>Blog</h6>
                                            <p>Explore topics to takes your creative to the next level</p>
                                        </div>
                                    </a>
                                    <a href="#recommend" className="mega-feature-card">
                                        <div className="mega-card-thumb mega-customer-thumb">
                                            <img src="/images/image20_check.png" alt="Customer Stories" />
                                        </div>
                                        <div className="mega-card-info">
                                            <h6>Customer Stories</h6>
                                            <p>Hear first hand how our clients win with Design Pickle</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="mega-col-side">
                                    <div className="mega-side-section">
                                        <span className="mega-side-label">For your Industry</span>
                                        <div className="mega-side-links">
                                            <a href="#recommend">B2B</a>
                                            <a href="#recommend">B2C</a>
                                            <a href="#recommend">Agencies</a>
                                        </div>
                                    </div>
                                    <div className="mega-side-actions">
                                        <a href="#recommend" className="mega-action-link">
                                            <svg className="lime-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="4" y="2" width="16" height="20" rx="2"/>
                                                <line x1="8" y1="6" x2="16" y2="6"/>
                                                <line x1="8" y1="10" x2="16" y2="10"/>
                                                <line x1="8" y1="14" x2="12" y2="14"/>
                                            </svg>
                                            <span>Recipes</span>
                                        </a>
                                        <a href="#recommend" className="mega-action-link">
                                            <svg className="lime-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="3" width="20" height="14" rx="2"/>
                                                <line x1="8" y1="21" x2="16" y2="21"/>
                                                <line x1="12" y1="17" x2="12" y2="21"/>
                                            </svg>
                                            <span>Webinar & Events</span>
                                        </a>
                                        <a href="#recommend" className="mega-action-link">
                                            <svg className="lime-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 20h9"/>
                                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                                            </svg>
                                            <span>Our Work</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* Dropdown 3: Why DP / Why Seroin (Exact match to Image 3) */}
                    <li className="nav-item has-dropdown">
                        <a href="#why" className="nav-link">Why DP <svg className="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
                        <div className="mega-menu mega-why">
                            <div className="mega-header-title">Why Design Pickle</div>
                            <div className="mega-resources-layout">
                                <div className="mega-cards-row">
                                    <a href="#why" className="mega-feature-card">
                                        <div className="mega-card-thumb">
                                            <img src="/images/about_us_faces.jpg" alt="About us" />
                                        </div>
                                        <div className="mega-card-info">
                                            <h6>About us</h6>
                                        </div>
                                    </a>
                                    <a href="#why" className="mega-feature-card">
                                        <div className="mega-card-thumb">
                                            <img src="/images/our_people_team.jpg" alt="Our people" />
                                        </div>
                                        <div className="mega-card-info">
                                            <h6>Our people</h6>
                                        </div>
                                    </a>
                                </div>

                                <div className="mega-col-side mega-col-side-why">
                                    <div className="mega-side-actions">
                                        <a href="#why" className="mega-action-link">
                                            <svg className="lime-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                            </svg>
                                            <span>24 Live chat</span>
                                        </a>
                                        <a href="#why" className="mega-action-link">
                                            <svg className="lime-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="7" width="20" height="14" rx="2"/>
                                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                                            </svg>
                                            <span>Careers</span>
                                        </a>
                                        <a href="#pricing" className="mega-action-link">
                                            <svg className="lime-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7"/>
                                                <polyline points="7 7 17 7 17 17"/>
                                            </svg>
                                            <span>Get Started</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>

            <div className="header-actions">
                <div className="header-search" title="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                </div>
                <a href="#pricing" className="header-signin">Sign in</a>
                <a href="#pricing" className="btn btn-header-consult">Book a consultation</a>
            </div>
        </div>
    </div>
</header>

  );
}
