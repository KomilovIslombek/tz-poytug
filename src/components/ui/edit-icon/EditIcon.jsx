import { useContext } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { StudentsContext } from '../../../context/StudentsContext'
import { useFetchStudents } from '../../../hooks/students/useFetchStudents'
import styles from './EditIcon.module.scss'

const EditIcon = ({ id }) => {
	const { formData, setFormData } = useContext(StudentsContext)
	const { rows } = useFetchStudents()

	const handleUpdate = id => {
		const [student] = rows.filter(student => student.id === id)
		console.log(student)
		setFormData({
			...student
		})
	}

	return (
		<button className={styles.editButton} onClick={() => handleUpdate(id)}>
			<FaRegEdit />
		</button>
	)
}

export default EditIcon
