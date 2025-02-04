import React, { FC, useCallback } from "react";
import { ImageBackground, Pressable, StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { AppText } from "~/component";
import { colors, Fonts, Routes } from "~/constants";
import { addProductAction } from "~/store";
import { HomeScreenNavigationProp } from "~/types";
import { IProductType } from "~/types/dto/products";

export const ProductCard: FC<IProductType> = (props) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const dispatch = useDispatch();
  const { imageUrl, price, title } = props;

  const handlePress = useCallback(() => {
    navigation.navigate(Routes.GROCERY, {
      screen: Routes.SHOP,
    });
    dispatch(addProductAction(props));
  }, [navigation, props]);

  return (
    <Pressable onPress={handlePress}>
      <ImageBackground source={{ uri: imageUrl }} style={styles.container}>
        <View>
          <AppText styleText={styles.title}>{title}</AppText>
          <AppText styleText={styles.price}>${price} US</AppText>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: 167,
    height: 167,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    elevation: 4,
    alignItems: "center",
    justifyContent: "flex-end",
    resizeMode: "cover",
    paddingBottom: 6,
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
    marginTop: 5,
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 14,
    fontFamily: Fonts.RobotoRegular,
    textAlign: "center",
    color: colors.black,
  },
});
