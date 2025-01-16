import React, { useCallback } from "react";
import { Image, StyleSheet, View } from "react-native";

import { useRoute } from "@react-navigation/native";

import { AppButton, AppText } from "~/component";
import { colors, Fonts } from "~/constants";
import { ShoScreenRouteProp } from "~/types";

import { PriceCounter } from "./component";

export const Shop = () => {
  const route = useRoute<ShoScreenRouteProp>();

  const { imageUrl, price, title } = route.params;

  const addToCardPress = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>

        <AppText styleText={styles.title}>{title}</AppText>
      </View>

      <PriceCounter price={Number(price)} />

      <AppButton.SolidButton title={"Add to Cart"} onPress={addToCardPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingBottom: 50,
    paddingTop: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },
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
  price: {
    fontSize: 32,
    fontWeight: 500,
    lineHeight: 38,
    fontFamily: Fonts.RobotoBold,
    textAlign: "center",
    color: colors.yellow,
  },
  priceToolContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 2,
    backgroundColor: colors.wildWillowTranslucent,
    borderRadius: 20,
  },
  priceTool: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  priceValue: {
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 18,
    fontFamily: Fonts.RobotoRegular,
    textAlign: "center",
    color: colors.yellow,
    minWidth: 50,
  },
});
