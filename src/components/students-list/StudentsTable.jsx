import { DataGrid } from '@mui/x-data-grid'
import { useFetchStudents } from '../../hooks/students/useFetchStudents'
import { columns } from './Columns'

export default function StudentsTable() {
	const { rows } = useFetchStudents()

	return (
		<div style={{ height: 370, minWidth: '100%' }}>
			{rows && (
				<DataGrid
					rows={rows}
					columns={columns}
					style={{ height: '100%', minWidth: '100%' }}
					initialState={{
						pagination: {
							paginationModel: { page: 0, pageSize: 5 }
						}
					}}
					pageSizeOptions={[5, 10]}
				/>
			)}
		</div>
	)
}
