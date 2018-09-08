// State argument is not application state, only the state
// this reducer is responsible for
import { STORE_SELECTED } from "../config/env_var";

export default function(state = null, action) {
  switch (action.type) {
    case STORE_SELECTED:
      return action.payload;
  }
  return state;
}
