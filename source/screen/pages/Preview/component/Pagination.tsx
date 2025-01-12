import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "~/constants";

type DotsProps = {
  current: number;
  count: number;
};

export const Pagination: FC<DotsProps> = ({ current, count }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: count }, (_, index) => (
        <View
          key={index}
          style={[styles.dot, index === current && styles.activeDot]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 9,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.explosiveGrey,
  },
  activeDot: {
    backgroundColor: colors.yellow,
  },
});
