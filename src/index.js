import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalProvider from "./contecxt/GlobalState";

const rootNode = document.getElementById('root');
ReactDOM.render(<React.StrictMode>
       <BrowserRouter>
       <GlobalProvider><App/></GlobalProvider>
       </BrowserRouter>
   </React.StrictMode>, rootNode);