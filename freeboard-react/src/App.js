import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import SourceTree from "./route/SourceTree";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SourceTree />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
