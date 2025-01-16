import React, { useCallback } from "react";

import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { AuthFormLayout, FormTextInput } from "~/component";
import { emailFromInputRule, passwordFromInputRule, Routes } from "~/constants";
import { loginAction } from "~/store/user/slice";
import { LoginNavigationProp } from "~/types";

type LoginForm = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useDispatch();
  const navigation = useNavigation<LoginNavigationProp>();

  const onSubmit = useCallback(
    ({ email, password }: LoginForm) => {
      dispatch(
        loginAction({
          email,
          password,
          onSuccess: () => {
            navigation.navigate(Routes.ROOT);
          },
        })
      );
    },
    [dispatch, navigation]
  );

  const handleLinkButtonPress = useCallback(() => {
    navigation.navigate(Routes.REGISTER);
  }, [navigation]);

  return (
    <AuthFormLayout
      formTitle={"Sign In"}
      linkButtonTitle={"Don't registered yet? Sign up"}
      linkButtonPress={handleLinkButtonPress}
      submitButtonTitle={"Sign In"}
      submitButtonPress={handleSubmit(onSubmit)}
      bottomButtonTitle={"Sign In menu"}
    >
      <FormTextInput
        control={control}
        placeholder="Email"
        name={"email"}
        keyboardType={"email-address"}
        textContentType={"emailAddress"}
        autoComplete={"email"}
        isError={!!errors.email}
        rules={emailFromInputRule}
      />

      <FormTextInput
        control={control}
        placeholder="Password"
        name={"password"}
        textContentType={"password"}
        autoComplete={"password"}
        secureTextEntry
        isError={!!errors.password}
        rules={passwordFromInputRule}
      />
    </AuthFormLayout>
  );
};
