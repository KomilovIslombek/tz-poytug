import cn from 'clsx'
import { useState } from 'react'
import StudentForm from '../../components/student-form/StudentForm'
import StudentsList from '../../components/students-list/StudentsList'
import styles from './Home.module.scss'

function Home() {
	const [count, setCount] = useState(0)

	return (
		<div className={styles.home}>
			<div className={styles.card}>
				<h5 className={styles.filterTitle}>Filter Menu on hover (th)</h5>
				<StudentsList />
			</div>
			<div className={cn(styles.card, styles.form)}>
				<h5 className={styles.filterTitle}>Form</h5>
				<StudentForm />
			</div>
		</div>
	)
}

export default Home
