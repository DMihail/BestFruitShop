import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const ChevronDown = (props: SvgProps) => {
  return (
    <Svg width={14} height={9} viewBox="0 0 14 9" fill="none" {...props}>
      <Path
        d="M1 1.5l6 6 6-6"
        stroke="#F1C40F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
