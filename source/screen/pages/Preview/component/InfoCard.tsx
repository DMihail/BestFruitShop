import React, { FC } from "react";
import { Image, StyleSheet, View } from "react-native";

import { AppText } from "~/component";
import { colors, Fonts } from "~/constants";
import { PreviewInfo } from "~/screen";

export const CardInfo: FC<PreviewInfo> = ({ text, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <AppText styleText={styles.title}>Best Shop Fruit</AppText>
      <AppText styleText={styles.text}>{text}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 32,
  },
  imageContainer: {
    width: 265,
    height: 265,
    borderRadius: 30,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 25,
    lineHeight: 30,
    fontFamily: Fonts.MontserratBold,
    color: colors.black,
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    lineHeight: 18,
    fontFamily: Fonts.RobotoRegular,
    color: colors.black,
    textAlign: "center",
  },
});
