import React, { useEffect, useRef } from 'react';

const IMAGES = [
  "/images/trail/small/seroin (1).jpg",
  "/images/trail/small/seroin (2).jpg",
  "/images/trail/small/seroin (3).jpg",
  "/images/trail/small/seroin (4).jpg",
  "/images/trail/small/seroin (5).jpg",
  "/images/trail/small/seroin (6).jpg",
  "/images/trail/small/seroin (7).png",
  "/images/trail/small/seroin (8).png",
  "/images/trail/small/seroin (9).png",
  "/images/trail/small/seroin (10).png",
  "/images/trail/small/seroin (11).png",
  "/images/trail/small/seroin (12).png"
];

const THRESHOLD = 80;
const VISIBLE_MS = 380;
const REMOVE_MS = 500;

export default function ImageTrail() {
  const heroRef = useRef(null);
  const trailRef = useRef(null);
  const imgIndexRef = useRef(0);
  const lastPosRef = useRef({ x: null, y: null });

  useEffect(() => {
    IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const hero = heroRef.current;
    const trail = trailRef.current;
    if (!hero || !trail) return;

    const spawnTrailImage = (x, y) => {
      const img = document.createElement('img');
      img.className = 'trail__img';
      img.src = IMAGES[imgIndexRef.current % IMAGES.length];
      imgIndexRef.current++;

      const rot = (Math.random() * 16 - 8).toFixed(1);
      img.style.left = x + 'px';
      img.style.top = y + 'px';

      trail.appendChild(img);

      requestAnimationFrame(() => {
        img.classList.add('is-visible');
        img.style.transform = `translate(-50%, -50%) scale(1) rotate(${rot}deg)`;
      });

      setTimeout(() => {
        img.classList.add('is-leaving');
        img.classList.remove('is-visible');
        setTimeout(() => {
          if (img.parentNode) {
            img.remove();
          }
        }, REMOVE_MS);
      }, VISIBLE_MS);
    };

    const handleMouseMove = (e) => {
      const rect = trail.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (lastPosRef.current.x === null) {
        lastPosRef.current = { x, y };
        return;
      }

      const dist = Math.hypot(x - lastPosRef.current.x, y - lastPosRef.current.y);

      if (dist > THRESHOLD) {
        spawnTrailImage(x, y);
        lastPosRef.current = { x, y };
      }
    };

    hero.addEventListener('mousemove', handleMouseMove);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero-trail" id="hero" ref={heroRef}>
      <div className="trail" id="trail" ref={trailRef}></div>

      <div className="hero__text">
        <span className="line1">Brands Products</span>
        <span className="line2">Slogan</span>
      </div>

      <span className="trail-hint">Move cursor to explore creative trail</span>
    </section>
  );
}
