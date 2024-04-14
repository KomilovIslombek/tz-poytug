import { MdOutlineDeleteOutline } from 'react-icons/md'
import { useStudent } from '../../../hooks/students/useStudent'
import styles from './DeleteIcon.module.scss'

const DeleteIcon = ({ id }) => {
	const { removeStudent } = useStudent()

	return (
		<button className={styles.delButton} onClick={() => removeStudent(id)}>
			<MdOutlineDeleteOutline />
		</button>
	)
}

export default DeleteIcon
