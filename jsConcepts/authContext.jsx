import React from "react";

const AuthContext = React.createContext();
export const AuthContextProvider = ({ child }) => {
  const [isLogged, setLogs] = React.useState(false);

  const authContext = (token) => {
    if (token) {
      setLogs(true);
    } else {
      setLogs(false);
    }
  };
  <AuthContext.Provider value={(isLogged, authContext)}>
    {/* whole Application wrapped  */}
    {child}
  </AuthContext.Provider>;
};
