import React, { FC } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import { Routes } from "~/constants";
import { TabNavigator } from "~/screen/navigation";
import { AuthStack } from "~/screen/navigation/stackNavigator/authStack";
import { isAuthorizedSelector } from "~/store/user/selectors";
import { RootStackParamList } from "~/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

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
