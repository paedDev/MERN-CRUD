import { useState } from "react";
import { createContext } from "react";

export const GlobalContext = createContext({});

export default function GlobalState({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <GlobalContext.Provider value={{ loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
}
