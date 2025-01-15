import * as React from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

export const ArrowLeftCircle = (props: SvgProps) => {
  return (
    <Svg width={38} height={38} viewBox="0 0 38 38" fill="none" {...props}>
      <Path
        d="M19 34.833c8.744 0 15.833-7.088 15.833-15.833 0-8.745-7.088-15.833-15.833-15.833-8.745 0-15.833 7.088-15.833 15.833 0 8.744 7.088 15.833 15.833 15.833z"
        stroke="#F1C40F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 12.667L12.667 19 19 25.333M25.333 19H12.667"
        stroke="#F1C40F"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
