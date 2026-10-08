export default function WorkArt({
  kind = "vision",
}: {
  kind?: "vision" | "nutrition" | "code";
}) {
  if (kind === "nutrition")
    return (
      <svg viewBox="0 0 480 320" aria-hidden="true" className="work-art-svg">
        <defs>
          <pattern
            id="nutri-grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M24 0H0V24"
              fill="none"
              stroke="currentColor"
              strokeWidth=".4"
              opacity=".15"
            />
          </pattern>
        </defs>
        <rect width="480" height="320" fill="url(#nutri-grid)" />
        <circle
          cx="240"
          cy="160"
          r="108"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity=".25"
        />
        <circle
          cx="240"
          cy="160"
          r="86"
          fill="none"
          stroke="currentColor"
          opacity=".4"
        />
        <ellipse
          cx="216"
          cy="132"
          rx="37"
          ry="24"
          transform="rotate(-25 216 132)"
          fill="currentColor"
          opacity=".45"
        />
        <ellipse
          cx="271"
          cy="180"
          rx="28"
          ry="44"
          transform="rotate(22 271 180)"
          fill="currentColor"
          opacity=".2"
        />
        <path
          d="M178 108h77v59h-77zM239 139h65v88h-65z"
          stroke="currentColor"
          fill="none"
          strokeDasharray="3 3"
        />
        <circle cx="274" cy="118" r="11" fill="currentColor" opacity=".7" />
        <text x="25" y="30">
          NUTRISIGHT / COMPUTER VISION
        </text>
        <text x="25" y="296">
          RECOGNITION → NUTRITION INSIGHT
        </text>
      </svg>
    );
  if (kind === "code")
    return (
      <svg viewBox="0 0 480 320" aria-hidden="true" className="work-art-svg">
        <g fill="none" stroke="currentColor" opacity=".22">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              d={`M${75 + i * 25} ${75 + i * 8}l130 -38 160 94 -130 38z`}
            />
          ))}
        </g>
        <path
          d="M158 146l-28 21 28 21m160 -42 28 21 -28 21m-61 -45 -20 90"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <text x="25" y="30">
          IDEA → IMPLEMENTATION
        </text>
        <text x="25" y="295">
          SOFTWARE / INTERACTION / SYSTEMS
        </text>
      </svg>
    );
  return (
    <svg viewBox="0 0 480 320" aria-hidden="true" className="work-art-svg">
      <defs>
        <pattern
          id="vision-grid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M20 0H0V20"
            fill="none"
            stroke="currentColor"
            strokeWidth=".5"
            opacity=".13"
          />
        </pattern>
      </defs>
      <rect width="480" height="320" fill="url(#vision-grid)" />
      <g stroke="currentColor" fill="none">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <ellipse
            key={i}
            cx="240"
            cy="155"
            rx={38 + i * 13}
            ry={90 - i * 7}
            opacity={0.18 + i * 0.07}
          />
        ))}
        <path
          d="M134 81V58h23m165 0h23v23m0 147v23h-23m-165 0h-23v-23"
          strokeWidth="2"
        />
        <path className="scan-line" d="M125 151h230" strokeWidth="1" />
      </g>
      <circle cx="240" cy="155" r="5" fill="currentColor" />
      <text x="25" y="30">
        DEEPSHIELD / VISUAL REPRESENTATION
      </text>
      <text x="25" y="296">
        VISION × FREQUENCY × TEMPORAL MODELING
      </text>
    </svg>
  );
}
