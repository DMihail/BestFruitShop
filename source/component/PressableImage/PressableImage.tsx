import React, { FC, ReactNode } from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";

type PressableImageProps = {
  onPress?: () => void;
  disabled?: boolean;
  image: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const PressableImage: FC<PressableImageProps> = ({
  onPress,
  disabled,
  image,
  style,
}) => {
  return (
    <Pressable onPress={onPress} disabled={disabled} style={style}>
      {image}
    </Pressable>
  );
};
