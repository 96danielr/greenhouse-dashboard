import React from "react";

const ValveGraph = () => {
  return (
    <svg
      viewBox="0 0 300 150"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto" }}
    >
      {/* Línea principal */}
      <path
        d="M10 50 L50 50 L100 100 L200 100 L250 50 L290 50"
        stroke="#10279B"
        strokeWidth="3"
        fill="none"
      />

      {/* Válvulas en forma de "T" - Más altas */}
      {/* Válvula 1 */}
      <line x1="50" y1="35" x2="50" y2="50" stroke="#10279B" strokeWidth="4" />
      <line x1="43" y1="35" x2="57" y2="35" stroke="#10279B" strokeWidth="4" />

      {/* Válvula 2 */}
      <line x1="100" y1="85" x2="100" y2="100" stroke="#10279B" strokeWidth="4" />
      <line x1="93" y1="85" x2="107" y2="85" stroke="#10279B" strokeWidth="4" />

      {/* Válvula 3 */}
      <line x1="200" y1="85" x2="200" y2="100" stroke="#10279B" strokeWidth="4" />
      <line x1="193" y1="85" x2="207" y2="85" stroke="#10279B" strokeWidth="4" />

      {/* Válvula 4 */}
      <line x1="250" y1="35" x2="250" y2="50" stroke="#10279B" strokeWidth="4" />
      <line x1="243" y1="35" x2="257" y2="35" stroke="#10279B" strokeWidth="4" />

      {/* Líneas verticales */}
      <line x1="90" y1="10" x2="90" y2="140" stroke="#9DADD6" strokeWidth="3" />
      <line x1="210" y1="10" x2="210" y2="140" stroke="#9DADD6" strokeWidth="3" />

      {/* Texto "G.H" */}
      <text
        x="150"
        y="75"
        textAnchor="middle"
        fontSize="28px"
        fontWeight="bold"
        fill="#000"
      >
        G.H
      </text>
    </svg>
  );
};

export default ValveGraph;
