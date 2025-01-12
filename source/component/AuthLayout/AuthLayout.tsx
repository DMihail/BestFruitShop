import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import { DismissKeyboard } from "~/component";
import { AppButton } from "~/component/AppButton";
import { colors, Fonts } from "~/constants";

type AuthLayoutType = {
  children: React.ReactNode;
  buttonTitle: string;
  buttonPress?: () => void;
};

export const AuthLayout: FC<AuthLayoutType> = ({
  children,
  buttonPress,
  buttonTitle,
}) => {
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        {children}

        <AppButton.LinkButton
          title={buttonTitle}
          textStyle={styles.button}
          onPress={buttonPress}
        />
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 40,
    paddingHorizontal: 30,
    justifyContent: "space-between",
    backgroundColor: colors.white,
  },
  button: {
    marginTop: 35,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Fonts.MontserratMedium,
    color: colors.yellow,
    textAlign: "center",
  },
});
