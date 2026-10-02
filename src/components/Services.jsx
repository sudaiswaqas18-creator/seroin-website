import React from 'react';

export default function Services() {
  return (
<section className="services-sec" id="services">
    <div className="c">
        <div className="services-header">
            <div>
                <span className="sec-subtitle">WHAT WE CREATE</span>
                <h2 className="sec-title">EVERYTHING YOU NEED,<br />IN ONE CREATIVE PLATFORM</h2>
            </div>
            <a href="#pricing" className="btn btn-primary">Get started</a>
        </div>
    </div>

    {/* Continuous Marquee Track */}
    <div className="services-carousel-track-wrap">
        <div className="services-track">
            {/* Set 1 */}
            <div className="service-card">
                <div className="service-img-box"><img src="/images/work_card_1.png" alt="Brand & Identity" /></div>
                <div className="service-info">
                    <h5>Brand & Identity</h5>
                    <div className="service-tags">#LOGO #GUIDELINES #STATIONERY</div>
                </div>
            </div>

            <div className="service-card">
                <div className="service-img-box"><img src="/images/work_card_3.png" alt="Marketing & Advertising" /></div>
                <div className="service-info">
                    <h5>Marketing & Advertising</h5>
                    <div className="service-tags">#AD CREATIVE #SOCIAL #EMAIL</div>
                </div>
            </div>

            <div className="service-card">
                <div className="service-img-box"><img src="/images/work_card_4.png" alt="Print & Editorial" /></div>
                <div className="service-info">
                    <h5>Print & Editorial</h5>
                    <div className="service-tags">#BOOK #BANNERS #CATALOG</div>
                </div>
            </div>

            <div className="service-card">
                <div className="service-img-box"><img src="/images/work_card_5.png" alt="Product & Packaging" /></div>
                <div className="service-info">
                    <h5>Product & Packaging</h5>
                    <div className="service-tags">#MERCH #LABELS #BOXES</div>
                </div>
            </div>

            <div className="service-card">
                <div className="service-img-box"><img src="/images/work_card_7.png" alt="Digital & Web" /></div>
                <div className="service-info">
                    <h5>Digital & Web</h5>
                    <div className="service-tags">#WEBSITE #LANDING #APPS</div>
                </div>
            </div>

            <div className="service-card">
                <div className="service-img-box"><img src="/images/work_card_8.png" alt="Motion & Video" /></div>
                <div className="service-info">
                    <h5>Motion & Video</h5>
                    <div className="service-tags">#ANIMATION #REELS #GIFs</div>
                </div>
            </div>

            <div className="service-card">
                <div className="service-img-box"><img src="/images/work_card_9.png" alt="Illustration & 3D" /></div>
                <div className="service-info">
                    <h5>Illustration & Artwork</h5>
                    <div className="service-tags">#CHARACTERS #3D #ICONS</div>
                </div>
            </div>

            {/* Duplicate Set for Seamless Continuous Loop */}
            <div className="service-card">
                <div className="service-img-box"><img src="/images/work_card_1.png" alt="Brand & Identity" /></div>
                <div className="service-info">
                    <h5>Brand & Identity</h5>
                    <div className="service-tags">#LOGO #GUIDELINES #STATIONERY</div>
                </div>
            </div>

            <div className="service-card">
                <div className="service-img-box"><img src="/images/work_card_3.png" alt="Marketing & Advertising" /></div>
                <div className="service-info">
                    <h5>Marketing & Advertising</h5>
                    <div className="service-tags">#AD CREATIVE #SOCIAL #EMAIL</div>
                </div>
            </div>

            <div className="service-card">
                <div className="service-img-box"><img src="/images/work_card_4.png" alt="Print & Editorial" /></div>
                <div className="service-info">
                    <h5>Print & Editorial</h5>
                    <div className="service-tags">#BOOK #BANNERS #CATALOG</div>
                </div>
            </div>

            <div className="service-card">
                <div className="service-img-box"><img src="/images/work_card_5.png" alt="Product & Packaging" /></div>
                <div className="service-info">
                    <h5>Product & Packaging</h5>
                    <div className="service-tags">#MERCH #LABELS #BOXES</div>
                </div>
            </div>

            <div className="service-card">
                <div className="service-img-box"><img src="/images/work_card_7.png" alt="Digital & Web" /></div>
                <div className="service-info">
                    <h5>Digital & Web</h5>
                    <div className="service-tags">#WEBSITE #LANDING #APPS</div>
                </div>
            </div>

            <div className="service-card">
                <div className="service-img-box"><img src="/images/work_card_8.png" alt="Motion & Video" /></div>
                <div className="service-info">
                    <h5>Motion & Video</h5>
                    <div className="service-tags">#ANIMATION #REELS #GIFs</div>
                </div>
            </div>

            <div className="service-card">
                <div className="service-img-box"><img src="/images/work_card_9.png" alt="Illustration & 3D" /></div>
                <div className="service-info">
                    <h5>Illustration & Artwork</h5>
                    <div className="service-tags">#CHARACTERS #3D #ICONS</div>
                </div>
            </div>
        </div>
    </div>
</section>

  );
}
