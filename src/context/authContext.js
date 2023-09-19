import React, { useState, useEffect, createContext } from "react";

const AuthContext = createContext();
const { Provider } = AuthContext;
//const url = 'https://project-finder-backend-production.up.railway.app';
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    async function checkIfUserIsLoggedIn() {
      try {
        let response = await fetch('https://project-finder-backend-production.up.railway.app/api/auth/login');

        if (!response.ok) {
          throw new Error("Unauthenticated");
        }

        let fetchedUser = await response.json();
        setUser(fetchedUser);
      } catch (error) {
        console.log("Error: User not logged in.")
        setUser(false);
      }
    }

    checkIfUserIsLoggedIn();

    return () => {
      // clean up function
    };
  }, []);

  const authenticate = async (email, password) => {
    let response = await fetch('https://project-finder-backend-production.up.railway.app/api/auth/login', {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Login Failed");
    }

    let loggedInUser = await response.json();
    setUser(loggedInUser);

    return loggedInUser;
  };

  const signout = async () => {
    let response = await fetch('https://project-finder-backend-production.up.railway.app/api/auth/logout', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Logout Failed");
    }

    let body = await response.json();
    setUser(false);

    return body;
  };

  return (
    <Provider
      value={{
        authenticate,
        signout,
        isAuthenticated: user ? true : false,
        user,
      }}
    >
      {children}
    </Provider>
  );
};

// Our own hook for accessing the context from any functional component
function useAuth() {
  return React.useContext(AuthContext);
}

export { useAuth, AuthProvider };