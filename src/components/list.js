import React, { Component } from "react";
import Webservice from "../utils/axiosLayer";
import { Link } from "react-router-dom";

class Datalist extends Component {
   constructor(){
     super();
     this.state = {
        list: []
     }
   }


  shouldComponentUpdate(nextProps) {
    if (this.props.list !== nextProps.list) {
        return true
    }
  }

  render() {
    return (
      <div>
        {this.props.loader ? (
          <div style={{ textAlign: "center" }}>
            <p className="title is-5">Loading...</p>
          </div>
        ) : (
          <table className="table">
            <tr>
              <th>Title</th>
              <th>Actions</th>
            </tr>
            {this.props.list.map((items, index) => {
              return (
                <tr key={index}>
                  <td>{items.title}</td>
                  <td>
                    <Link to={`/detail/${items.id}`}>
                      <button className="button is-primary">Detail</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    );
  }
}

export default Datalist;
