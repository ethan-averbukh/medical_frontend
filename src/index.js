import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";


// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
