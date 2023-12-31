import { createContext, useState } from 'react'

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProviders = ({ children }) => {
	const [user, setUser] = useState(null)
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProviders
