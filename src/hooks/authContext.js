import React, { createContext } from 'react';
import { useAuthProvider } from './useAuthProvider';

export const AuthContext = createContext();

export const ProvideAuth = ({ children }) => {
    const auth = useAuthProvider();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
