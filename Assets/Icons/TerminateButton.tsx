import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

type TerminateButtonProps = {
  onTerminate: () => void;
};

const TerminateButton: React.FC<TerminateButtonProps> = ({ onTerminate }) => {
  const width = (50 / 393) * screenWidth;
  const height = (40 / 852) * screenHeight;
  const yPos = (66 / 852) * screenHeight;
  const xPos = ((73 / 393) * screenWidth - width ); // Opposite side of FlashButton

  return (
    <TouchableOpacity 
      onPress={onTerminate}
      style={{
        position: 'absolute',
        right: xPos,
        top: yPos,
      }}
    >
      <Svg width={width} height={height} viewBox="0 0 41 41" fill="none">
        <G clipPath="url(#clip0_628_15226)">
          <Path
            d="M20.5 3.84375C24.9175 3.84375 29.1541 5.5986 32.2777 8.72225C35.4014 11.8459 37.1562 16.0825 37.1562 20.5C37.1562 24.9175 35.4014 29.1541 32.2777 32.2777C29.1541 35.4014 24.9175 37.1562 20.5 37.1562C16.0825 37.1562 11.8459 35.4014 8.72225 32.2777C5.5986 29.1541 3.84375 24.9175 3.84375 20.5C3.84375 16.0825 5.5986 11.8459 8.72225 8.72225C11.8459 5.5986 16.0825 3.84375 20.5 3.84375ZM20.5 41C25.9369 41 31.1512 38.8402 34.9957 34.9957C38.8402 31.1512 41 25.9369 41 20.5C41 15.0631 38.8402 9.84881 34.9957 6.00431C31.1512 2.15982 25.9369 0 20.5 0C15.0631 0 9.84881 2.15982 6.00431 6.00431C2.15982 9.84881 0 15.0631 0 20.5C0 25.9369 2.15982 31.1512 6.00431 34.9957C9.84881 38.8402 15.0631 41 20.5 41ZM14.0137 14.0137C13.2609 14.7664 13.2609 15.9836 14.0137 16.7283L17.7773 20.492L14.0137 24.2557C13.2609 25.0084 13.2609 26.2256 14.0137 26.9703C14.7664 27.715 15.9836 27.723 16.7283 26.9703L20.492 23.2066L24.2557 26.9703C25.0084 27.723 26.2256 27.723 26.9703 26.9703C27.715 26.2176 27.723 25.0004 26.9703 24.2557L23.2066 20.492L26.9703 16.7283C27.723 15.9756 27.723 14.7584 26.9703 14.0137C26.2176 13.2689 25.0004 13.2609 24.2557 14.0137L20.492 17.7773L16.7283 14.0137C15.9756 13.2609 14.7584 13.2609 14.0137 14.0137Z"
            fill="#FF7A01"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_628_15226">
            <Rect width="41" height="41" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </TouchableOpacity>
  );
};

export default TerminateButton;
