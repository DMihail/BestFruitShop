import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppleLogo, ProfileLogo } from "~/assets/image/common";
import { AppText, PressableImage } from "~/component";
import { colors, Fonts } from "~/constants";

export const MainHeader = () => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop }]}>
      <View style={styles.logoBlock}>
        <PressableImage
          image={<Image source={AppleLogo} style={styles.logo} />}
        />
        <AppText styleText={styles.title}>Best Shop Fruit</AppText>
      </View>
      <PressableImage
        image={<Image source={ProfileLogo} style={styles.profileImg} />}
      />
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
  logoBlock: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  logo: {
    width: 38,
    height: 38,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Fonts.MontserratSemiBold,
    alignSelf: "flex-end",
    paddingBottom: 3,
    color: colors.cyanBlue,
  },
  profileImg: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
});
