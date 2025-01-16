import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";

import { AppButton } from "~/component";
import { colors } from "~/constants";

import { CartItem, CartSummary, ActionButtons } from "./component";

export const Cart = () => {
  const addToCardPress = useCallback(() => {}, []);

  const itemDetails = [
    { label: "Melon", amount: "$998 US" },
    { label: "Delivery", amount: "$7.511 US" },
  ];

  return (
    <View style={styles.container}>
      <View>
        <CartItem
          imageUri="https://i.ibb.co/QdGt5gd/board.png"
          quantity="1 Kg"
          price="$998 US"
        />
        <ActionButtons />
      </View>

      <CartSummary
        items={itemDetails}
        totalLabel="Total"
        totalAmount="$8.509 US"
      />
      <AppButton.SolidButton title={"Checkout"} onPress={addToCardPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Cart;
