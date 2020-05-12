import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./redux/store";
import App from "./containers/App";
import { Provider } from "react-redux";
import { Lines } from "react-preloaders";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Lines />
    <App />
  </Provider>,
  document.getElementById("root")
);
