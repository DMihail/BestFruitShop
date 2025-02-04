import React, { useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { AppButton } from "~/component";
import { colors, Fonts, previewInfo, Routes } from "~/constants";
import { RegisterNavigationPreview } from "~/types";

import { CardInfo, Pagination } from "./component";

export const Preview = () => {
  const navigation = useNavigation<RegisterNavigationPreview>();
  const [currentCard, setCurrentCard] = useState(0);

  const handleButtonPress = useCallback(() => {
    setCurrentCard((prevState) => {
      if (prevState === previewInfo.length - 1) {
                navigation.reset({
            index: 1,
            routes: [
                { name: Routes.ROOT },
            ],
        });
        return prevState;
      }
      return prevState + 1;
    });
  }, [navigation]);

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
