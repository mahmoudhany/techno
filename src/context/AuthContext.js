<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Auth } from '../utility/firebase';

export const AuthContext = createContext()

export const useAuth = () => {
=======
import React, { createContext, useContext, useState } from 'react';
import { Auth } from '../utility/firebase';
const AuthContext = createContext()

export function useAuth() {
>>>>>>> 94da99ac5f332ac6e0e3e1ef99e18f73d8afefaf
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
<<<<<<< HEAD
  const [currentUser, setCurrentUser] = useState()

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
      setCurrentUser(user)
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
=======

  const [currentUser, setCurrentUser] = useState()

  return (
    <AuthContext.Provider>

>>>>>>> 94da99ac5f332ac6e0e3e1ef99e18f73d8afefaf
    </AuthContext.Provider>
  );
};

export default AuthProvider;
