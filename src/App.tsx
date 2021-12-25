import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const a = [
    1, 2, 3, 4, 5, 6, 7, 7, 8, 3, 4, 3, 2, 2, 3, 3, 4, 43, 3, 2, 3, 3, 3, 3, 3,
    3, 4, 2, 3, 4, 2, 3, 42, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  ];

  useEffect(() => {
    if (count) {
      const a = 10;
      console.log(a);
    }
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
