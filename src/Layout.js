import React, { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import "./index.css";
import DetailLayout from "detailPage/Layout";
import SafeComponent from "./SafeComponent";
import {UserContext} from "host/Store"


function Layout() {
  const [User, setUser] = useState();
  return (
    <UserContext.Provider value={[User, setUser]}>
      <Router>
        <Navbar />
        <div className="container main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/detail/:id" element={<DetailLayout />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default Layout;
