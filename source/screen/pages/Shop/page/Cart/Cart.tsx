import React, { useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { AppButton } from "~/component";
import { colors, Fonts, paddingHorizontal, Routes } from '~/constants';
import { cartSelector, removeProductAction } from "~/store";
import { CartScreenNavigationProp } from "~/types";

import {
  CartItem,
  CartSummary,
  ActionButtons,
  ChooseProduct,
} from "./component";

const DELIVERY_AMOUNT = 7.511;

export const Cart = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<CartScreenNavigationProp>();
  const data = useSelector(cartSelector);

  const { quantity = 0, price = 0, title = "", imageUrl = "" } = data || {};

  const productPrice = useMemo(() => quantity * +price, [quantity, price]);

  const totalPrice = useMemo(
    () => DELIVERY_AMOUNT + productPrice,
    [productPrice]
  );

  const itemDetails = useMemo(() => {
    const details = [{ label: "Delivery", amount: `$${DELIVERY_AMOUNT} US` }];
    if (title) {
      details.push({ label: title, amount: `$${productPrice} US` });
    }
    return details;
  }, [title, productPrice]);

  const handleEditPress = useCallback(() => {
    navigation.navigate(Routes.SHOP);
  }, [navigation]);

  const handleTrashPress = useCallback(() => {
    dispatch(removeProductAction());
  }, [dispatch]);

  const addToCardPress = useCallback(() => {
    navigation.goBack();
    handleTrashPress();
  }, [navigation, handleTrashPress]);

  if (!data) return <ChooseProduct />;

  return (
    <View style={styles.container}>
      <View>
        <CartItem
          imageUri={imageUrl}
          quantity={quantity}
          price={`$${productPrice} US`}
        />
        <ActionButtons
          handleEditPress={handleEditPress}
          handleTrashPress={handleTrashPress}
        />
      </View>

      <View style={styles.totalContainer}>
        <CartSummary
          items={itemDetails}
          totalLabel="Total"
          totalAmount={`$${totalPrice} US`}
        />
        <AppButton.SolidButton
          title={"Checkout"}
          onPress={addToCardPress}
          textStyle={styles.buttonTitle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal,
    paddingVertical: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalContainer: {
    width: "100%",
  },
  buttonTitle: {
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: Fonts.MontserratBold,
  },
});
