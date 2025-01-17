/** @format */

import React, {useCallback, useMemo} from 'react';

import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

import {AppButton, AuthFormLayout, FormTextInput} from '~/component';
import {emailFromInputRule, passwordFromInputRule, Routes} from '~/constants';
import {loginAction, loginSelector} from '~/store';
import {LoginNavigationProp} from '~/types';

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
      email: '',
      password: '',
    },
  });

  const dispatch = useDispatch();
  const navigation = useNavigation<LoginNavigationProp>();
  const { isLoading, error } = useSelector(loginSelector);

  const onSubmit = useCallback(
    ({ email, password }: LoginForm) => {
      dispatch(
        loginAction({
          email,
          password,
          onSuccess: () => {
            navigation.reset({
                index: 1,
                routes: [
                    { name: Routes.ROOT },
                ],
            });
          },
        }),
      );
    },
    [dispatch, navigation],
  );

  const handleLinkButtonPress = useCallback(() => {
    navigation.navigate(Routes.REGISTER);
  }, [navigation]);

  const SubmitButton = useMemo(
    () => (
      <AppButton.SolidButton
        title={'Sign In'}
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
        disabled={isLoading}
      />
    ),
    [handleSubmit, isLoading, onSubmit],
  );

  return (
    <AuthFormLayout
      formTitle={'Sign In'}
      linkButtonTitle={"Don't registered yet? Sign up"}
      linkButtonPress={handleLinkButtonPress}
      bottomButtonTitle={'Sign In menu'}
      submitButton={SubmitButton}
    >
      <FormTextInput
        control={control}
        placeholder="Email"
        name={'email'}
        keyboardType={'email-address'}
        textContentType={'emailAddress'}
        autoComplete={'email'}
        isError={!!errors.email || !!error}
        rules={emailFromInputRule}
      />

      <FormTextInput
        control={control}
        placeholder="Password"
        name={'password'}
        textContentType={'password'}
        autoComplete={'password'}
        secureTextEntry
        isError={!!errors.password || !!error}
        rules={passwordFromInputRule}
      />
    </AuthFormLayout>
  );
};
