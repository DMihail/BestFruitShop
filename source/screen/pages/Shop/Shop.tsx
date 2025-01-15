import React from "react";
import { StyleSheet, View } from "react-native";

import { useRoute } from "@react-navigation/native";

import { colors } from "~/constants";

export const Shop = () => {
  const route = useRoute();

  const { params } = route;
  return (
    <View style={styles.container}>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
  },
  content: {},
});
