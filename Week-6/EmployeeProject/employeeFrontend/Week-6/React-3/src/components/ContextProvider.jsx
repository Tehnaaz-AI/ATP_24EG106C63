import { createContext, useState } from "react";

export const userContextObj = createContext();

function ContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <userContextObj.Provider value={{ count, increment }}>
      {children}
    </userContextObj.Provider>
  );
}

export default ContextProvider;