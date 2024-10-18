import { createContext, useState } from "react";

// Creamos el contexto
export const UserContext = createContext(null);

export const MyProvider = ({ children }) => {
   // creamos el estado
   const [user, setUser] = useState(null);

   return (
      // le pasamos los valores como objeto
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
};
