import React, { FC } from "react";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";

import { AppText } from "~/component";
import { colors, Fonts } from "~/constants";

import { CustomButtonType } from "./";

export const SolidButton: FC<CustomButtonType> = ({
  onPress,
  disabled,
  title,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={styles.container}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.white} size={"large"} />
      ) : (
        <AppText styleText={styles.title}>{title}</AppText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.yellow,
    paddingVertical: 18,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: colors.white,
    fontSize: 25,
    fontFamily: Fonts.MontserratBold,
  },
});
