import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import Sidebar from "./Sidebar";
import { UserContext } from "host/Store";

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
import Cart from "detail/Cart"
export default function Navbar() {
  const [user] = useContext(UserContext);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(user);
  }, [user]);

  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "PizzaTime",
      path: "/pizzaTime",
      icon: faList,
    },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }
  return (
    <>
      <div className="navbar containerHome">
        <Link to="/" className="logo">
          F<span>OOD</span>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={location.pathname === link.path ? "active" : ""}
              to={link.path}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="remote2"><Cart/></div>
        <div
          onClick={() => setShowSidebar(true)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}
