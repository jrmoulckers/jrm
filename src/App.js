import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";

import AdminPage from "./components/AdminPage/AdminPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage";
import Navigation from './components/Navigation';
// import Redirect from "components/Redirect";

// const api = require("cosmicjs")({
//   token: process.env.REACT_APP_COSMIC_AUTH_TOKEN,
// });

// const bucket = api.bucket({
//   slug: "jrmoulckers-site",
//   read_key: process.env.REACT_APP_BUCKET_READ_KEY
// });

// const obj = bucket.getObject({
//   slug: "pages",
// });

// console.log(obj)

const Cosmic = require("cosmicjs");
const api = Cosmic();
const bucket = api.bucket({
  slug: "jrmoulckers-site",
  read_key: process.env.REACT_APP_BUCKET_READ_KEY,
});

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <Navigation /> */}
          {/* <Header /> */}
          <div className="main-content">
            <Switch>
              <Route path="/">
                <Homepage bucket={bucket}/>
              </Route>
              <Route path="/admin">
                <AdminPage />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
