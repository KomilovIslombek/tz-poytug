import { useMutation, useQueryClient } from '@tanstack/react-query'
import { studentService } from '../../services/student.service'

export const useUpdateStudent = () => {
	// Query to server
	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationKey: ['update student'],
		mutationFn: ({ id, firstName, lastName, age }) =>
			studentService.updateStudent({ id, firstName, lastName, age }),
		onSuccess() {
			queryClient.refetchQueries({ queryKey: ['student list'] })
		},
		onError(error) {
			console.error('error', error)
		}
	})

	const updateStudent = ({ id, firstName, lastName, age }) => {
		mutate({ id, firstName, lastName, age })
		// const res = studentService.updateStudent({ id, firstName, lastName, age })
	}

	return { updateStudent }
}
