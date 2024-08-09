import React, { useEffect } from 'react';
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
import { Dimensions, SafeAreaView, StatusBar } from 'react-native';

const BarcodeScannerOverlay: React.FC<SvgProps> = (props) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const boxWidth = screenWidth * 0.82;
  const boxHeight = screenWidth * 0.8;
  
  const boxX = (screenWidth - boxWidth) / 2;
  const boxY = ((screenHeight - boxHeight) / 2) * 1.1;
  
  const borderRadius = 20;

  const lineDistanceHorizontal = boxWidth * (248 / 323);
  const lineDistanceVertical = boxHeight * (299 / 325);

  const pathData = `
    M${boxX + lineDistanceHorizontal} ${boxY + (32 / 323) * boxWidth} 
    h${(48 / 323) * boxWidth} 
    c1.105 0 2 .912 2 2.017 
    V${boxY + (82 / 325) * boxHeight}

    M${boxX + (81 / 323) * boxWidth} ${boxY + (32 / 323) * boxWidth} 
    h-${(48 / 323) * boxWidth} 
    c-1.105 0 -2 .912 -2 2.017 
    V${boxY + (82 / 325) * boxHeight}

    M${boxX + lineDistanceHorizontal} 
    ${boxY + lineDistanceVertical} 
    h${(48 / 323) * boxWidth} 
    c1.105 0 2 -.912 2 -2.017 
    V${boxY + (249 / 325) * boxHeight}

    M${boxX + (81 / 323) * boxWidth} 
    ${boxY + lineDistanceVertical} 
    h-${(48 / 323) * boxWidth} 
    c-1.105 0 -2 -.912 -2 -2.017 
    V${boxY + (249 / 325) * boxHeight}
  `;

  const backgroundPath = `
    M0,0
    H${screenWidth} 
    V${screenHeight*3} 
    H0 
    V0 
    Z
    M${boxX},${boxY + borderRadius}
    a${borderRadius},${borderRadius} 0 0 1 ${borderRadius},-${borderRadius}
    h${boxWidth - 2 * borderRadius}
    a${borderRadius},${borderRadius} 0 0 1 ${borderRadius},${borderRadius}
    v${boxHeight - 2 * borderRadius}
    a${borderRadius},${borderRadius} 0 0 1 -${borderRadius},${borderRadius}
    h-${boxWidth - 2 * borderRadius}
    a${borderRadius},${borderRadius} 0 0 1 -${borderRadius},-${borderRadius}
    Z
  `;

  return (
      <Svg
        width="100%"
        height="100%"
        viewBox={`0 40 ${screenWidth} ${screenHeight}`}
        fill="none"
        {...props}
      >
        {/* Translucent Background with a precise cutout */}
        <Path
          d={backgroundPath}
          fill="#26262699" // Translucent background
          fillRule="evenodd"
        />

        {/* Scanning Box Outline */}
        <Rect
          x={boxX}
          y={boxY}
          width={boxWidth}
          height={boxHeight}
          fill="transparent"
          stroke="#FF7A01"
          strokeWidth={5}
          rx={20}
        />

        {/* Proportional Corner Lines */}
        <Path
          stroke="#FF7A01"
          strokeWidth={3}
          d={pathData}
        />
      </Svg>
  );
};

export default BarcodeScannerOverlay;
