import React from "react";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import { colors } from "~/constants";

import { RootStack } from "../stackNavigator";

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.white} />
      <RootStack />
    </NavigationContainer>
  );
};
