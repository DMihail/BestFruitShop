import React, { FC } from "react";
import { View, StyleSheet } from "react-native";

import { Edit, Trash } from "~/assets";
import { PressableImage } from "~/component";
import { colors } from "~/constants";

export const ActionButtons: FC = () => (
  <View style={styles.container}>
    <PressableImage image={<Edit />} />
    <PressableImage image={<Trash />} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    marginTop: 60,
    backgroundColor: colors.metallicGray,
    paddingVertical: 30,
    paddingHorizontal: 70,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: 12,
  },
});
