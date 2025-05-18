import React from "react";

import { createRoot } from "react-dom/client";
import App from "./App";

import "./style/Navbar.css";
import "./style/FirstGroup.css";
import "./style/Footer.css";
import "./style/SecondGroup.css";
import "./style/Contacts.css";
import "./style/main.css";
import "./style/media.css";
import "materialize-css/dist/js/materialize.min.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
