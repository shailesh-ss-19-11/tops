import React from "react";
import ReactDOM from 'react-dom/client'; //virtual dom 
import App from './App'
import { store } from "./Store";
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)