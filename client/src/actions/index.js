import axios from "axios";
import { FETCH_USER } from "./types";

import history from "../history";

export const fetchUser = formValues => {
  return async dispatch => {
    console.log("ACtion", formValues);
    const response = await axios.post("/user/login", formValues);
    dispatch({ type: FETCH_USER, payload: response.data });
    console.log(response);
    if (response.data.err) history.push("/login");
  };
};
