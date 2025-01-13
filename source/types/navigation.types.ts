import { Routes } from "~/constants";

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
  [Routes.BASKET]: undefined;
  [Routes.SETTINGS]: undefined;
  [Routes.EVENTS]: undefined;
  [Routes.ORDER]: undefined;
};
