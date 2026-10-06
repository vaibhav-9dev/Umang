import React, { useEffect, useState, useRef } from 'react';
import sportsLogo from '../assets/images/umang_logo_2026_official_1790845519583.jpg';

interface UmangIntroAnimationProps {
  onComplete?: () => void;
}

/**
 * Clean, fast intro animation inspired by Umang 2025's letter-pop style.
 * Letters U-M-A-N-G spring in one by one, year '26 follows, logo pulses,
 * then the whole overlay fades out. Total runtime ≈ 2.2 s.
 */
const UmangIntroAnimation: React.FC<UmangIntroAnimationProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'visible' | 'fading' | 'gone'>('visible');
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    // Letters finish animating at ~1 300 ms (5 letters × 120 ms delay + 520 ms duration)
    // Hold briefly, then fade out
    const fadeTimer = setTimeout(() => setPhase('fading'), 1700);
    const doneTimer = setTimeout(() => {
      setPhase('gone');
      onCompleteRef.current?.();
    }, 2400); // 1700 + 700 ms fade

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <>
      {/* ── keyframe styles injected inline so no external CSS file is needed ── */}
      <style>{`
        @keyframes umang-pop-up {
          0%   { transform: translateY(30px) scale(0.92); opacity: 0; }
          60%  { transform: translateY(-7px)  scale(1.08); opacity: 1; }
          100% { transform: translateY(0)     scale(1);    opacity: 1; }
        }
        @keyframes umang-year-up {
          0%   { transform: translateY(36px) scale(0.96); opacity: 0; }
          60%  { transform: translateY(-5px)  scale(1.04); opacity: 1; }
          100% { transform: translateY(0)     scale(1);    opacity: 1; }
        }
        @keyframes umang-logo-pulse {
          0%   { transform: scale(0.7);  opacity: 0; }
          60%  { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1);    opacity: 1; }
        }
        @keyframes umang-sub-fade {
          0%   { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes umang-line-expand {
          0%   { width: 0; opacity: 0; }
          100% { width: 60%; opacity: 1; }
        }
        @keyframes umang-particle-float {
          0%   { transform: translateY(0px) scale(1);   opacity: 0.8; }
          50%  { transform: translateY(-18px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0px) scale(1);   opacity: 0.8; }
        }

        .umang-letter {
          display: inline-block;
          transform: translateY(30px) scale(0.92);
          opacity: 0;
          animation: umang-pop-up 520ms cubic-bezier(0.2, 0.9, 0.25, 1) forwards;
          will-change: transform, opacity;
        }
        .umang-year {
          display: inline-block;
          transform: translateY(36px) scale(0.96);
          opacity: 0;
          animation: umang-year-up 520ms cubic-bezier(0.2, 0.9, 0.25, 1) forwards;
          will-change: transform, opacity;
        }
        .umang-logo-in {
          animation: umang-logo-pulse 600ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }
        .umang-sub-in {
          animation: umang-sub-fade 480ms ease forwards;
          opacity: 0;
        }
        .umang-line-in {
          animation: umang-line-expand 600ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          width: 0;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .umang-letter, .umang-year, .umang-logo-in, .umang-sub-in, .umang-line-in {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
            width: 60% !important;
          }
        }
      `}</style>

      {/* ── Overlay ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(ellipse at 60% 40%, #0B1D54 0%, #01040E 55%, #020617 100%)',
          transition: 'opacity 700ms ease, transform 700ms ease',
          opacity: phase === 'fading' ? 0 : 1,
          pointerEvents: phase === 'fading' ? 'none' : 'auto',
          overflow: 'hidden',
        }}
      >
        {/* Subtle golden radial glow behind everything */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70vw',
            height: '70vw',
            maxWidth: '600px',
            maxHeight: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,184,28,0.09) 0%, transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        {/* Floating gold particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: i % 2 === 0 ? '3px' : '2px',
              height: i % 2 === 0 ? '3px' : '2px',
              borderRadius: '50%',
              background: '#F5B81C',
              opacity: 0.6,
              left: `${10 + i * 11}%`,
              top: `${20 + (i % 3) * 20}%`,
              animation: `umang-particle-float ${2 + i * 0.3}s ease-in-out ${i * 0.25}s infinite`,
              boxShadow: '0 0 6px rgba(245,184,28,0.8)',
            }}
          />
        ))}

        {/* Logo */}
        <div
          className="umang-logo-in"
          style={{ animationDelay: '80ms', marginBottom: '28px' }}
        >
          <img
            src={sportsLogo}
            alt="UMANG 26"
            draggable={false}
            style={{
              width: 'clamp(72px, 20vw, 120px)',
              height: 'clamp(72px, 20vw, 120px)',
              borderRadius: '50%',
              objectFit: 'cover',
              display: 'block',
              boxShadow: '0 0 32px rgba(245,184,28,0.45), 0 0 60px rgba(11,29,84,0.6)',
              border: '2px solid rgba(245,184,28,0.35)',
            }}
          />
        </div>

        {/* UMANG letters */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 'clamp(6px, 1.5vw, 16px)',
            marginBottom: '4px',
            lineHeight: 1,
          }}
        >
          {['U', 'M', 'A', 'N', 'G'].map((letter, i) => (
            <span
              key={letter}
              className="umang-letter"
              style={{
                animationDelay: `${220 + i * 110}ms`,
                fontSize: 'clamp(3rem, 10vw, 7rem)',
                fontFamily: "'Cinzel', 'Georgia', serif",
                fontWeight: 800,
                letterSpacing: '0.04em',
                background: 'linear-gradient(135deg, #FFFDF0 0%, #FFC72C 35%, #F5B81C 70%, #C99008 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'none',
                filter: 'drop-shadow(0 4px 12px rgba(245,184,28,0.5))',
                userSelect: 'none',
              }}
            >
              {letter}
            </span>
          ))}

          {/* Year */}
          <span
            className="umang-year"
            style={{
              animationDelay: '820ms',
              fontSize: 'clamp(2rem, 6vw, 4.5rem)',
              fontFamily: "'Cinzel', 'Georgia', serif",
              fontWeight: 700,
              color: 'rgba(255,255,255,0.92)',
              marginLeft: 'clamp(4px, 0.8vw, 10px)',
              letterSpacing: '0.03em',
              textShadow: '0 2px 12px rgba(245,184,28,0.3)',
              userSelect: 'none',
              alignSelf: 'flex-end',
              paddingBottom: '4px',
            }}
          >
            '26
          </span>
        </div>

        {/* Gold divider line */}
        <div
          className="umang-line-in"
          style={{
            animationDelay: '980ms',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #F5B81C, #FFC72C, #F5B81C, transparent)',
            borderRadius: '2px',
            margin: '14px auto 16px',
            boxShadow: '0 0 10px rgba(245,184,28,0.5)',
          }}
        />

        {/* Subtitle */}
        <p
          className="umang-sub-in"
          style={{
            animationDelay: '1100ms',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 'clamp(0.7rem, 2.2vw, 0.9rem)',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.55)',
            textAlign: 'center',
            userSelect: 'none',
            padding: '0 16px',
          }}
        >
          IIIT Bangalore · Annual Sports Festival
        </p>
      </div>
    </>
  );
};

export { UmangIntroAnimation };
export default UmangIntroAnimation;
