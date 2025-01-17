import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import { AppText } from "~/component";
import { AppButton, AuthLayout } from "~/component";
import { colors, Fonts } from "~/constants";

type AuthFormLayoutProps = {
  children: React.ReactNode;
  linkButtonPress?: () => void;
  linkButtonTitle: string;
  submitButton: React.ReactNode;
  formTitle: string;
  bottomButtonPress?: () => void;
  bottomButtonTitle: string;
};

export const AuthFormLayout: FC<AuthFormLayoutProps> = ({
  children,
  formTitle,
  submitButton,
  linkButtonTitle,
  linkButtonPress,
  bottomButtonPress,
  bottomButtonTitle,
}) => {
  return (
    <AuthLayout buttonTitle={bottomButtonTitle} buttonPress={bottomButtonPress}>
      <View style={styles.container}>
        <View style={styles.content}>
          <AppText styleText={styles.title}>{formTitle}</AppText>

          <View style={styles.inputContainer}>{children}</View>

          <AppButton.LinkButton
            title={linkButtonTitle}
            textStyle={styles.notRegistered}
            onPress={linkButtonPress}
          />
        </View>

        {submitButton}
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  content: {
    paddingTop: 100,
  },
  inputContainer: {
    gap: 36,
  },
  title: {
    color: colors.black,
    fontSize: 25,
    lineHeight: 30,
    fontFamily: Fonts.MontserratBold,
    textAlign: "center",
    marginBottom: 90,
  },
  notRegistered: {
    fontFamily: Fonts.MontserratMedium,
    fontSize: 15,
    lineHeight: 18,
    textAlign: "center",
    color: colors.metallicGray,
    paddingTop: 19,
  },
});
