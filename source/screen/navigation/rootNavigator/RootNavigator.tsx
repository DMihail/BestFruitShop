import React, { FC } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import { Routes } from "~/constants";
import { isAuthorizedSelector } from "~/store/user/selectors";

import { AuthStack } from "../stackNavigator";
import { TabNavigator } from "../tabNavigator";

const Stack = createNativeStackNavigator();

export const RootStack: FC = () => {
  const isAuthorized = useSelector(isAuthorizedSelector);

  return (
    <Stack.Navigator
      initialRouteName={isAuthorized ? Routes.ROOT : Routes.AUTH}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.AUTH} component={AuthStack} />
      <Stack.Screen name={Routes.ROOT} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
