import React from "react";
import { StyleSheet, View } from "react-native";

import { AppText } from "~/component";
import { colors, Fonts } from "~/constants";

export const ChooseProduct = () => {
  return (
    <View style={styles.container}>
      <AppText styleText={styles.title}>Please choose a product!</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: Fonts.MontserratBold,
    color: colors.black,
  },
});
