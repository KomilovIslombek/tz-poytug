import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { StudentsContext } from '../../context/StudentsContext'
import { useUpdateStudent } from '../../hooks/students/useUpdateStudent'
import { studentService } from '../../services/student.service'
import styles from './StudentForm.module.scss'

const StudentForm = () => {
	const { formData, setFormData } = useContext(StudentsContext)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { updateStudent } = useUpdateStudent()

	const queryClient = useQueryClient()

	// Send Student query
	const { mutate, isPending } = useMutation({
		mutationKey: ['send student'],
		mutationFn: data => studentService.sendStudent(data),
		onSuccess() {
			queryClient.refetchQueries({ queryKey: ['student list'] })
			reset()
			setFormData({
				firstName: '',
				lastName: '',
				age: ''
			})
		},
		onError(error) {
			console.error('error', error)
		}
	})

	const onSubmit = data => {
		if (!formData.id) {
			console.log(formData)
			mutate(formData)
		} else {
			updateStudent(formData)

			setFormData({
				firstName: '',
				lastName: '',
				age: ''
			})
		}
	}

	// Функция для обновления состояния по имени поля
	const handleInputChange = e => {
		const { name, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<input
				name='firstName'
				required
				placeholder='Enter firstName'
				value={formData.firstName}
				onChange={handleInputChange}
			/>

			<input
				name='lastName'
				required
				type='text'
				placeholder='Enter lastName'
				value={formData.lastName}
				onChange={handleInputChange}
			/>

			<input
				name='age'
				required
				type='number'
				placeholder='Enter age'
				value={formData.age}
				onChange={handleInputChange}
			/>

			<button type='submit' className={styles.button}>
				Submit
			</button>
		</form>
	)
}

export default StudentForm
