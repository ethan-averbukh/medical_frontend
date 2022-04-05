import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import "./styles/css/index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import IntroComponent from "./components/Home/IntroductionPage";
import HomePageComponent from "./components/Home/HomePage";

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
