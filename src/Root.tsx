import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PersonPage } from "./pages/PersonPage";

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="person/:id" element={<PersonPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);
