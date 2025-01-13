import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  TabBarBell,
  TabBarHome,
  TabBarSettings,
  TabBarShoppingCard,
} from "~/assets";
import { CustomTabButton, NotImplementedScreen } from "~/component";
import { colors, Routes } from "~/constants";
import { MainHeader, ShopHeader } from "~/screen/navigation/component";
import { BottomTabStackParamList } from "~/types";

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.white,
    paddingTop: 12,
    paddingBottom: 40,
  },
});

const options = {
  tabBarActiveTintColor: colors.yellow,
  tabBarInactiveTintColor: colors.metallicGray,
  tabBarLabel: "",
  tabBarStyle: styles.tabBarStyle,
};

export const TabNavigator = createBottomTabNavigator<BottomTabStackParamList>({
  screenOptions: options,
  screens: {
    [Routes.HOME]: {
      screen: NotImplementedScreen,
      options: {
        tabBarIcon: ({ color }) => <TabBarHome color={color} />,
        header: () => <MainHeader />,
      },
    },
    [Routes.BASKET]: {
      screen: NotImplementedScreen,
      options: {
        tabBarIcon: ({ color }) => <TabBarBell color={color} />,
        header: () => <MainHeader />,
      },
    },
    [Routes.ORDER]: {
      screen: NotImplementedScreen,
      options: {
        tabBarButton: () => <CustomTabButton />,
        header: () => <MainHeader />,
      },
    },
    [Routes.SETTINGS]: {
      screen: NotImplementedScreen,
      options: {
        tabBarIcon: ({ color }) => <TabBarShoppingCard color={color} />,
        header: () => <ShopHeader title={"Shop"} />,
      },
    },
    [Routes.EVENTS]: {
      screen: NotImplementedScreen,
      options: {
        tabBarIcon: ({ color }) => <TabBarSettings color={color} />,
        header: () => <ShopHeader title={"Cart"} />,
      },
    },
  },
});
