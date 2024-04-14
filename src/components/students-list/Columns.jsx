import DeleteIcon from '../ui/delete-icon/DeleteIcon'
import EditIcon from '../ui/edit-icon/EditIcon'

export const columns = [
	{ field: 'id', headerName: 'ID' },
	{ field: 'firstName', headerName: 'First name', minWidth: 150, flex: 1 },
	{ field: 'lastName', headerName: 'Last name', minWidth: 150, flex: 1 },
	{
		field: 'age',
		headerName: 'Age',
		type: 'number',
		minWidth: 100,
		flex: 0.2
	},
	{
		field: 'fullName',
		headerName: 'Full name',
		description: 'This column has a value getter and is not sortable.',
		sortable: false,
		valueGetter: ({ row }) => `${row?.firstName || ''} ${row?.lastName || ''}`,
		minWidth: 200,
		flex: 1
	},
	{
		field: 'Edit',
		headerName: 'Edit',
		sortable: false,
		renderCell: ({ row }) => <EditIcon id={row.id} />,
		minWidth: 70,
		flex: 1,
		filterable: false
	},
	{
		field: 'Delete',
		headerName: 'Delete',
		sortable: false,
		renderCell: ({ row }) => <DeleteIcon id={row.id} />,
		minWidth: 70,
		flex: 1,
		filterable: false
	}
]
