import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const Search = (props: SvgProps) => {
  return (
    <Svg width={38} height={38} viewBox="0 0 38 38" fill="none" {...props}>
      <Path
        d="M17.417 30.083c6.995 0 12.666-5.67 12.666-12.666S24.413 4.75 17.417 4.75 4.75 10.421 4.75 17.417c0 6.995 5.671 12.666 12.667 12.666zM33.25 33.25l-6.887-6.887"
        stroke="#F1C40F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
