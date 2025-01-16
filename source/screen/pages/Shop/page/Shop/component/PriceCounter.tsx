import React, { FC, useCallback } from "react";
import { StyleSheet, View } from "react-native";

import { useDispatch } from "react-redux";

import { ChevronDown, ChevronUp } from "~/assets";
import { AppText, PressableImage } from "~/component";
import { colors, Fonts } from "~/constants";
import { updateProductQuantityAction } from "~/store/cart";

type PriceCounterProps = {
  price: number;
  quantity: number;
};

export const PriceCounter: FC<PriceCounterProps> = ({ price, quantity }) => {
  const dispatch = useDispatch();

  const decreaseAmount = useCallback(() => {
    dispatch(
      updateProductQuantityAction(quantity > 1 ? quantity - 1 : quantity)
    );
  }, [quantity]);

  const increaseAmount = useCallback(() => {
    dispatch(updateProductQuantityAction(quantity + 1));
  }, [quantity]);

  return (
    <View style={styles.container}>
      <View style={styles.priceToolContainer}>
        <PressableImage
          style={styles.priceTool}
          image={<ChevronDown />}
          onPress={decreaseAmount}
        />

        <AppText styleText={styles.priceValue}>{quantity} Kg</AppText>

        <PressableImage
          style={styles.priceTool}
          image={<ChevronUp />}
          onPress={increaseAmount}
        />
      </View>

      <AppText styleText={styles.price}>${price} US</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 30,
    alignItems: "center",
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
    width: "100%",
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
