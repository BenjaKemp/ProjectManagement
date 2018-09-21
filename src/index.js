import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import store from "./store/configureStore";
import {addUser} from './actions'


const state = store.getState();
store.dispatch(addUser({ id: 4, user: "Benji" }));
store.dispatch(addUser({ id: 5, user: "Charlie" }));
store.dispatch(addUser({ id: 6, user: "Buddy" }));
store.subscribe(()=>{
  console.log('state on change', state)
})

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
