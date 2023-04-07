import React from "react";
import { Link } from "react-router-dom";

import { FaTimes } from "react-icons/fa";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <aside className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
      <h1>NC News</h1>
      <FaTimes
        className="close-sidebar-icon"
        onClick={() => setShowSidebar(false)}
      />
      <Link
        className="sidebar-links"
        onClick={() => setShowSidebar(false)}
        to={"/"}
      >
        Home
      </Link>
      <Link
        className="sidebar-links"
        onClick={() => setShowSidebar(false)}
        to={"/articles"}
      >
        Articles
      </Link>
    </aside>
  );
};

export default Sidebar;
