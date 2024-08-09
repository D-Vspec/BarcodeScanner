import React, { useState } from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface FlashButtonProps {
  onToggle?: (isOn: boolean) => void;
  }

const FlashButton: React.FC<FlashButtonProps> = ({ onToggle }) => {
  const [isFlashOn, setIsFlashOn] = useState<boolean>(false);

  const toggleFlash = (): void => {
    setIsFlashOn((prevState) => !prevState);
    if (onToggle) {
      onToggle(!isFlashOn);
    }
  };

  const width: number = (26 / 393) * screenWidth * 1.2;
  const height: number = (35 / 852) * screenHeight * 1.2;

  const xPos: number = (35 / 393) * screenWidth;
  const yPos: number = (66 / 852) * screenHeight;

  return (
    <TouchableOpacity 
      onPress={toggleFlash}
      style={{
        position: 'absolute',
        left: xPos,
        top: yPos,
      }}
    >
      <Svg width={width} height={height} viewBox="0 0 26 35" fill="none">
        <Path
          d="M21.4888 3.04934C21.8882 2.11285 21.5903 1.01914 20.7712 0.417596C19.9521 -0.183945 18.8352 -0.12926 18.0703 0.540638L0.740668 15.8526C0.0637305 16.4541 -0.179967 17.418 0.138193 18.2656C0.456354 19.1132 1.26868 19.6874 2.16901 19.6874H9.71686L4.51121 31.9507C4.11181 32.8872 4.40967 33.9809 5.22876 34.5824C6.04786 35.1839 7.1648 35.1293 7.92974 34.4594L25.2593 19.1474C25.9363 18.5459 26.18 17.582 25.8618 16.7344C25.5436 15.8868 24.7381 15.3194 23.831 15.3194H16.2831L21.4888 3.04934Z"
          fill={isFlashOn ? "#FF7A01" : "none"}
          stroke={isFlashOn ? "none" : "#FF7A01"}
          strokeWidth={isFlashOn ? "0" : "2"}
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default FlashButton;
