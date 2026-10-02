import React from 'react';

export default function CommandCenter() {
  return (
<section className="command-sec" id="how">
    <div className="c">
        <div className="command-header">
            <div>
                <span className="sec-subtitle">BRIEF. TRACK. DOWNLOAD. EASY.</span>
                <h2 className="sec-title">YOUR CREATIVE COMMAND CENTER</h2>
            </div>
            <a href="#pricing" className="btn btn-primary">Get started</a>
        </div>

        {/* 3 Step Cards */}
        <div className="command-grid-top">
            <div className="command-card">
                <div className="command-card-img">
                    <img src="/images/command_step_1.png" alt="Submit your idea interface" />
                </div>
                <div className="command-card-body">
                    <h5>1. Submit your idea</h5>
                    <p>Submit requests via the intuitive dashboard or through Slack and Teams apps. Attach links, brand guidelines, and specs in minutes.</p>
                </div>
            </div>

            <div className="command-card">
                <div className="command-card-img">
                    <img src="/images/converted_image14.png" alt="Track in real-time interface" />
                </div>
                <div className="command-card-body">
                    <h5>2. Track in real-time</h5>
                    <p>Monitor production progress, queue incoming tasks, and easily adjust deadlines so your creatives always work on what matters most.</p>
                </div>
            </div>

            <div className="command-card">
                <div className="command-card-img">
                    <img src="/images/converted_image16.png" alt="Review and collaborate interface" />
                </div>
                <div className="command-card-body">
                    <h5>3. Review & collaborate</h5>
                    <p>Leave point-and-click feedback directly on designs, request minor tweaks, and download production-ready native files instantly.</p>
                </div>
            </div>
        </div>

        {/* Bottom Wide Integration Card */}
        <div className="command-wide-card">
            <div className="command-wide-text">
                <span className="sec-subtitle">SEAMLESS INTEGRATION</span>
                <h4>4. Tap into software & connect to your tech stack</h4>
                <p>Native integrations with your existing everyday software ensure production workflows never miss a beat. Sync directly to your cloud storage and project tools.</p>
            </div>
            <div className="command-tools-box">
                <div className="command-tools-grid">
                    <div className="tool-chip">🎨 Figma</div>
                    <div className="tool-chip">✨ Canva</div>
                    <div className="tool-chip">⚡ Zapier</div>
                    <div className="tool-chip">💬 Slack</div>
                    <div className="tool-chip">📁 Google Drive</div>
                    <div className="tool-chip">📋 Asana</div>
                    <div className="tool-chip">📅 Monday</div>
                    <div className="tool-chip">📦 Adobe CC</div>
                </div>
                <a href="#pricing" className="btn btn-primary btn-sm">See all integrations</a>
            </div>
        </div>
    </div>
</section>

  );
}
