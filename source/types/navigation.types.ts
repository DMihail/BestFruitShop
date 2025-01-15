import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp, StaticParamList } from "@react-navigation/native";

import { Routes } from "~/constants";
import { TabNavigator } from "~/screen/navigation";
import { IProductType } from "~/types/dto";

export type RootStackParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.REGISTER]: undefined;
  [Routes.PREVIEW]: undefined;
  [Routes.ROOT]: undefined;
};

export type AuthStackParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.REGISTER]: undefined;
  [Routes.PREVIEW]: undefined;
};

export type BottomTabStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.CART]: IProductType;
  [Routes.SETTINGS]: undefined;
  [Routes.EVENTS]: undefined;
  [Routes.ORDER]: undefined;
};

type BottomTabParamList = StaticParamList<typeof TabNavigator>;

export type HomeScreenNavigationProp = BottomTabNavigationProp<
  BottomTabParamList,
  Routes.HOME
>;

export type CartScreenNavigationProp = BottomTabNavigationProp<
  BottomTabParamList,
  Routes.CART
>;

export type CartScreenRouteProp = RouteProp<
  BottomTabStackParamList,
  Routes.CART
>;
