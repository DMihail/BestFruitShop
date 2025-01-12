import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"

export const TabBarBell = (props: SvgProps) => {
    return (
        <Svg
            width={34}
            height={34}
            viewBox="0 0 34 34"
            fill="none"
            {...props}
        >
            <Path
                d="M25.5 11.333a8.5 8.5 0 10-17 0c0 9.917-4.25 12.75-4.25 12.75h25.5s-4.25-2.833-4.25-12.75zM19.45 29.75a2.833 2.833 0 01-4.9 0"
                stroke="silver"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
