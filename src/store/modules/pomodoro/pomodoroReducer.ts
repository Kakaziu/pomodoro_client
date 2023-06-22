import { Action } from "../protocol";
import { PomodoroState } from "./protocol";

const initialState: PomodoroState = {
  pomodoros: [],
  pomodoro: null,
  error: null,
  loading: false,
};

export default function PomodoroReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "READ_POMODORO_REQUEST":
      return (state = {
        pomodoros: [...state.pomodoros],
        pomodoro: state.pomodoro,
        error: null,
        loading: true,
      });

    case "READ_POMODORO_SUCCESS":
      return (state = {
        pomodoros: [...action.payload],
        pomodoro: state.pomodoro,
        error: null,
        loading: false,
      });

    case "CREATE_POMODORO_REQUEST":
      return (state = {
        pomodoros: [...state.pomodoros],
        pomodoro: state.pomodoro,
        error: null,
        loading: true,
      });

    case "CREATE_POMODORO_SUCCESS":
      return (state = {
        pomodoros: [...state.pomodoros, action.payload],
        pomodoro: state.pomodoro,
        error: null,
        loading: false,
      });

    case "CREATE_POMODORO_FAILURE":
      return (state = {
        pomodoros: [...state.pomodoros],
        pomodoro: state.pomodoro,
        error: action.payload,
        loading: false,
      });

    case "UPDATE_POMODORO_REQUEST":
      return (state = {
        pomodoros: [...state.pomodoros],
        pomodoro: state.pomodoro,
        error: null,
        loading: true,
      });

    case "UPDATE_POMODORO_SUCCESS":
      return (state = {
        pomodoros: [...state.pomodoros],
        pomodoro: null,
        error: null,
        loading: false,
      });

    case "UPDATE_POMODORO_FAILURE":
      return (state = {
        pomodoros: [...state.pomodoros],
        pomodoro: null,
        error: action.payload,
        loading: false,
      });

    case "DELETE_POMODORO_REQUEST":
      return (state = {
        pomodoros: [...state.pomodoros],
        pomodoro: state.pomodoro,
        error: null,
        loading: true,
      });

    case "DELETE_POMODORO_SUCCESS":
      return (state = {
        pomodoros: state.pomodoros.filter(
          (pomodoro) => pomodoro.id !== action.payload.id
        ),
        pomodoro: state.pomodoro,
        error: null,
        loading: false,
      });

    case "DELETE_POMODORO_FAILURE":
      return (state = {
        pomodoros: [...state.pomodoros],
        pomodoro: state.pomodoro,
        error: action.payload,
        loading: false,
      });
    case "SHOW_POMODORO_REQUEST":
      return (state = {
        pomodoros: [...state.pomodoros],
        pomodoro: state.pomodoro,
        error: null,
        loading: false,
      });

    case "SHOW_POMODORO_SUCCESS":
      return (state = {
        pomodoros: [...state.pomodoros],
        pomodoro: action.payload,
        error: null,
        loading: false,
      });

    case "SHOW_POMODORO_FAILURE":
      return (state = {
        pomodoros: [...state.pomodoros],
        pomodoro: state.pomodoro,
        error: action.payload,
        loading: false,
      });
    case "RESET_POMODORO":
      return (state = {
        pomodoros: [...state.pomodoros],
        pomodoro: null,
        error: null,
        loading: false,
      });
    default:
      return state;
  }
}
