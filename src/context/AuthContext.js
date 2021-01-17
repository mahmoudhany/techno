import React, { createContext, useContext, useEffect, useState } from 'react';
import { Auth } from '../utility/firebase';

export const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    user: null,
    loaded: false
  })

  const signup = (email, password) => {
    return Auth.createUserWithEmailAndPassword(email, password)
  }
  const login = (email, password) => {
    return Auth.signInWithEmailAndPassword(email, password)
  }
  const logout = () => {
    return Auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged((user) => {
      setCurrentUser({
        user,
        loaded: true
      })
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
