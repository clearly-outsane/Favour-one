import { ERROR } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case ERROR:
      return [...state].push(action.payload);
    case "clear_errors":
      return [];
    default:
      return state;
  }
}
