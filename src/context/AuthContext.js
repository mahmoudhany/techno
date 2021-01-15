import React, { createContext, useContext, useState } from 'react';
import { Auth } from '../utility/firebase';
const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState()

  return (
    <AuthContext.Provider>

    </AuthContext.Provider>
  );
};

export default AuthProvider;
