// "use client"

// import { useEffect } from 'react';

// const GlowCard = ({ children , identifier}) => {
//   useEffect(() => {
    
//     const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
//     const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

//     const CONFIG = {
//       proximity: 40,
//       spread: 80,
//       blur: 12,
//       gap: 32,
//       vertical: false,
//       opacity: 0,
//     };

//     const UPDATE = (event) => {
//       for (const CARD of CARDS) {
//         const CARD_BOUNDS = CARD.getBoundingClientRect();

//         if (
//           event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
//           event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
//           event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
//           event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
//         ) {
//           CARD.style.setProperty('--active', 1);
//         } else {
//           CARD.style.setProperty('--active', CONFIG.opacity);
//         }

//         const CARD_CENTER = [
//           CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
//           CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
//         ];

//         let ANGLE =
//           (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
//             180) /
//           Math.PI;

//         ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

//         CARD.style.setProperty('--start', ANGLE + 90);
//       }
//     };

//     document.body.addEventListener('pointermove', UPDATE);

//     const RESTYLE = () => {
//       CONTAINER.style.setProperty('--gap', CONFIG.gap);
//       CONTAINER.style.setProperty('--blur', CONFIG.blur);
//       CONTAINER.style.setProperty('--spread', CONFIG.spread);
//       CONTAINER.style.setProperty(
//         '--direction',
//         CONFIG.vertical ? 'column' : 'row'
//       );
//     };

//     RESTYLE();
//     UPDATE();

//     // Cleanup event listener
//     return () => {
//       document.body.removeEventListener('pointermove', UPDATE);
//     };
//   }, [identifier]);

//   return (
//     <div className={`glow-container-${identifier} glow-container`}>
//       <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
//         <div className="glows"></div>
//         {children}
//       </article>
//     </div>
//   );
// };

// export default GlowCard;


"use client";

import { useEffect, useRef } from 'react';

const GlowCard = ({ children, identifier }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure this only runs on client side
    if (typeof window === 'undefined' || !containerRef.current) return;

    const CONTAINER = containerRef.current;
    const CARDS = Array.from(document.querySelectorAll(`.glow-card-${identifier}`));

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const handlePointerMove = (event) => {
      CARDS.forEach((CARD) => {
        const CARD_BOUNDS = CARD.getBoundingClientRect();
        const isActive = (
          event.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        );
        
        CARD.style.setProperty('--active', isActive ? '1' : CONFIG.opacity.toString());

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE = (Math.atan2(event.y - CARD_CENTER[1], event.x - CARD_CENTER[0]) * 180 / Math.PI);
        CARD.style.setProperty('--start', (ANGLE < 0 ? ANGLE + 360 : ANGLE) + 90);
      });
    };

    const RESTYLE = () => {
      CONTAINER.style.setProperty('--gap', CONFIG.gap);
      CONTAINER.style.setProperty('--blur', CONFIG.blur);
      CONTAINER.style.setProperty('--spread', CONFIG.spread);
      CONTAINER.style.setProperty('--direction', CONFIG.vertical ? 'column' : 'row');
    };

    RESTYLE();
    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [identifier]);

  return (
    <div ref={containerRef} className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;