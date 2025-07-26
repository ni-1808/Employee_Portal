import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaBuilding, FaCog, FaBars, FaSun, FaMoon } from "react-icons/fa";

function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeStyles = {
    header: darkMode ? "bg-dark text-white" : "bg-light text-dark",
    sidebar: darkMode ? "#333" : "#f6f1e9",
    main: darkMode ? "#1c1c1c" : "#fff8f0",
    footer: darkMode ? "bg-dark text-white" : "bg-light text-dark",
  };

  return (
    <div className="d-flex flex-column vh-100" style={{ transition: "0.5s" }}>
      {/* Header */}
      <header className={`${themeStyles.header} p-3 d-flex justify-content-between align-items-center`}>
        <div className="d-flex align-items-center">
          <FaBars className="me-3" onClick={toggleSidebar} style={{ cursor: "pointer" }} />
          <h2 style={{ fontFamily: 'Georgia, serif', marginBottom: 0 }}>👨‍💻 Employee Portal</h2>
        </div>
        <nav className="d-flex align-items-center">
          <Link to="/" className={`me-3 ${darkMode ? "text-white" : "text-dark"}`}>Home</Link>
          <Link to="/jobs" className={`me-3 ${darkMode ? "text-white" : "text-dark"}`}>Jobs</Link>
          <Link to="/company" className={`me-3 ${darkMode ? "text-white" : "text-dark"}`}>Company</Link>
          <Link to="/settings" className={`me-3 ${darkMode ? "text-white" : "text-dark"}`}>Settings</Link>
          <button onClick={toggleTheme} className="btn btn-sm btn-outline-secondary">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </header>

      {/* Body */}
      <div className="flex-grow-1 d-flex">
        {/* Sidebar */}
        <aside
          className="p-3"
          style={{
            width: collapsed ? "80px" : "220px",
            backgroundColor: themeStyles.sidebar,
            transition: "width 0.3s, background-color 0.5s",
            color: darkMode ? "#eee" : "#333",
          }}
        >
          <ul className="nav flex-column">
            <li className="nav-item mb-3">
              <Link className={`nav-link ${darkMode ? "text-white" : "text-dark"}`} to="/">
                <FaHome className="me-2" />
                {!collapsed && "Dashboard"}
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link className={`nav-link ${darkMode ? "text-white" : "text-dark"}`} to="/jobs">
                <FaBriefcase className="me-2" />
                {!collapsed && "Jobs"}
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link className={`nav-link ${darkMode ? "text-white" : "text-dark"}`} to="/company">
                <FaBuilding className="me-2" />
                {!collapsed && "Company Profile"}
              </Link>
            </li>
            <li className="nav-item mb-3">
              <Link className={`nav-link ${darkMode ? "text-white" : "text-dark"}`} to="/settings">
                <FaCog className="me-2" />
                {!collapsed && "Settings"}
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main */}
        <main className="p-4 flex-grow-1" style={{ background: themeStyles.main, transition: "0.5s", color: darkMode ? "#eee" : "#333" }}>
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className={`${themeStyles.footer} text-center p-2`} style={{ transition: "0.5s" }}>
        © 2025 Employee Portal | All Rights Reserved
      </footer>
    </div>
  );
}

export default Layout;
