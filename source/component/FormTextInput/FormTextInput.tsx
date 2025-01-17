/** @format */

import React, { FC } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import { Controller, RegisterOptions } from 'react-hook-form';

import { colors, Fonts } from '~/constants';

export interface InputProps extends TextInputProps {
  control: any;
  name: string;
  rules?: RegisterOptions;
  isError?: boolean;
  placeholder?: string;
}

export const FormTextInput: FC<InputProps> = ({ control, rules, name, isError, ...props }) => {
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
          autoCapitalize={'none'}
          placeholderTextColor={colors.blackTranslucent}
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
    color: colors.black,
  },
  error: {
    borderColor: colors.red,
    borderWidth: 1,
  },
});
