import { Outlet } from "react-router";
import "./App.css";
import "./Index.css";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.style.setProperty("--bg-color", "rgb(7, 12, 21)");
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--border-color", "rgba(255, 255, 255, 0.089)");
    } else if (!dark) {
      root.style.setProperty("--bg-color", "#F7F9FC");
      root.style.setProperty("--text-color", "rgb(7, 12, 21)");
      root.style.setProperty("--border-color", "rgba(38, 30, 30, 0.41)");
    }
  }, [dark]);

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <Outlet />
    </>
  );
}

export default App;
