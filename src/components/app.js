import React from "react";
import { Component } from "react";

import InputBar from "../containers/input_bar";
import StoreList from "../containers/store_list";
import StoreDetail from "../containers/store_detail";

export default class App extends Component {
  render() {
    console.log("Start 1: ");

    return (
      <div>
        <InputBar />
        <StoreList />
        <StoreDetail />
      </div>
    );
  }
}
