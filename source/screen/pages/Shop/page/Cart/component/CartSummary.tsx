import React, { FC } from "react";
import { View, StyleSheet } from "react-native";

import { AppText } from "~/component";
import { colors, Fonts } from "~/constants";

type CartSummaryProps = {
  items: { label: string; amount: string }[];
  totalLabel: string;
  totalAmount: string;
};

export const CartSummary: FC<CartSummaryProps> = ({
  items,
  totalLabel,
  totalAmount,
}) => (
  <View style={styles.container}>
    {items.map((item, index) => (
      <View key={index} style={styles.row}>
        <AppText styleText={styles.itemText}>{item.label}</AppText>
        <AppText styleText={styles.itemText}>{item.amount}</AppText>
      </View>
    ))}
    <View style={styles.row}>
      <AppText styleText={styles.totalText}>{totalLabel}</AppText>
      <AppText styleText={styles.totalText}>{totalAmount}</AppText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 22,
    fontFamily: Fonts.MontserratMedium,
    color: colors.black,
  },
  totalText: {
    fontSize: 22,
    fontWeight: "400",
    lineHeight: 27,
    fontFamily: Fonts.RobotoRegular,
    color: colors.black,
  },
});

export default CartSummary;
