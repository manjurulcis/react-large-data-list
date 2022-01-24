import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import MaterialExample from './pages/materialTableExample';
import WindowExample from "./pages/reactWindowExample";

const rootElement = document.getElementById('root');
ReactDOM.render(<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="react-window" element={<MaterialExample />} />
        <Route path="material-table" element={<WindowExample />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement);
