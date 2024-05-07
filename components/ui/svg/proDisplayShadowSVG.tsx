import React from 'react';

interface ProDisplayShadowSVGProps {
  className: string;
}

const ProDisplayShadowSVG: React.FC<ProDisplayShadowSVGProps> = ({ className }) => (
  <svg id="proDisplayShadowSVG" className={className} viewBox="0 0 500 15" xmlns="http://www.w3.org/2000/svg">
  <defs>
    {<radialGradient gradientUnits="userSpaceOnUse" cx="215" cy="15" r="215" id="gradient-0" gradientTransform="matrix(1.157401, -0.001966, 0.000133, 0.042854, -0.001327, 7.18046)">
      {<stop offset="0" stopColor="rgb(150, 150, 150)" stopOpacity="0.3"></stop>}
      {<stop offset=".3" stopColor="rgb(115, 115, 115)" stopOpacity="0.12"></stop>}
      {<stop offset=".85" stopColor="rgb(80, 80, 80)" stopOpacity="0"></stop>}
    </radialGradient>}
  </defs>
    {<ellipse style={{ fill: 'url(#gradient-0)' }} cx="250" cy="7.5" rx="250" ry="7.5"></ellipse>}
  </svg>
);

export default ProDisplayShadowSVG;


{/* <svg viewBox="0 0 500 30" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient gradientUnits="userSpaceOnUse" cx="216.001" cy="12.412" r="216.001" id="gradient-0" gradientTransform="matrix(1.157401, -0.000983, 0.000133, 0.042854, -0.001327, 7.18046)">
      <stop offset="0" style="stop-color: rgb(84.706% 84.706% 84.706%)"></stop>
      <stop offset="0.421" style="stop-color: rgb(176, 176, 176); stop-opacity: 0.75;"></stop>
      <stop offset="1" style="stop-color: rgb(123, 123, 123); stop-opacity: 0;"></stop>
    </radialGradient>
  </defs>
  <ellipse style="fill: url(#gradient-0);" cx="250" cy="7.5" rx="250" ry="7.5"></ellipse>
</svg> */}


/* <?xml version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 30">
  <defs>
    <radialGradient id="radial-gradient" cx="-10.16" cy="1778.76" fx="-10.16" fy="1778.76" r="216" gradientTransform="translate(261.93 129) rotate(-.1) scale(1.16 -.06)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#d8d8d8"/>
      <stop offset=".32" stop-color="#b0b0b0" stop-opacity=".75"/>
      <stop offset=".92" stop-color="#7b7b7b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <ellipse cx="250" cy="15" rx="250" ry="15" fill="url(#radial-gradient)" strokeWidth="0"/>
</svg> */


{/* <svg viewBox="0 0 500 30" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient gradientUnits="userSpaceOnUse" cx="216.001" cy="12.412" r="216.001" id="gradient-0" gradientTransform="matrix(1.157401, -0.001966, 0.000133, 0.085709, -0.001327, 14.36092)">
      <stop offset="0" style="stop-color: rgb(84.706% 84.706% 84.706%)"></stop>
      <stop offset="0.421" style="stop-color: rgb(176, 176, 176); stop-opacity: 0.75;"></stop>
      <stop offset="1" style="stop-color: rgb(123, 123, 123); stop-opacity: 0;"></stop>
    </radialGradient>
  </defs>
  <ellipse style="fill: url(#gradient-0);" cx="250" cy="15" rx="250" ry="15"></ellipse>
</svg> */}