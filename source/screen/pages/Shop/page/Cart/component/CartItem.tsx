import React, { FC } from "react";
import { Image, View, StyleSheet } from "react-native";

import { AppText } from "~/component";
import { colors, Fonts } from "~/constants";

type CartItemProps = {
  imageUri: string;
  quantity: string;
  price: string;
};

export const CartItem: FC<CartItemProps> = ({ imageUri, quantity, price }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.details}>
        <AppText styleText={styles.itemText}>{quantity}</AppText>
        <AppText styleText={styles.itemText}>{price}</AppText>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 21,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 82,
    height: 82,
    resizeMode: "cover",
    borderRadius: 10,
  },
  details: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 21,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 22,
    fontFamily: Fonts.MontserratMedium,
    color: colors.black,
  },
});

export default CartItem;
