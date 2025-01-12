import React, { FC } from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import { Fonts } from "~/constants";

type AppTextProps = {
  font?: (typeof Fonts)[keyof typeof Fonts];
  styleText?: StyleProp<TextStyle>;
  onPress?: () => void;
  children?: React.ReactNode;
};

export const AppText: FC<AppTextProps> = ({
  font = Fonts.RobotoRegular,
  styleText,
  onPress,
  children,
  ...props
}) => {
  return (
    <Text
      allowFontScaling={false}
      style={[{ fontFamily: font }, styleText]}
      onPress={onPress}
      {...props}
    >
      {children}
    </Text>
  );
};
