import React, { useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { AppButton } from "~/component";
import { colors, Fonts, Routes } from "~/constants";
import { ProductInfo } from "~/screen/pages/Shop/page/Shop/component/ProductInfo";
import { cartSelector } from "~/store";
import { CartScreenNavigationProp } from "~/types";

import { PriceCounter } from "./component";

export const Shop = () => {
  const navigation = useNavigation<CartScreenNavigationProp>();

  const addToCardPress = useCallback(() => {
    navigation.popTo(Routes.CART);
  }, [navigation]);

  const data = useSelector(cartSelector);

  if (!data) return null;

  const { quantity, price, title, imageUrl } = data;

  const ProductInfoContent = useMemo(
    () => <ProductInfo imageUrl={imageUrl} title={title} />,
    [imageUrl, title]
  );

  return (
    <View style={styles.container}>
      {ProductInfoContent}

      <PriceCounter price={Number(price) * quantity} quantity={quantity} />

      <AppButton.SolidButton
        title={"Add to Cart"}
        onPress={addToCardPress}
        textStyle={styles.buttonTitle}
      />
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
  buttonTitle: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: Fonts.MontserratBold,
  },
});
