import React, { FC } from "react";
import { Image, StyleSheet, View } from "react-native";

import { AppText } from "~/component";
import { colors, Fonts } from "~/constants";

type ProductInfoProps = {
  imageUrl: string;
  title: string;
};

export const ProductInfo: FC<ProductInfoProps> = ({ imageUrl, title }) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>

      <AppText styleText={styles.title}>{title}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignSelf: "center",
    width: 258,
    height: 258,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    elevation: 4,
    marginBottom: 18,
    overflow: "hidden",
    backgroundColor: colors.white,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 18,
    fontFamily: Fonts.MontserratSemiBold,
    textAlign: "center",
    color: colors.black,
  },
});
