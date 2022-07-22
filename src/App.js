import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import AdminPage from "./components/AdminPage/AdminPage";
import Footer from "./components/Footer/Footer";
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
          <Navigation />
          {/* <Header /> */}
          <div className="main-content">
            <ScrollToTop>
              <Routes>
                <Route path="/admin" element={<AdminPage />} />
                <Route
                  path="/projects/:id"
                  element={<Project bucket={bucket} />}
                />
                <Route path="/" element={<Homepage bucket={bucket} />} />
              </Routes>
            </ScrollToTop>
          </div>
          <Footer bucket={bucket} />
        </div>
      </Router>
    </div>
  );
}

export default App;
