import React, { useCallback } from "react";

import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import { AuthFormLayout, FormTextInput } from "~/component";
import { emailFromInputRule, passwordFromInputRule, Routes } from "~/constants";

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

  const navigation = useNavigation();

  const onSubmit = useCallback((data: LoginForm) => {
    navigation.navigate(Routes.REGISTER);
  }, []);

  const handleLinkButtonPress = useCallback(() => {
    navigation.navigate(Routes.REGISTER);
  }, []);

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
