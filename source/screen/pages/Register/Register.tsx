import React, { useCallback } from "react";

import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import { AuthFormLayout, FormTextInput } from "~/component";
import { emailFromInputRule, passwordFromInputRule } from "~/constants";

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
  const navigation = useNavigation();
  const onSubmit = useCallback((data: RegisterForm) => console.log(data), []);

  const handleLinkButtonPress = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <AuthFormLayout
      formTitle={"Creat Account"}
      linkButtonTitle={"Already have an account? Sign in"}
      linkButtonPress={handleLinkButtonPress}
      submitButtonTitle={"Sign Up"}
      submitButtonPress={handleSubmit(onSubmit)}
      bottomButtonTitle={"Sign up menu"}
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
