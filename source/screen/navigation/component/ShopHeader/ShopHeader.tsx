import React, { FC, useCallback } from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ArrowLeftCircle, Search } from "~/assets";
import { AppText, PressableImage } from "~/component";
import { colors, Fonts } from "~/constants";

type ShopHeaderProps = {
  title: string;
};

export const ShopHeader: FC<ShopHeaderProps> = ({ title }) => {
  const { top: paddingTop } = useSafeAreaInsets();
  const navigation = useNavigation();

  const handleBackPress = useCallback(() => navigation.goBack(), []);

  return (
    <View style={[styles.container, { paddingTop }]}>
      <PressableImage image={<ArrowLeftCircle />} onPress={handleBackPress} />

      <AppText styleText={styles.title}>{title}</AppText>

      <PressableImage image={<Search />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingVertical: 2,
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
