import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRef, useState } from 'react'
import { studentService } from '../../services/student.service'

export const useStudent = () => {
	const [id, setId] = useState(null)
	const [show, setShow] = useState(false)
	const refArea = useRef()

	// Query to server
	const queryClient = useQueryClient()

	// Remove Student query
	const { mutate, isPending } = useMutation({
		mutationKey: ['remove student'],
		mutationFn: () => studentService.removeStudent(id),
		onSuccess() {
			setId(null)
			queryClient.refetchQueries({ queryKey: ['student list'] })
		},
		onError(error) {
			console.error('error', error)
		}
	})

	// Functions
	function removeStudent(id) {
		setId(id)
		mutate()
	}

	return {
		show,
		id,
		setId,
		refArea,
		removeStudent
	}
}
