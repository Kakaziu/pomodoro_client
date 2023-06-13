import { Action } from "../protocol";

export interface UserState {
  user: User | null;
  error: Error | null;
  loading: boolean;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface UserLoginParams {
  email: string;
  password: string;
}

export interface IAuth {
  user: User;
  token: string;
}
