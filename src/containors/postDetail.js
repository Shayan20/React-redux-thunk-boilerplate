import React, { Component } from "react";
import Datalist from "../components/list";
import { connect } from "react-redux";
import { getOnePost } from "../store/actions/actions";

class PostDetail extends Component {
  componentDidMount() {
    const { params } = this.props.match;
    this.props.doGetOnePost(params);
  }

  render() {
    return (
      <div>
        <table className="table">
          <tbody>
            <tr>
              <th>User Id</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
            {this.props.loader ? (
              <div style={{ textAlign: "center" }}>
                <p className="title is-5">Loading...</p>
              </div>
            ) : (
              <tr>
                <td>{this.props.post ? this.props.post.userId : null}</td>
                <td>{this.props.post ? this.props.post.id : null}</td>
                <td>{this.props.post ? this.props.post.title : null}</td>
                <td>{this.props.post ? this.props.post.body : null}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ dataFetchReducer }) => {
  return {
    post: dataFetchReducer.post,
    loader: dataFetchReducer.loader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doGetOnePost: obj => dispatch(getOnePost(obj))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
