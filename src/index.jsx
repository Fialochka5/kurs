import React from "react";

import { createRoot } from "react-dom/client";
import App from "./App";

import "./style/Navbar.css";
import "./style/FirstGroup.css";
import "./style/Footer.css";
import "./style/SecondGroup.css";
import "./style/Contacts.css";
import "./style/AdminLogin.css";
import "./style/Gallery.css";
import "./style/main.css";
import "./style/About.css";
import "./style/AddRent.css";
import "./style/Rent.css";
import "./style/admin.css";
import "./style/DetailedRental.css";
import "./style/Connection.css";
import "./style/media.css";
import "materialize-css/dist/js/materialize.min.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
