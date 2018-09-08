import { combineReducers } from "redux";
import StoresReducer from "./reducer_stores";
import ActiveStore from "./reducer_active_store";

const rootReducer = combineReducers({
  stores: StoresReducer,
  activeStore: ActiveStore
});

export default rootReducer;
