import * as React from "react"
import Svg, {Path, SvgProps} from "react-native-svg"

export const TabBarShoppingCard = (props: SvgProps) => {
    return (
        <Svg
            width={34}
            height={34}
            viewBox="0 0 34 34"
            fill="none"
            {...props}
        >
            <Path
                d="M12.75 31.167a1.417 1.417 0 100-2.834 1.417 1.417 0 000 2.834zM28.333 31.167a1.417 1.417 0 100-2.834 1.417 1.417 0 000 2.834zM1.417 1.417h5.666l3.797 18.969a2.833 2.833 0 002.833 2.28h13.77a2.833 2.833 0 002.834-2.28L32.583 8.5H8.5"
                stroke="#F1C40F"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}
