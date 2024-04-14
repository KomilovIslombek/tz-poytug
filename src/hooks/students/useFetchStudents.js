import { useQuery } from '@tanstack/react-query'
import { studentService } from '../../services/student.service'

const useFetchStudents = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['student list'],
		queryFn: () => studentService.getStudents()
	})
	return { rows: data, isLoading, isError }
}

export { useFetchStudents }
