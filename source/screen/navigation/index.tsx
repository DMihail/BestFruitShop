import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NotImplementedScreen } from "~/component";
import { Routes } from "~/constants";
import { Login, Preview, Register } from "~/screen";
import { RootStackParamList } from "~/types";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: Routes.PREVIEW,
  screenOptions: {
    headerShown: false,
  },
  screens: {
    [Routes.LOGIN]: {
      screen: Login,
    },
    [Routes.REGISTER]: {
      screen: Register,
    },
    [Routes.PREVIEW]: {
      screen: Preview,
    },
    [Routes.HOME]: {
      screen: NotImplementedScreen,
    },
    [Routes.BASKET]: {
      screen: NotImplementedScreen,
    },
    [Routes.SETTINGS]: {
      screen: NotImplementedScreen,
    },
    [Routes.EVENTS]: {
      screen: NotImplementedScreen,
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
