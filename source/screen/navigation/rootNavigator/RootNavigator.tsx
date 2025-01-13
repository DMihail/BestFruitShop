import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Routes } from "~/constants";
import { Login, Preview, Register } from "~/screen";
import { TabNavigator } from "~/screen/navigation/tabNavigator/TabNavigator";

const RootStack = createNativeStackNavigator({
  initialRouteName: Routes.ROOT,
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
    [Routes.ROOT]: {
      screen: TabNavigator,
    },
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const RootNavigator = createStaticNavigation(RootStack);
