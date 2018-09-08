import React, { Component } from "react";
import { connect } from "react-redux";

class StoreDetail extends Component {
  render() {
    if (!this.props.store) {
      return <div>Select a Store to get started.</div>;
    }

    return (
      <div id="store-details" className="details">
        <h3>Store Details:</h3>
        <div>Brand Name: {this.props.store.Brand_Name}</div>
        <div>Store UID: {this.props.store.Store_UID}</div>
        <div>Store Number: {this.props.store.Store_Number}</div>
        <div>Device UID: {this.props.store.Device_UID}</div>
        <div>Device Store ID: {this.props.store.Device_Store_ID}</div>
        <div>Device Email Account: {this.props.store.Device_EmailAccount}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    store: state.activeStore
  };
}

export default connect(mapStateToProps)(StoreDetail);
