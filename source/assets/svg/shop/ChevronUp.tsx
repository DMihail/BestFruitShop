import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const ChevronUp = (props: SvgProps) => {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        d="M18 15.5l-6-6-6 6"
        stroke="#F1C40F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
