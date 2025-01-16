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
import { Home } from "~/screen";
import { MainHeader, ShopHeader } from "~/screen/navigation/component";
import { ShopStack } from "~/screen/navigation/stackNavigator";
import { BottomTabStackParamList } from "~/types";

const options = {
  tabBarActiveTintColor: colors.yellow,
  tabBarInactiveTintColor: colors.metallicGray,
  tabBarLabel: "",
};

const Tab = createBottomTabNavigator<BottomTabStackParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={options}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name={Routes.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <TabBarHome color={color} />,
          header: () => <MainHeader />,
        }}
      />
      <Tab.Screen
        name={Routes.EVENTS}
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarBell color={color} />,
          header: () => <MainHeader />,
        }}
      />
      <Tab.Screen
        name={Routes.ORDER}
        component={NotImplementedScreen}
        options={{
          tabBarIcon: () => <CustomTabButton />,
          header: () => <MainHeader />,
        }}
      />

      <Tab.Screen
        name={Routes.GROCERY}
        component={ShopStack}
        options={{
          tabBarIcon: ({ color }) => <TabBarShoppingCard color={color} />,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={Routes.SETTINGS}
        component={NotImplementedScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarSettings color={color} />,
          header: () => <ShopHeader title={"Cart"} />,
        }}
      />
    </Tab.Navigator>
  );
};
