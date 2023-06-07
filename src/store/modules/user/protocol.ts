export interface State {
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

export interface Error {
  message: string;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface IAuth {
  user: User;
  token: string;
}
