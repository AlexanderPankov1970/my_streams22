import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App.js";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
); //gg326 Redux DevTools, gg 344ReduxThunk
//const store = createStore(reducers);

const root = createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// import thunk from "redux-thunk";
//import { createStore, applyMiddleware } from "redux";
