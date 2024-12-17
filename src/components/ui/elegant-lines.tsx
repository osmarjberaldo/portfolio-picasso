export const ElegantLines = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-20"
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    style={{ animation: 'spin 30s linear infinite' }}
  >
    <g fill="none" stroke="#FCD34D" strokeWidth="1.5">
      <path d="M100,100 L400,100 L400,400 L100,400 Z" opacity="0.2"/>
      <path d="M150,150 L350,150 L350,350 L150,350 Z" opacity="0.3"/>
      <path d="M200,200 L300,200 L300,300 L200,300 Z" opacity="0.4"/>
      <line x1="50" y1="250" x2="450" y2="250" opacity="0.3"/>
      <line x1="250" y1="50" x2="250" y2="450" opacity="0.3"/>
      <circle cx="250" cy="250" r="150" opacity="0.2"/>
      <circle cx="250" cy="250" r="100" opacity="0.25"/>
    </g>
  </svg>
);
