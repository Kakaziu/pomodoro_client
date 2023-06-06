import { Action } from "./protocol";

export default function UserReducer(
  state = { user: null, error: null, loading: false },
  action: Action
) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return (state = { user: null, error: null, loading: true });
    case "LOGIN_SUCCESS":
      return (state = { user: action.payload, error: null, loading: false });
    case "LOGIN_FAILURE":
      return (state = { user: null, error: action.payload, loading: false });
    default:
      return state;
  }
}
