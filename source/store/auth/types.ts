export const AUTH = "auth";
export type AUTH = typeof AUTH;

type Authorization = {
  isLoading: boolean;
  error: Error | null;
};

export type AuthStateType = {
  isAuthorized: boolean;
  login: Authorization;
  register: Authorization;
};

export type AuthAction = {
  email: string;
  password: string;
  onSuccess?: () => void;
};

export const LOGIN = `${AUTH}/loginAction`;
export type LOGIN = typeof LOGIN;

export const REGISTER = `${AUTH}/registerAction`;
export type REGISTER = typeof REGISTER;
