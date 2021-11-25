import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebaseConfig from './firebaseConfig';



render(
 ( <FirebaseAppProvider firebaseConfig={ firebaseConfig }>
  <App />
  </FirebaseAppProvider>
 )
  document.getElementById("root")
);
