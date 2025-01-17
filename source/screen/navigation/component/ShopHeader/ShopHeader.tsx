import React, { FC, useCallback } from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ArrowLeftCircle, Search } from "~/assets";
import { AppText, PressableImage } from "~/component";
import { colors, Fonts, Routes } from "~/constants";
import { CartScreenNavigationProp } from "~/types";

type ShopHeaderProps = {
  title: string;
};

export const ShopHeader: FC<ShopHeaderProps> = ({ title }) => {
  const { top: paddingTop } = useSafeAreaInsets();
  const navigation = useNavigation<CartScreenNavigationProp>();

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleSearchPress = useCallback(
    () => navigation.navigate(Routes.HOME),
    [navigation]
  );

  return (
    <View style={[styles.container, { paddingTop }]}>
      <PressableImage image={<ArrowLeftCircle />} onPress={handleBackPress} />

      <AppText styleText={styles.title}>{title}</AppText>

      <PressableImage image={<Search />} onPress={handleSearchPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 22,
    lineHeight: 27,
    fontFamily: Fonts.MontserratBold,
    color: colors.yellow,
  },
});
