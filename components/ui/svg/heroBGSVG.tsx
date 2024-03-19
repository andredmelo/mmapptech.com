const HeroBGSVG: React.FC = ({}) => {
  return (
    <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="mask0">
          <rect fill="rgb(255, 255, 255)" width="500" height="400"></rect>
        </clipPath>
        <linearGradient id="gradient-1">
          <stop offset="0.345" stopColor="rgb(20, 15, 15)"></stop>
          <stop offset="1" stopColor="rgb(128, 0, 128)"></stop>
        </linearGradient>
        <radialGradient id="radial-gradient" gradientUnits="userSpaceOnUse" cx="250" cy="5" r="250" spreadMethod="pad" gradientTransform="matrix(-0.004168, 1.497955, -2.776109, -0.007725, 261.7983, -384.24772)" href="#gradient-1"></radialGradient>
      </defs>
      <g clipPath="url(#mask0)">
        <rect fill="url(#radial-gradient)" width="1000" height="400" x="-250"></rect>
      </g>
    </svg>
  );
}

const HeroBGSVG180: React.FC = ({}) => {
  return (
    <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="mask0">
          <rect fill="rgb(255, 255, 255)" width="500" height="400"></rect>
        </clipPath>
        <linearGradient id="gradient-1">
          <stop offset="0.345" stopColor="rgb(20, 15, 15)"></stop>
          <stop offset="1" stopColor="rgb(128, 0, 128)"></stop>
        </linearGradient>
        <radialGradient id="radial-gradient" gradientUnits="userSpaceOnUse" cx="250" cy="5" r="250" spreadMethod="pad" gradientTransform="matrix(-0.004168, 1.497955, -2.776109, -0.007725, 261.7983, -384.24772)" href="#gradient-1"></radialGradient>
      </defs>
      <g clipPath="url(#mask0)" transform="rotate(180 250 100)">
        <rect fill="url(#radial-gradient)" width="1000" height="400" x="-250"></rect>
      </g>
    </svg>
  );
}

export { HeroBGSVG, HeroBGSVG180 }