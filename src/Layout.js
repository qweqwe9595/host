import React, { useState,Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./index.css";
import SafeComponent from "./SafeComponent";
import { UserContext } from "host/Store";

const DetailLayout = React.lazy(() => import("detail/Detail"));

function Layout() {
  const [User, setUser] = useState([]);
  return (
    <UserContext.Provider value={[User, setUser]}>
      <Router>
        <Navbar />
        <div className="containerHome main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/detail/:id"
              element={
                <SafeComponent>
                  <Suspense fallback={<div>Loading...</div>}>
                    <DetailLayout />
                  </Suspense>
                </SafeComponent>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default Layout;
