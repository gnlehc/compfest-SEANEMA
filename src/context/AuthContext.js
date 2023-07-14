import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, database } from '../components/config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { BalanceContext } from './BalanceContext';
const AuthContext = createContext()

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    const { balance } = useContext(BalanceContext)
    function signUp(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        return setDoc(doc(database, "Users", email), {
            email: email,
            password: password,
            balance: balance,
            trHistory: []
        })

    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
            setUser(currUser)
        })
        return () => {
            unsubscribe();
        }
    })
    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

export function UserAuth() {
    return useContext(AuthContext)
}