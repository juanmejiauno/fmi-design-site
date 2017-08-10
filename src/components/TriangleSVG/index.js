/* eslint-disable */
import React from 'react';

const TriangleSVG = ({className = ''}) => (
  <svg className={`triangle-svg ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
    <g className="flat-pattern" fill="none" fillRule="evenodd" stroke="#F7D18F" strokeWidth="2">
      <path d="M-21.4350373,319.176612 L237.918186,319.176612" strokeDasharray="1000" transform="translate(108.241574, 319.676612) rotate(90.000000) translate(-108.241574, -319.676612) "></path>
      <polyline transform="translate(385.370673, 191.246094) rotate(90.000000) translate(-385.370673, -191.246094) " points="319.468329 136.616995 258.124579 245.062308 382.921831 245.875193 512.616767 245.062308"></polyline>
      <polyline transform="translate(330.890012, 253.570312) rotate(90.000000) translate(-330.890012, -253.570312) " points="203.319699 146.003906 331.600949 362.71875 458.460324 144.421875 329.3279 144.421875 395.37634 252.447629"></polyline>
      <polyline transform="translate(167.600557, 318.945626) rotate(90.000000) translate(-167.600557, -318.945626) " points="39.6549312 376.831952 102.467431 485.804608 295.546182 152.086643"></polyline>
      <path d="M281.623047,15.1152344 L156.09668,239.176758" strokeLinecap="square" transform="translate(218.859863, 127.145996) rotate(90.000000) translate(-218.859863, -127.145996) "></path>
      <polyline transform="translate(220.864928, 354.820229) rotate(90.000000) translate(-220.864928, -354.820229) " points="58.0446987 467.943583 121.220481 353.771288 383.685157 353.750595 312.632589 241.696875"></polyline>
      <path d="M154.790613,271.950961 L286.558562,495.816988" strokeLinecap="square" transform="translate(220.674587, 383.883975) rotate(90.000000) translate(-220.674587, -383.883975) "></path>
      <polygon transform="translate(162.623224, 95.823388) rotate(90.000000) translate(-162.623224, -95.823388) " points="258.446612 150.03707 193.934894 39.9417383 66.799836 41.6737883 130.946613 151.705038"></polygon>
    </g>
  </svg>
);

export default TriangleSVG;
