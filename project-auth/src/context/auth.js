import React, { useEffect, useState } from "react";

let logoutTimer;

export const AuthContext = React.createContext({
  token: null,
  isLoggedIn: false,
  login: (token, expiresIn) => {},
  logout: () => {},
});

const calculateRemainingTime = (expiresIn) => {
  const currentTime = new Date().getTime();
  const validTill = new Date(expiresIn).getTime();
  const timeRemaining = validTill - currentTime;
  return timeRemaining;
};

const retrieveToken = () => {
  const storedToken = localStorage.getItem("token");
  const expiresAt = localStorage.getItem("expiresAt");
  const timeRemaining = calculateRemainingTime(expiresAt);
  if (timeRemaining <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
    return null;
  }
  return {
    token: storedToken,
    timeRemaining: timeRemaining,
  };
};

const AuthProvider = (props) => {
  const tokenRetrieved = retrieveToken();
  let initialToken = null;
  if (tokenRetrieved) initialToken = tokenRetrieved.token;
  const [token, setToken] = useState(initialToken);
  const isUserLoggedIn = !!token;

  const logoutHandler = React.useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
    setToken(null);
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expiresAt) => {
    localStorage.setItem("token", token);
    localStorage.setItem("expiresAt", expiresAt);
    setToken(token);
    const timeRemaining = calculateRemainingTime(expiresAt);
    logoutTimer = setTimeout(logoutHandler, timeRemaining);
  };

  useEffect(() => {
    if (tokenRetrieved)
      logoutTimer = setTimeout(logoutHandler, tokenRetrieved.timeRemaining);
  }, [tokenRetrieved, logoutHandler]);

  return (
    <AuthContext.Provider
      value={{
        token: token,
        isLoggedIn: isUserLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
