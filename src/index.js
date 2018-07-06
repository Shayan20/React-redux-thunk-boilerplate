import React from "react";
import ReactDOM from "react-dom";
import App from "./containors/App";
import Postdetail from "./containors/postDetail";
import store from "./store/store";
import { Provider } from "react-redux";
// import {  Provider  } from "mobx-react";
// import store from "./store/mobxStore";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as HashRouter, Route, Redirect } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path="/home" component={App} />
        <Route path="/detail/:id" component={Postdetail} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
