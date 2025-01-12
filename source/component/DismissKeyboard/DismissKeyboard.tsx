/** @format */
import React, { FC, useCallback } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

type DismissKeyboardType = {
  children: React.ReactNode;
};

export const DismissKeyboard: FC<DismissKeyboardType> = ({ children }) => {
  const handleDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handleDismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
};
