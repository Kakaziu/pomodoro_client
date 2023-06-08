export interface Action {
  type: string;
  payload?: any;
}

export interface Error {
  message: string;
}
