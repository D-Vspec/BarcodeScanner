import React from 'react';
import Svg, { SvgProps, G, Rect, Defs, ClipPath, Path } from "react-native-svg";

const BarcodeScannerOverlay: React.FC<SvgProps> = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 393 852"
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path fill="#262626" fillOpacity={0.5} d="M0 0h393v852H0z" />
      <Rect width={323} height={325} x={35} y={264} fill="transparent" rx={20} />
      <Rect
        width={323}
        height={325}
        x={35}
        y={264}
        stroke="#FF7A01"
        strokeWidth={5}
        rx={20}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h393v852H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BarcodeScannerOverlay;
