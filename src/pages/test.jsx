// App.js
import React from "react";
import { motion } from "framer-motion";

const services = [
  "Loan",
  "Insurance",
  "FD",
  "Stocks",
  "Credit Cards",
  "Accounts",
];

const radius = 150;
const centerX = 200;
const centerY = 200;

const polarToCartesian = (angleDeg, radius) => {
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: centerX + radius * Math.cos(angleRad),
    y: centerY + radius * Math.sin(angleRad),
  };
};

export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg width="450" height="450">
        {/* Outer Circle */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius + 40}
          stroke="white"
          strokeWidth="2"
          fill="none"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        />

        {/* Inner Circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          stroke="white"
          strokeWidth="2"
          fill="none"
        />

        {/* Service Circles with animated lines to center */}
        {services.map((service, i) => {
          const angle = (360 / services.length) * i - 90;
          const { x, y } = polarToCartesian(angle, radius + 20);

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.3, duration: 1, type: "spring" }}
            >
              {/* Animated Connection Line */}
              <motion.line
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="#38bdf8"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: i * 0.2 }}
              />

              {/* Service Circle */}
              <motion.circle
                cx={x}
                cy={y}
                r="20"
                fill="#1e293b"
                stroke="#38bdf8"
                strokeWidth="1.5"
                whileHover={{ scale: 1.3, fill: "#0ea5e9" }}
              />

              {/* Service Text */}
              <motion.text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fontSize="8"
                fill="white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.4 }}
              >
                {service}
              </motion.text>
            </motion.g>
          );
        })}

        {/* Central Animated Person (Pulsing) */}
        <motion.g
          animate={{ scale: [1, 1.15, 0.95, 1], rotate: [0, 360] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx={centerX} cy={centerY - 40} r={10} fill="#facc15" /> {/* Head */}
          <polygon
            points={`
              ${centerX - 15},${centerY - 20}
              ${centerX + 15},${centerY - 20}
              ${centerX + 10},${centerY + 10}
              ${centerX - 10},${centerY + 10}
            `}
            fill="#38bdf8"
          />
          <line x1={centerX - 20} y1={centerY - 5} x2={centerX - 5} y2={centerY + 5} stroke="white" strokeWidth="2" />
          <line x1={centerX + 20} y1={centerY - 5} x2={centerX + 5} y2={centerY + 5} stroke="white" strokeWidth="2" />
          <line x1={centerX - 5} y1={centerY + 10} x2={centerX - 5} y2={centerY + 30} stroke="white" strokeWidth="2" />
          <line x1={centerX + 5} y1={centerY + 10} x2={centerX + 5} y2={centerY + 30} stroke="white" strokeWidth="2" />
        </motion.g>
      </svg>
    </div>
  );
}