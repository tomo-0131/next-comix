import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../lib/firebase';

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState('');

  const value = {
    currentUser,
  };

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setCurrentUser(currentUser);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
