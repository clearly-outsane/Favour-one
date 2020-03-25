import axios from "axios";
import { FETCH_USER, ERROR } from "./types";

import history from "../history";

export const fetchUser = formValues => {
  return async dispatch => {
    const response = await axios.post("/user/login", formValues);
    console.log("action:", response);
    if (response.data.err) {
      history.push("/login");
      dispatch({ type: ERROR, payload: response.data.err });
    } else {
      dispatch({ type: FETCH_USER, payload: response.data });
      dispatch({ type: "clear_errors" });
      history.push("/dashboard");
    }
  };
};

export const registerUser = formValues => {
  return async dispatch => {
    console.log("registerUser");
    const response = await axios.post("/user/register", formValues);
    console.log("Register action", response);
    if (response.data.err) {
      history.push("/login");
      dispatch({ type: ERROR, payload: response.data.err });
    } else {
      dispatch({ type: FETCH_USER, payload: response.data });
      dispatch({ type: "clear_errors" });
      history.push("/dashboard");
    }
  };
};
