import React, { useCallback, useEffect, useState } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Preview1, Preview2, Preview3 } from "~/assets";
import { AppButton } from "~/component";
import { colors, Fonts, Routes } from "~/constants";

import { CardInfo, Pagination } from "./component";

export type PreviewInfo = {
  text: string;
  image: ImageSourcePropType;
};

const previewInfo = [
  {
    image: Preview1,
    text: "sell and buy fruit from\n different places",
  },
  {
    image: Preview2,
    text: "get fresh and healthy fruit \nfor you",
  },
  {
    image: Preview3,
    text: "organic fruit that can be \nenjoyed by everyone",
  },
];

export const Preview = () => {
  const navigation = useNavigation();
  const [currentCard, setCurrentCard] = useState(0);

  const handleButtonPress = useCallback(() => {
    if (currentCard + 1 < previewInfo.length) setCurrentCard(currentCard + 1);
  }, [currentCard]);

  useEffect(() => {
    if (currentCard === previewInfo.length - 1) {
      navigation.navigate(Routes.ROOT);
    }
  }, [currentCard]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CardInfo
          text={previewInfo[currentCard].text}
          image={previewInfo[currentCard].image}
        />
        <Pagination current={currentCard} count={previewInfo.length} />
      </View>
      <AppButton.LinkButton
        title={"Next"}
        textStyle={styles.button}
        onPress={handleButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 80,
    alignItems: "center",
    paddingBottom: 40,
    justifyContent: "space-between",
  },
  content: {
    alignItems: "center",
    gap: 100,
  },
  button: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Fonts.MontserratMedium,
    color: colors.yellow,
    textAlign: "center",
  },
});
