import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

import AdminPage from "./components/AdminPage/AdminPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import Project from "./components/Projects/Project";
import ScrollToTop from "./components/util/scrollToTop";

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
          <ScrollToTop />
          <Navigation />
          {/* <Header /> */}
          <div className="main-content">
            <Switch>
              <Route path="/admin">
                <AdminPage />
              </Route>
              <Route path="/projects/:id">
                <Project bucket={bucket} />
              </Route>
              <Route path="/">
                <Homepage bucket={bucket} />
              </Route>
            </Switch>
          </div>
          <Footer bucket={bucket} />
        </div>
      </Router>
    </div>
  );
}

export default App;
