import { Outlet } from "react-router-dom";
import { Logo } from "./components/Logo";
import './App.scss';

export const App = () => (
  <main className="main">
    <header className="header">
      <Logo />
    </header>
    <section className="content">
      <Outlet />
    </section>
  </main>
);
