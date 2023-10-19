import React, { createContext, useState , useEffect} from "react";

export const authcontext = createContext();

export function AuthnProvider({ children }) {
  const [token, setToken] = useState(null);
  useEffect(function() {
    if(localStorage.getItem('tkn')!=null)
    setToken(localStorage.getItem('tkn'))
  }, [])
  
 
  return (
    <authcontext.Provider value={{ token, setToken }}>
      {children}
    </authcontext.Provider>
  );
}