export const USER = "user";
export type USER = typeof USER;

export type UsersStateType = {
  user: IUserState;
};

export type IUserState = {
  data: null | UserType;
  isLoading: boolean;
  errors: string;
};

export type UserType = {
  id: string;
  email: string;
  createdAt: Date;
};

export type AuthAction = {
  email: string;
  password: string;
  onSuccess?: () => void;
};

export const LOGIN = `${USER}/loginAction`;
export type LOGIN = typeof LOGIN;

export const REGISTER = `${USER}/registerAction`;
export type REGISTER = typeof REGISTER;
