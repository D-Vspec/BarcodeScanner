import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface FlashButtonProps extends SvgProps {
  // You can add any additional props specific to FlashButton here
}

const FlashButton: React.FC<FlashButtonProps> = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={39}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FF7A01"
      strokeWidth={3}
      d="M23.489 5.05a2.2 2.2 0 0 0-.718-2.632 2.153 2.153 0 0 0-2.7.123L2.74 17.853a2.204 2.204 0 0 0-.603 2.413 2.185 2.185 0 0 0 2.031 1.421h7.548L6.51 33.951a2.2 2.2 0 0 0 .718 2.631c.819.602 1.936.547 2.7-.123l17.33-15.312c.677-.601.921-1.565.603-2.413a2.172 2.172 0 0 0-2.031-1.415h-7.548L23.49 5.05Z"
    />
  </Svg>
);

export default FlashButton;
