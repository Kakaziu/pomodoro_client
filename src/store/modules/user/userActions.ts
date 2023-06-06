import { Error, User, UserLoginParams } from "./protocol";

export const loginRequest = (user: UserLoginParams) => {
  return { type: "LOGIN_REQUEST", payload: user };
};

export const loginSuccess = (user: User) => {
  return { type: "LOGIN_SUCCESS", payload: user };
};

export const loginFailure = (error: Error) => {
  return { type: "LOGIN_FAILURE", payload: error };
};
