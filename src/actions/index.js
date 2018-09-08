// Action Creator
import axios from "axios";
import {
  ROOT_URL,
  API_KEY,
  FETCH_STORES,
  STORE_SELECTED
} from "../config/env_var";

export function fetchStores(uuId) {
  const url = `${ROOT_URL}/${uuId.trim()}`;
  console.log(url);
  const request = axios
    .get(url, {
      headers: { "x-api-key": API_KEY }
    })
    .catch(err => {
      console.log(err);
    });
  console.log("Request", request);
  return {
    type: FETCH_STORES,
    payload: request
  };
}

export function selectStore(store) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: STORE_SELECTED,
    payload: store
  };
}
