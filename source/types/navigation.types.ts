import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Routes } from "~/constants";
import { IProductType } from "~/types/dto";

export type RootStackParamList = {
  [Routes.AUTH]: undefined;
  [Routes.ROOT]: undefined;
};

export type AuthStackParamList = {
  [Routes.LOGIN]: undefined;
  [Routes.REGISTER]: undefined;
  [Routes.PREVIEW]: undefined;
};

export type BottomTabStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.GROCERY]: NavigatorScreenParams<CartStackParamList>;
  [Routes.SETTINGS]: undefined;
  [Routes.EVENTS]: undefined;
  [Routes.ORDER]: undefined;
};

export type CartStackParamList = {
  [Routes.SHOP]: IProductType;
  [Routes.CART]: undefined;
};

export type RootStackNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AuthStackNavigationProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type CartStackNavigationProps<T extends keyof CartStackParamList> =
  NativeStackScreenProps<CartStackParamList, T>;

export type BottomTabNavigationProps<T extends keyof BottomTabStackParamList> =
  BottomTabScreenProps<BottomTabStackParamList, T>;

export type LoginNavigationProp = NativeStackScreenProps<
  AuthStackParamList & RootStackParamList,
  Routes.LOGIN
>["navigation"];

export type RegisterNavigationProp = NativeStackScreenProps<
  AuthStackParamList & RootStackParamList,
  Routes.REGISTER
>["navigation"];

export type RegisterNavigationPreview = NativeStackScreenProps<
  AuthStackParamList & RootStackParamList,
  Routes.PREVIEW
>["navigation"];

export type HomeScreenNavigationProp = NativeStackScreenProps<
  BottomTabStackParamList & CartStackParamList,
  Routes.HOME
>["navigation"];

export type CartScreenNavigationProp = NativeStackScreenProps<
  BottomTabStackParamList & CartStackParamList,
  Routes.CART
>["navigation"];

export type CartScreenRouteProp = RouteProp<CartStackParamList, Routes.SHOP>;
