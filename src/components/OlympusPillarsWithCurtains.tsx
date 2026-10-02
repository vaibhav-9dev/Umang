import React, { useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import sportsLogo from '../assets/images/umang_logo_2026_official_1790845519583.jpg';

/*
 * Put these four images in:
 *
 * src/assets/images/
 *
 * basketball.png = image 1
 * badminton.png  = image 2
 * football.png   = image 3
 * volleyball.png = image 4
 */
import basketball from '../assets/images/basketball.png';
import badminton from '../assets/images/badminton.png';
import football from '../assets/images/football.png';
import volleyball from '../assets/images/volleyball.png';

interface OlympusPillarsWithCurtainsProps {
  onOpened?: () => void;
}

/* ========================================================================= */
/* SPORT FIGURE                                                              */
/* ========================================================================= */

type SportPosition =
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom';

const SportFigure: React.FC<{
  image: string;
  position: SportPosition;
  isOpening: boolean;
}> = ({ image, position, isOpening }) => {
  const isLeft = position.startsWith('left');
  const isTop = position.endsWith('top');

  return (
    <div
      className={`
        absolute
        z-[70]

        ${isLeft ? 'left-[7%]' : 'right-[7%]'}
        ${isTop ? 'top-[15%]' : 'bottom-[13%]'}

        w-[115px]
        h-[150px]

        sm:w-[135px]
        sm:h-[175px]

        md:w-[155px]
        md:h-[200px]

        lg:w-[175px]
        lg:h-[225px]

        xl:w-[195px]
        xl:h-[250px]

        pointer-events-none
        select-none

        transform-gpu
        will-change-transform

        transition-all
        duration-[1800ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]

        ${
          isOpening
            ? isLeft
              ? '-translate-x-[125%] opacity-0'
              : 'translate-x-[125%] opacity-0'
            : 'translate-x-0 opacity-100'
        }
      `}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="
          block
          h-full
          w-full
          object-contain

          drop-shadow-[0_8px_18px_rgba(0,0,0,0.85)]
        "
      />
    </div>
  );
};

/* ========================================================================= */
/* CURTAIN                                                                   */
/* ========================================================================= */

const Curtain: React.FC<{
  side: 'left' | 'right';
  isOpening: boolean;
}> = ({ side, isOpening }) => {
  const isLeft = side === 'left';

  return (
    <div
      className={`
        absolute
        inset-y-0

        ${isLeft ? 'left-0' : 'right-0'}

        w-1/2

        z-[50]

        overflow-hidden

        transform-gpu
        will-change-transform

        transition-transform
        duration-[1800ms]
        ease-[cubic-bezier(0.16,1,0.3,1)]

        ${
          isOpening
            ? isLeft
              ? '-translate-x-[103%]'
              : 'translate-x-[103%]'
            : 'translate-x-0'
        }
      `}
    >
      <div
        className={`
          relative
          h-full
          w-full
          overflow-hidden

          ${
            isLeft
              ? 'bg-gradient-to-r from-[#C9B88F] via-[#F8F3E6] to-[#D9C8A5]'
              : 'bg-gradient-to-l from-[#C9B88F] via-[#F8F3E6] to-[#D9C8A5]'
          }

          ${
            isLeft
              ? 'shadow-[25px_0_70px_rgba(0,0,0,0.90)]'
              : 'shadow-[-25px_0_70px_rgba(0,0,0,0.90)]'
          }
        `}
      >
        {/* Silk folds */}
        <div
          className="
            absolute
            inset-0
            opacity-90
            pointer-events-none

            bg-[repeating-linear-gradient(
              90deg,
              rgba(111,87,48,0.18)_0px,
              rgba(111,87,48,0.18)_9px,
              rgba(255,255,255,0.52)_19px,
              rgba(255,255,255,0.52)_31px,
              rgba(164,139,96,0.22)_42px,
              rgba(255,255,255,0.38)_55px,
              rgba(108,83,46,0.18)_67px,
              rgba(108,83,46,0.18)_75px
            )]
          "
        />

        {/* =============================================================== */}
        {/* LEFT CURTAIN: 2 = BADMINTON, 4 = VOLLEYBALL                    */}
        {/* RIGHT CURTAIN: 1 = BASKETBALL, 3 = FOOTBALL                    */}
        {/* =============================================================== */}

        {isLeft ? (
          <>
            <SportFigure
              image={badminton}
              position="left-top"
              isOpening={isOpening}
            />

            <SportFigure
              image={volleyball}
              position="left-bottom"
              isOpening={isOpening}
            />
          </>
        ) : (
          <>
            <SportFigure
              image={basketball}
              position="right-top"
              isOpening={isOpening}
            />

            <SportFigure
              image={football}
              position="right-bottom"
              isOpening={isOpening}
            />
          </>
        )}

        {/* Soft highlight over the curtain */}
        <div
          className={`
            absolute
            inset-0
            pointer-events-none

            ${isLeft ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}

            from-transparent
            via-white/25
            to-transparent

            blur-xl
          `}
        />

        {/* Inner fold */}
        <div
          className={`
            absolute
            inset-y-0

            ${isLeft ? 'right-0' : 'left-0'}

            w-[115px]

            ${isLeft ? 'bg-gradient-to-l' : 'bg-gradient-to-r'}

            from-[#60492B]/45
            via-[#BBA67A]/20
            to-transparent

            blur-lg

            pointer-events-none
          `}
        />

        {/* Gold center trim */}
        <div
          className={`
            absolute
            top-0
            bottom-0

            ${isLeft ? 'right-0' : 'left-0'}

            w-[4px]

            bg-gradient-to-b
            from-[#FFF6B8]
            via-[#D19A13]
            to-[#FFF0A0]

            shadow-[0_0_15px_rgba(245,184,28,0.75)]

            pointer-events-none
          `}
        />

        {/* Gold diamonds */}
        <div
          className={`
            absolute
            top-0
            bottom-10

            ${isLeft ? 'right-[7px]' : 'left-[7px]'}

            w-3

            flex
            flex-col
            items-center
            justify-around

            opacity-65
            pointer-events-none
          `}
        >
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              className="
                w-2
                h-2
                rotate-45
                border
                border-[#B67F05]
                bg-[#FFE676]
                shadow-[0_0_6px_rgba(245,184,28,0.5)]
              "
            />
          ))}
        </div>

        {/* Bottom gold hem */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-9

            bg-gradient-to-t
            from-[#604000]
            via-[#C89612]
            to-[#FFE98A]

            border-t
            border-[#FFF5C7]

            shadow-[0_-5px_20px_rgba(0,0,0,0.4)]

            pointer-events-none
          "
        >
          <div className="h-full flex items-end justify-around px-2">
            {Array.from({ length: 40 }).map((_, index) => (
              <span
                key={index}
                className="
                  block
                  w-[2px]
                  h-5
                  rounded-b-full

                  bg-gradient-to-b
                  from-[#FFE990]
                  via-[#D69D18]
                  to-[#593D00]
                "
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ========================================================================= */
/* MAIN COMPONENT                                                            */
/* ========================================================================= */

export const OlympusPillarsWithCurtains: React.FC<
  OlympusPillarsWithCurtainsProps
> = ({ onOpened }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [showReplayHint, setShowReplayHint] = useState(false);

  const openTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const finishTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerCurtainOpen = () => {
    if (isOpening || isOpen) return;

    setIsOpening(true);

    if (finishTimerRef.current) {
      clearTimeout(finishTimerRef.current);
    }

    finishTimerRef.current = setTimeout(() => {
      setIsOpen(true);
      onOpened?.();
    }, 1800);
  };

  useEffect(() => {
    openTimerRef.current = setTimeout(() => {
      triggerCurtainOpen();
    }, 1800);

    return () => {
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current);
      }

      if (finishTimerRef.current) {
        clearTimeout(finishTimerRef.current);
      }
    };
  }, []);

  const handleReplayCurtains = () => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
    }

    if (finishTimerRef.current) {
      clearTimeout(finishTimerRef.current);
    }

    setIsOpen(false);
    setIsOpening(false);
    setShowReplayHint(false);

    openTimerRef.current = setTimeout(() => {
      triggerCurtainOpen();
    }, 400);
  };

  return (
    <>
      {/* ================================================================= */}
      {/* ENTRANCE OVERLAY                                                  */}
      {/* ================================================================= */}

      <div
        className={`
          fixed
          inset-0
          z-[9999]

          overflow-hidden

          bg-[#01040E]

          transform-gpu

          transition-opacity
          duration-[1000ms]
          ease-out

          ${
            isOpen
              ? 'opacity-0 pointer-events-none'
              : 'opacity-100 pointer-events-auto'
          }
        `}
      >
        {/* Dark chamber */}
        <div className="absolute inset-0 bg-[#01040E]">
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2

              w-[45vw]
              h-[65vh]

              rounded-full

              bg-[#F5B81C]/[0.045]

              blur-[110px]
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2

              w-[70vw]
              h-[25vh]

              bg-[radial-gradient(
                ellipse_at_center,
                rgba(245,184,28,0.15),
                transparent_70%
              )]

              blur-2xl
            "
          />

          <div
            className="
              absolute
              inset-0

              bg-[radial-gradient(
                ellipse_at_center,
                transparent 20%,
                rgba(1,4,14,0.15) 55%,
                rgba(1,4,14,0.88) 100%
              )]
            "
          />
        </div>

        {/* Curtains */}
        <Curtain side="left" isOpening={isOpening} />
        <Curtain side="right" isOpening={isOpening} />

        {/* =============================================================== */}
        {/* CENTER LOGO - USE THE COMPLETE LOGO IMAGE                       */}
        {/* =============================================================== */}

        <div
          onClick={triggerCurtainOpen}
          className={`
            absolute
            left-1/2
            top-1/2

            -translate-x-1/2
            -translate-y-1/2

            z-[200]

            w-[clamp(82px,30vw,190px)]
            h-[clamp(82px,30vw,190px)]

            max-w-[44vw]
            max-h-[44vw]

            aspect-square
            shrink-0

            cursor-pointer

            transition-all
            duration-700
            ease-out

            ${
              isOpening
                ? 'scale-75 opacity-0 pointer-events-none'
                : 'scale-100 opacity-100'
            }
          `}
          title="Click to enter"
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (
              event.key === 'Enter' ||
              event.key === ' '
            ) {
              event.preventDefault();
              triggerCurtainOpen();
            }
          }}
        >
          {/* The supplied logo is already a complete circular artwork.
              Using it directly prevents the internal UMANG artwork from
              being cropped by the previous UmangLogo wrapper. */}
          <img
            src={sportsLogo}
            alt="UMANG 26 sports logo"
            draggable={false}
            className="
              block

              w-full
              h-full

              max-w-full
              max-h-full

              aspect-square

              object-cover

              rounded-full

              select-none
              pointer-events-none

              drop-shadow-[0_0_28px_rgba(245,184,28,0.45)]
            "
          />

          {/* Additional soft glow, kept behind the complete image */}
          <div
            className="
              absolute
              inset-[-clamp(10px,3vw,24px)]
              -z-10

              rounded-full

              bg-[#F5B81C]/10

              blur-2xl

              pointer-events-none
            "
          />
        </div>

      </div>
    </>
  );
};

export default OlympusPillarsWithCurtains;
