import React, { FC, ReactNode } from "react";
import { Pressable } from "react-native";

type PressableImageProps = {
  onPress?: () => void;
  disabled?: boolean;
  image: ReactNode;
};

export const PressableImage: FC<PressableImageProps> = ({
  onPress,
  disabled,
  image,
}) => {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      {image}
    </Pressable>
  );
};
