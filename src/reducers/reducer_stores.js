// Reducer to get
import { FETCH_STORES } from "../config/env_var";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_STORES:
      if (action.payload.data === undefined) {
        return null;
      }
      console.log("lalath", action.payload.data);
      console.log("Stores state: ", state);
      return action.payload.data;
  }
  return state;
}
