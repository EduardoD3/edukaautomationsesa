interface CircuitBackgroundProps {
  intensity?: "low" | "medium" | "high";
  animated?: boolean;
}

export const CircuitBackground = ({ intensity = "low", animated = false }: CircuitBackgroundProps) => {
  const opacity = {
    low: "0.05",
    medium: "0.1",
    high: "0.15",
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className={`absolute inset-0 w-full h-full ${animated ? "animate-pulse-glow" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: opacity[intensity] }}
      >
        <defs>
          <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* Horizontal lines */}
            <line x1="0" y1="25" x2="30" y2="25" stroke="url(#gradient)" strokeWidth="1" />
            <line x1="70" y1="25" x2="100" y2="25" stroke="url(#gradient)" strokeWidth="1" />
            
            {/* Vertical lines */}
            <line x1="30" y1="0" x2="30" y2="25" stroke="url(#gradient)" strokeWidth="1" />
            <line x1="70" y1="25" x2="70" y2="50" stroke="url(#gradient)" strokeWidth="1" />
            
            {/* Diagonal connectors */}
            <line x1="30" y1="25" x2="50" y2="50" stroke="url(#gradient)" strokeWidth="1" />
            <line x1="50" y1="50" x2="70" y2="25" stroke="url(#gradient)" strokeWidth="1" />
            
            {/* Circuit nodes */}
            <circle cx="30" cy="25" r="2" fill="url(#gradient)" />
            <circle cx="70" cy="25" r="2" fill="url(#gradient)" />
            <circle cx="50" cy="50" r="2" fill="url(#gradient)" />
            
            {/* Additional decorative elements */}
            <rect x="28" y="48" width="4" height="4" fill="url(#gradient)" opacity="0.6" />
            <rect x="68" y="23" width="4" height="4" fill="url(#gradient)" opacity="0.6" />
          </pattern>
          
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#9333EA" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>

      {/* Additional glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-deep/10 via-transparent to-transparent" />
    </div>
  );
};
