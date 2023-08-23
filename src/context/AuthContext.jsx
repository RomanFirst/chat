import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
// create context
const AuthContext = createContext()
// Provider Context
export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null)
	const [loading, setLoading] = useState(true)

	// signin with google
	const signinWithGoogle = () => {
		const provider = new GoogleAuthProvider()
		signInWithPopup(auth, provider)
	}

	// signout with google
	const logout = () => signOut(auth)

	const value = {
		currentUser,
		setCurrentUser,
		signinWithGoogle,
		logout,
	}

	// set current user
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			setCurrentUser(user)
			setLoading(false)
		})
		return unsubscribe
	}, [])

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}

export const UserAuth = () => {
	return useContext(AuthContext)
}
