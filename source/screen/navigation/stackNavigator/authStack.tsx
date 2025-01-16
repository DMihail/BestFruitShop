import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "~/constants";
import { Login, Preview, Register } from "~/screen";
import { AuthStackParamList } from "~/types";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.LOGIN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      <Stack.Screen name={Routes.REGISTER} component={Register} />
      <Stack.Screen name={Routes.PREVIEW} component={Preview} />
    </Stack.Navigator>
  );
};
