export interface IBorder {
  haveBorder: boolean;
  size?: string;
  type?: string;
  color?: string;
}

export interface IButton<T> {
  width: string;
  border: T;
  backgroundColor: string;
  color: string;
  hoverBackgroundColor: string;
  hoverColor: string;
}
