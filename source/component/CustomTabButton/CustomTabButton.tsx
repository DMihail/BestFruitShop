/** @format */

import React from "react";
import { StyleSheet, View } from "react-native";

import { TabBarPlus } from "~/assets";
import { colors } from "~/constants";

export const CustomTabButton = () => (
  <View style={styles.container}>
    <View style={styles.iconContainer}>
      <TabBarPlus />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    bottom: 30,
    alignSelf: "center",
    zIndex: 9999,
  },
  iconContainer: {
    backgroundColor: colors.yellow,
    alignItems: "center",
    borderRadius: 30,
    height: 60,
    justifyContent: "center",
    width: 60,
  },
});
