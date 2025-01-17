import React, { useCallback, useMemo } from "react";

import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { AppButton, AuthFormLayout, FormTextInput } from "~/component";
import { emailFromInputRule, passwordFromInputRule, Routes } from "~/constants";
import { registerAction, registerSelector } from "~/store";
import { RegisterNavigationProp } from "~/types";

type RegisterForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const Register = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const dispatch = useDispatch();
  const navigation = useNavigation<RegisterNavigationProp>();
  const { isLoading, error } = useSelector(registerSelector);

  const onSubmit = useCallback(
    ({ email, password }: RegisterForm) => {
      dispatch(
        registerAction({
          email,
          password,
          onSuccess: () => {
            navigation.navigate(Routes.PREVIEW);
          },
        })
      );
    },
    [navigation, dispatch]
  );

  const handleLinkButtonPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const SubmitButton = useMemo(
    () => (
      <AppButton.SolidButton
        title={"Sign Up"}
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
        disabled={isLoading}
      />
    ),
    [handleSubmit, isLoading, onSubmit]
  );

  return (
    <AuthFormLayout
      formTitle={"Creat Account"}
      linkButtonTitle={"Already have an account? Sign in"}
      linkButtonPress={handleLinkButtonPress}
      bottomButtonTitle={"Sign up menu"}
      submitButton={SubmitButton}
    >
      <FormTextInput
        control={control}
        placeholder="Email"
        name={"email"}
        keyboardType={"email-address"}
        textContentType={"emailAddress"}
        autoComplete={"email"}
        isError={!!errors.email || !!error}
        rules={emailFromInputRule}
      />

      <FormTextInput
        control={control}
        placeholder="Password"
        name={"password"}
        textContentType={"password"}
        autoComplete={"password"}
        secureTextEntry
        isError={!!errors.password || !!error}
        rules={passwordFromInputRule}
      />

      <FormTextInput
        control={control}
        placeholder="Konfirmation Password"
        name={"confirmPassword"}
        textContentType={"password"}
        autoComplete={"password"}
        secureTextEntry
        isError={!!errors.confirmPassword}
        rules={{
          required: "Please input your password confirmation.",
          validate: (value) =>
            value === watch("password") || "Passwords don't match.",
        }}
      />
    </AuthFormLayout>
  );
};
