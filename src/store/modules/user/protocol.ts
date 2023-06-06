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
