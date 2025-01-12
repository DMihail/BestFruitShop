import { TextStyle } from "react-native";

import { LinkButton } from "./LinkButton";
import { SolidButton } from "./SolidButton";

export type CustomButtonType = {
  disabled?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
  title: string;
  textStyle?: TextStyle;
};

export const AppButton = {
  LinkButton,
  SolidButton,
};
