import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import store from "./store/configureStore";
import {addUser} from './actions'


const state = store.getState();
store.dispatch(addUser({ id: 4, name: "Benji" }));
store.dispatch(addUser({ id: 5, name: "Charlie" }));
store.dispatch(addUser({ id: 6, name: "Buddy" }));
store.subscribe(()=>{
})

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
