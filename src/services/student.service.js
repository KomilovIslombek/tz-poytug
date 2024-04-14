import axios from 'axios'

class StudentService {
	#URL = 'http://localhost:3000/students'

	async getStudents() {
		const { data } = await axios.get(this.#URL)
		return data
	}

	async getStudent(id) {
		const { data } = await axios.get(`${this.#URL}/${id}`)
		return data
	}

	async sendStudent({ firstName, lastName, age }) {
		if (!firstName || !lastName) return null

		const { data } = await axios.post(this.#URL, {
			firstName,
			lastName,
			age
		})
		return data
	}

	async removeStudent(id) {
		const { data } = await axios.delete(`${this.#URL}/${id}`)
		return data
	}

	async updateStudent({ id, firstName, lastName, age }) {
		if (!id) return undefined

		try {
			const { data } = await axios.put(`${this.#URL}/${id}`, {
				id,
				firstName,
				lastName,
				age
			})
			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}

export const studentService = new StudentService()
