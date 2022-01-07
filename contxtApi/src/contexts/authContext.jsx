import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{

    const [loginStatus, setStatus] = useState(false);
    const authController = (token)=>{
        console.log("HELLO FROM AUTH");
          if(token){
              setStatus(true)
              alert('LOGGED IN SUCCESSFULLY')
          }else{
              setStatus(false)
          }
    } 
    return <AuthContext.Provider value={{loginStatus,authController}}>
         {children}
    </AuthContext.Provider>
}