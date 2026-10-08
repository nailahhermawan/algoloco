import React from 'react';

export interface RailConstructionSceneProps {
  className?: string;
}

/**
 * RailConstructionScene renders the complete railway construction vector illustration
 * on the folded map in the UnderConstruction page.
 *
 * Visual anatomy matches docs/design/under-construction.png and user reference screenshot:
 * - Cartographic wavy terrain underlay (pastel green)
 * - HUB 01 station ticket tag at the start of the line
 * - Parallel teal rail tracks (#2A9D8F) with dark crossties (#2B2B2B)
 * - Origami locomotive engine idled before the construction work
 * - Red signal post with red lamp and semaphore arm
 * - Construction barrier with diagonal hazard stripes
 * - Yellow diamond warning sign ('WORK')
 * - Surveyor tripod with theodolite instrument
 * - Construction worker figure with yellow hardhat
 * - Dashed unfinished ghost tracks continuing off to the right with red survey marker
 */
export const RailConstructionScene: React.FC<RailConstructionSceneProps> = ({ className = '' }) => {
  // Crossties for solid track from x=106 to x=372 (step 14)
  const solidCrossties = [
    106, 120, 134, 148, 162, 176, 190, 204, 218, 232, 246, 260, 274, 288, 302, 316, 330, 344, 358, 372,
  ];

  // Crossties for unfinished dashed track from x=512 to x=582 (step 14)
  const ghostCrossties = [512, 526, 540, 554, 568, 582];

  return (
    <svg
      viewBox="0 0 760 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Diagonal hazard stripe pattern for the barrier board */}
        <pattern
          id="hazardStripes"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect width="5" height="10" fill="#E8604C" />
          <rect x="5" width="5" height="10" fill="#FFFFFF" />
        </pattern>
        {/* Clip path for barrier board */}
        <clipPath id="barrierClip">
          <rect x="393" y="74" width="42" height="15" rx="1.5" />
        </clipPath>
      </defs>

      {/* 1. SOFT CARTOGRAPHIC TERRAIN WASH */}
      <path
        d="M -20 95 Q 180 50, 380 95 T 780 85 L 780 135 Q 580 145, 380 115 T -20 120 Z"
        fill="#d8e8dc"
        opacity="0.85"
      />

      {/* 2. HUB 01 STATION TAG */}
      <g>
        <rect
          x="36"
          y="84"
          width="54"
          height="24"
          rx="2"
          fill="#FAF6EC"
          stroke="#2B2B2B"
          strokeWidth="1.5"
        />
        <text
          x="63"
          y="100"
          textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="10"
          fontWeight="bold"
          fill="#2B2B2B"
          letterSpacing="0.05em"
        >
          HUB 01
        </text>
      </g>

      {/* 3. SOLID RAIL TRACK */}
      <g>
        {/* Crossties crossing both rails */}
        {solidCrossties.map((x) => (
          <line
            key={`solid-tie-${x}`}
            x1={x}
            y1="85"
            x2={x}
            y2="107"
            stroke="#2B2B2B"
            strokeWidth="2.5"
          />
        ))}

        {/* Two parallel teal rails */}
        <line x1="90" y1="90" x2="380" y2="90" stroke="#2A9D8F" strokeWidth="3" />
        <line x1="90" y1="102" x2="380" y2="102" stroke="#2A9D8F" strokeWidth="3" />
      </g>

      {/* 4. PAPER ORIGAMI LOCOMOTIVE (Idling on the track) */}
      <g>
        {/* Main white cab */}
        <rect
          x="180"
          y="64"
          width="46"
          height="23"
          rx="2"
          fill="#FFFFFF"
          stroke="#2B2B2B"
          strokeWidth="2"
        />
        {/* Paper crease shadow polygon */}
        <polygon points="180,75 196,64 196,87" fill="#EAE2CE" />
        {/* Chimney / smoke pipe */}
        <polygon
          points="187,54 193,54 192,64 188,64"
          fill="#E8604C"
          stroke="#2B2B2B"
          strokeWidth="1.5"
        />
        {/* Window cut */}
        <rect x="206" y="68" width="11" height="9" rx="1" fill="#2B2B2B" />
        {/* 3 wheels resting on the top rail */}
        <circle cx="189" cy="89" r="4.5" fill="#2B2B2B" />
        <circle cx="189" cy="89" r="1.5" fill="#FFFFFF" />
        <circle cx="203" cy="89" r="4.5" fill="#2B2B2B" />
        <circle cx="203" cy="89" r="1.5" fill="#FFFFFF" />
        <circle cx="217" cy="89" r="4.5" fill="#2B2B2B" />
        <circle cx="217" cy="89" r="1.5" fill="#FFFFFF" />
      </g>

      {/* 5. RED SIGNAL POST */}
      <g>
        {/* Mast */}
        <rect x="382" y="44" width="3.5" height="62" rx="1" fill="#2B2B2B" />
        {/* Signal head */}
        <circle cx="383.75" cy="48" r="7.5" fill="#2B2B2B" />
        {/* Red light */}
        <circle cx="383.75" cy="48" r="5" fill="#E8604C" />
        {/* Semaphore arm pointing right */}
        <polygon
          points="385,46 406,46 402,50 385,50"
          fill="#E8604C"
          stroke="#2B2B2B"
          strokeWidth="1"
        />
        <line x1="392" y1="46" x2="392" y2="50" stroke="#FFFFFF" strokeWidth="1.5" />
      </g>

      {/* 6. CONSTRUCTION BARRIER */}
      <g>
        {/* Barrier A-frame legs */}
        <line x1="398" y1="78" x2="395" y2="108" stroke="#2B2B2B" strokeWidth="2.5" />
        <line x1="404" y1="78" x2="407" y2="108" stroke="#2B2B2B" strokeWidth="2.5" />
        <line x1="426" y1="78" x2="423" y2="108" stroke="#2B2B2B" strokeWidth="2.5" />
        <line x1="432" y1="78" x2="435" y2="108" stroke="#2B2B2B" strokeWidth="2.5" />

        {/* Hazard striped board */}
        <rect
          x="393"
          y="74"
          width="42"
          height="15"
          rx="1.5"
          fill="url(#hazardStripes)"
          stroke="#2B2B2B"
          strokeWidth="1.8"
        />
      </g>

      {/* 7. WARNING DIAMOND SIGN ('WORK') */}
      <g>
        {/* Post */}
        <line x1="452" y1="64" x2="452" y2="106" stroke="#2B2B2B" strokeWidth="2" />
        {/* Diamond */}
        <g transform="translate(452, 58) rotate(45)">
          <rect
            x="-9"
            y="-9"
            width="18"
            height="18"
            rx="2"
            fill="#E9B44C"
            stroke="#2B2B2B"
            strokeWidth="1.5"
          />
          <text
            x="0"
            y="3"
            textAnchor="middle"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="5.5"
            fontWeight="900"
            fill="#2B2B2B"
            letterSpacing="-0.02em"
          >
            WORK
          </text>
        </g>
      </g>

      {/* 8. SURVEYOR TRIPOD & THEODOLITE */}
      <g>
        {/* 3 tripod legs */}
        <line x1="472" y1="76" x2="464" y2="108" stroke="#2B2B2B" strokeWidth="1.8" />
        <line x1="472" y1="76" x2="472" y2="108" stroke="#2B2B2B" strokeWidth="1.8" />
        <line x1="472" y1="76" x2="480" y2="108" stroke="#2B2B2B" strokeWidth="1.8" />
        {/* Theodolite body */}
        <rect
          x="468"
          y="70"
          width="8"
          height="6"
          rx="1"
          fill="#E9B44C"
          stroke="#2B2B2B"
          strokeWidth="1"
        />
        <rect x="470" y="67" width="4" height="3" fill="#2B2B2B" />
      </g>

      {/* 9. WORKER FIGURE */}
      <g>
        {/* Cone body */}
        <polygon
          points="485,108 495,108 490,78"
          fill="#3D5A98"
          stroke="#2B2B2B"
          strokeWidth="1.5"
        />
        {/* Head */}
        <circle cx="490" cy="73" r="4.5" fill="#FAF6EC" stroke="#2B2B2B" strokeWidth="1.5" />
        {/* Yellow hardhat */}
        <path
          d="M 483 72 Q 490 65 497 72 Z"
          fill="#E9B44C"
          stroke="#2B2B2B"
          strokeWidth="1.5"
        />
      </g>

      {/* 10. UNFINISHED DASHED GHOST TRACK */}
      <g>
        {/* Dashed crossties */}
        {ghostCrossties.map((x) => (
          <line
            key={`ghost-tie-${x}`}
            x1={x}
            y1="85"
            x2={x}
            y2="107"
            stroke="#2B2B2B"
            strokeWidth="2"
            strokeDasharray="3,3"
            opacity="0.35"
          />
        ))}

        {/* Dashed parallel rails */}
        <line
          x1="505"
          y1="90"
          x2="590"
          y2="90"
          stroke="#2B2B2B"
          strokeWidth="2"
          strokeDasharray="5,4"
          opacity="0.4"
        />
        <line
          x1="505"
          y1="102"
          x2="590"
          y2="102"
          stroke="#2B2B2B"
          strokeWidth="2"
          strokeDasharray="5,4"
          opacity="0.4"
        />

        {/* Red survey marker flag at the end */}
        <line x1="590" y1="74" x2="590" y2="106" stroke="#2B2B2B" strokeWidth="1.5" />
        <polygon points="590,74 603,80 590,86" fill="#E8604C" />
      </g>
    </svg>
  );
};

export default RailConstructionScene;
