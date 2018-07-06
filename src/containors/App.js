import React, { Component } from "react";
import Datalist from "../components/list";
import { connect } from "react-redux";
import { getData } from "../store/actions/actions";
import { observer } from "mobx-react";

class App extends Component {
  componentDidMount() {
    this.props.doGetData();
  }

  render() {
    return (
      <div>
        <Datalist list={this.props.data || []} loader={this.props.loader} />
      </div>
    );
  }
}

const mapStateToProps = ({ dataFetchReducer }) => {
  return {
    data: dataFetchReducer.data,
    loader: dataFetchReducer.loader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doGetData: obj => dispatch(getData(obj))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
