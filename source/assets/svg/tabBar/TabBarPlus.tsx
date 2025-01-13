import * as React from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

export const TabBarPlus = (props: SvgProps) => {
  return (
    <Svg width={44} height={44} viewBox="0 0 44 44" fill="none" {...props}>
      <Path
        d="M22 9.703v24.594M9.703 22h24.594"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
