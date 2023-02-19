import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
const Error = React.lazy(() => import("../pages/Error"));

function Routers() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default Routers;
