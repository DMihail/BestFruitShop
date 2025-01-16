import React, { FC } from "react";
import { View, StyleSheet } from "react-native";

import { Edit, Trash } from "~/assets";
import { PressableImage } from "~/component";

export const ActionButtons: FC = () => (
  <View style={styles.container}>
    <PressableImage image={<Edit />} />
    <PressableImage image={<Trash />} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 12,
  },
});

export default ActionButtons;
