import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition(newMode, replace = false) {
    if (!replace) {
      setHistory([...history, newMode]);
      setMode(newMode);
    } else {
      const historyCopy = [...history];
      historyCopy.pop();
      setHistory([...historyCopy, newMode]);
      setMode(newMode);
    }
  }
  function back() {
    if (history.length > 1) {
      const historyCopy = [...history];
      historyCopy.pop();
      setMode(historyCopy[historyCopy.length - 1]);
      setHistory([...historyCopy]);
    }
  }
  return { mode, transition, back };
}
