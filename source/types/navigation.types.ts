import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Routes } from "~/constants";

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
  [Routes.SHOP]: undefined;
  [Routes.CART]: undefined;
};

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
