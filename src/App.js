import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.scss";

import AdminPage from "./components/AdminPage/AdminPage";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage";
import Navigation from "./components/Navigation";
import Project from "./components/Projects/Project";
import ScrollRouter from "./components/util/ScrollRouter";

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
            <ScrollRouter>
              <Routes>
                <Route path="/admin" element={<AdminPage />} />
                <Route
                  path="/projects/:id"
                  element={<Project bucket={bucket} />}
                />
                <Route path="/*" element={<Homepage bucket={bucket} />} />
              </Routes>
            </ScrollRouter>
          </div>
          <Footer bucket={bucket} />
        </div>
      </Router>
    </div>
  );
}

export default App;
