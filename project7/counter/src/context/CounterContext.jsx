import React, { createContext, useState } from "react";

export const contextdega = createContext(null);

export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);

  return (
    <contextdega.Provider value={{ count, setCount }}>
      {props.children}
    </contextdega.Provider>
  );
};
