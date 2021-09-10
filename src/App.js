import "./App.css";
import { useEffect, useState } from "react";
let interval = false;
let myCounter = 0;
function App() {
  const [seconds, setSeconds] = useState(25);
  useEffect(() => {
    startInterval();
  }, []);

  myCounter = seconds;
  const startInterval = () => {
    interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
      console.log("counter: ", myCounter);
      if (myCounter === 0) clearInterval(interval);
    }, 1000);
  };

  return (
    <div
      style={{
        backgroundColor:
          seconds == 20
            ? "black"
            : seconds == 10
            ? "yellow"
            : seconds == 5
            ? "white"
            : "white",
        height: 657,
      }}
      className="App-header"
    >
      <b style={{ color: "green" }}>{seconds}</b>
    </div>
  );
}

export default App;
