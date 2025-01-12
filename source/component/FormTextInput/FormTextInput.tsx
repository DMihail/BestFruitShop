import React, { FC } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

import { Control, Controller, RegisterOptions } from "react-hook-form";

import { colors, Fonts } from "~/constants";

export interface InputProps extends TextInputProps {
  control: Control;
  name: string;
  rules?: RegisterOptions;
  isError?: boolean;
  placeholder?: string;
}

export const FormTextInput: FC<InputProps> = ({
  control,
  rules,
  name,
  isError,
  ...props
}) => {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          autoCorrect={false}
          autoCapitalize={"none"}
          style={[styles.input, isError && styles.error]}
          {...props}
        />
      )}
      name={name}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 20,
    paddingHorizontal: 41,
    borderRadius: 30,
    backgroundColor: colors.explosiveGreyTranslucent,
    fontFamily: Fonts.MontserratMedium,
    fontSize: 20,
    lineHeight: 24,
    borderWidth: 1,
    borderColor: colors.transparent,
  },
  error: {
    borderColor: colors.red,
    borderWidth: 1,
  },
});
