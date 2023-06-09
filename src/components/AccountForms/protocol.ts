export interface Camp {
  type: Inputs;
  inputType: string;
}

export type Inputs = "Firstname" | "Lastname" | "E-mail" | "Password";

export interface StateCamps {
  value: string;
  error: string;
}

export interface RegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginParams {
  email: string;
  password: string;
}
