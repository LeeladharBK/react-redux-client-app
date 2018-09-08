import React, { Component } from "react";
import { connect } from "react-redux";
import { selectStore } from "../actions/index";
import { bindActionCreators } from "redux";

class StoreList extends Component {
  renderList() {
    return this.props.stores.list.map(store => {
      return (
        <li
          key={store.Device_UID}
          onClick={() => this.props.selectStore(store)}
          className="list-group-item"
        >
          {store.Brand_Name}-{store.Store_Number}
        </li>
      );
    });
  }

  render() {
    if (this.props.stores !== null) {
      console.log("In list ", this.props.stores.list);
      return <ul className="list-group col-sm-4"> {this.renderList()}</ul>;
      //
    } else {
      return <div> Please Enter the Valid UUID </div>;
    }
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  console.log("State", state);
  return {
    stores: state.stores
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ selectStore: selectStore }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreList);
