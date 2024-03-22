import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Task2";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import clsx from "clsx";
import dayjs from "dayjs";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  const [lastUpdatedDate, setLastUpdatedDate] = useState(null);
  const toggleTheme = () => {
    // setTheme(theme === "light" ? "dark" : "light");
    // setTheme((theme === "light" && "dark") || "light");
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    setLastUpdatedDate(dayjs().format("HH:mm:ss MMMM,DD"));
  }, [theme, count]);

  return (
    <div className={clsx(theme)}>
      <div className="viteReact">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React is amazing</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Header></Header>
      <button onClick={toggleTheme}>Toggle Theme: {theme}</button>
      <p className="lastUpdatedDate">lastUpdatedDate: {lastUpdatedDate}</p>
    </div>
  );
}

export default App;
