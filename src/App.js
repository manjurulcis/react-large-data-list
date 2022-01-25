import React from "react";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  const blockStyle = {
    display: "inline-block",
    marginRight: "10px",
  }

  return (
    <div >
      <h1 style={blockStyle}>Large Dataset Test</h1>
      <nav style={blockStyle}>
        <Link to="/react-window">Example with React Window</Link> |{" "}
        <Link to="/material-table">Example with React MaterialTable</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default App;
