import { useEffect, useRef, useState } from "react";
import Progressbar from "./progressbar";
import "./styles.css";

const totalMs = 10 * 1000;
const timeInterval = 1 * 1000;
const totalCycles = totalMs / timeInterval;
const progressMade = (timeInterval / totalMs) * 100;

export default function App() {
  const [progress, setProgress] = useState(0);
  const timer = useRef();
  const cyclesCompleted = useRef(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      setProgress((prevProgress) => prevProgress + progressMade);
      console.log("Cycles made");
      cyclesCompleted.current += 1;
      if (cyclesCompleted.current === totalCycles) {
        clearInterval(timer.current);
      }
    }, timeInterval);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return <Progressbar progress={progress} />;
}
