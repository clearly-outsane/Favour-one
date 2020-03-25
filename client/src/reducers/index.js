import { combineReducers } from "redux";
import { reducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  form: reducer,
  user: authReducer,
  error: errorReducer
});
