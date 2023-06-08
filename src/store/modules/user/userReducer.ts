import { Action } from "../protocol";
import { UserState } from "./protocol";

const initialState: UserState = { user: null, error: null, loading: false };

export default function UserReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return (state = { user: null, error: null, loading: true });
    case "LOGIN_SUCCESS":
      return (state = { user: action.payload, error: null, loading: false });
    case "LOGIN_FAILURE":
      return (state = { user: null, error: action.payload, loading: false });
    case "LOGOUT":
      return (state = initialState);
    default:
      return state;
  }
}
