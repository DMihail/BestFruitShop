import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  TabBarBell,
  TabBarHome,
  TabBarSettings,
  TabBarShoppingCard,
} from "~/assets";
import {
  CustomTabBar,
  CustomTabButton,
  NotImplementedScreen,
} from "~/component";
import { colors, Routes } from "~/constants";
import { Home, Shop } from "~/screen";
import { MainHeader, ShopHeader } from "~/screen/navigation/component";
import { BottomTabStackParamList } from "~/types";

const options = {
  tabBarActiveTintColor: colors.yellow,
  tabBarInactiveTintColor: colors.metallicGray,
  tabBarLabel: "",
};

export const TabNavigator = createBottomTabNavigator<BottomTabStackParamList>({
  tabBar: (props) => <CustomTabBar {...props} />,
  screenOptions: options,
  screens: {
    [Routes.HOME]: {
      screen: Home,
      options: {
        tabBarIcon: ({ color }) => <TabBarHome color={color} />,
        header: () => <MainHeader />,
      },
    },
    [Routes.EVENTS]: {
      screen: NotImplementedScreen,
      options: {
        tabBarIcon: ({ color }) => <TabBarBell color={color} />,
        header: () => <MainHeader />,
      },
    },
    [Routes.ORDER]: {
      screen: NotImplementedScreen,
      options: {
        tabBarIcon: () => <CustomTabButton />,
        header: () => <MainHeader />,
      },
    },
    [Routes.CART]: {
      screen: Shop,
      options: {
        tabBarIcon: ({ color }) => <TabBarShoppingCard color={color} />,
        header: () => <ShopHeader title={"Shop"} />,
      },
    },
    [Routes.SETTINGS]: {
      screen: NotImplementedScreen,
      options: {
        tabBarIcon: ({ color }) => <TabBarSettings color={color} />,
        header: () => <ShopHeader title={"Cart"} />,
      },
    },
  },
});
