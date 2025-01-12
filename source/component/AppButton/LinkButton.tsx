import React, { FC } from "react";
import { Pressable } from "react-native";

import { AppText } from "~/component";

import { CustomButtonType } from "./";

export const LinkButton: FC<CustomButtonType> = ({
  onPress,
  disabled,
  title,
  textStyle,
}) => {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <AppText styleText={textStyle}>{title}</AppText>
    </Pressable>
  );
};
