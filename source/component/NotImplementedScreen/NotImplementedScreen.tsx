import React from "react";
import { StyleSheet, View } from "react-native";

import { AppText } from "~/component";
import { colors, Fonts } from "~/constants";

export const NotImplementedScreen = () => {
  return (
    <View style={styles.container}>
      <AppText styleText={styles.title}>Not ImplementedScreen Screen</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 36,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Fonts.MontserratMedium,
    color: colors.black,
    textAlign: "center",
  },
});
