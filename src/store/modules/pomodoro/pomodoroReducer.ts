import { Action } from "../protocol";
import { PomodoroState } from "./protocol";

const initialState: PomodoroState = {
  pomodoros: [],
  error: null,
  loading: false,
};

export default function PomodoroReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "READ_POMODORO_REQUEST":
      return (state = {
        pomodoros: [...state.pomodoros],
        error: null,
        loading: true,
      });

    case "READ_POMODORO_SUCCESS":
      return (state = {
        pomodoros: [action.payload],
        error: null,
        loading: false,
      });

    case "CREATE_POMODORO_REQUEST":
      return (state = {
        pomodoros: [...state.pomodoros],
        error: null,
        loading: true,
      });

    case "CREATE_POMODORO_SUCCESS":
      return (state = {
        pomodoros: [...state.pomodoros, action.payload],
        error: null,
        loading: false,
      });

    case "CREATE_POMODORO_FAILURE":
      return (state = {
        pomodoros: [...state.pomodoros],
        error: action.payload,
        loading: false,
      });

    case "UPDATE_POMODORO_REQUEST":
      return (state = {
        pomodoros: [...state.pomodoros],
        error: null,
        loading: true,
      });

    case "UPDATE_POMODORO_SUCCESS":
      return (state = {
        pomodoros: [...state.pomodoros, action.payload],
        error: null,
        loading: false,
      });

    case "UPDATE_POMODORO_FAILURE":
      return (state = {
        pomodoros: [...state.pomodoros],
        error: action.payload,
        loading: false,
      });

    case "DELETE_POMODORO_REQUEST":
      return (state = {
        pomodoros: [...state.pomodoros],
        error: null,
        loading: true,
      });

    case "DELETE_POMODORO_SUCCESS":
      return (state = {
        pomodoros: state.pomodoros.filter(
          (pomodoro) => pomodoro.id !== action.payload.id
        ),
        error: null,
        loading: false,
      });

    case "DELETE_POMODORO_FAILURE":
      return (state = {
        pomodoros: [...state.pomodoros],
        error: action.payload,
        loading: false,
      });
  }
}
