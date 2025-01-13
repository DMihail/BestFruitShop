import * as React from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

export const TabBarHome = (props: SvgProps) => {
  return (
    <Svg width={34} height={34} viewBox="0 0 34 34" fill="none" {...props}>
      <Path
        d="M4.25 12.75L17 2.833l12.75 9.917v15.583a2.833 2.833 0 01-2.833 2.834H7.083a2.834 2.834 0 01-2.833-2.834V12.75z"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.75 31.167V17h8.5v14.167"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
