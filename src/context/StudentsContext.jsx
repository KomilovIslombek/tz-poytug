import { createContext, useState } from 'react'

export const StudentsContext = createContext({
	formData: [],
	setFormData: null
})

export const StudentProvider = ({ children }) => {
	const [formData, setFormData] = useState({
		id: '',
		firstName: '',
		lastName: '',
		age: ''
	})

	return (
		<StudentsContext.Provider value={{ formData, setFormData }}>
			{children}
		</StudentsContext.Provider>
	)
}
