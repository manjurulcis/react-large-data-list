import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
const App = () => {
  return (
    <div>
      <h1>Large Dataset Test</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          display: "inline",
        }}
      >
        <Link to="/react-window">Example with React Window</Link> |{" "}
        <Link to="/material-table">Example with React MaterialTable</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default App;
