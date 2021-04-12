'use strict'

const User = use('App/Models/User')

class UserService {
	async findAll({ request, response }) {
		try {
			const user = await User.query().fetch()

			return response.ok(user)
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	async findOne({ params, request, response }) {
		try {
			const { id } = params

			const user = await User.findOrFail(id)

			return response.ok(user)
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	async register({ request, response }) {
		try {
			const { name, email, password } = request.only(['name', 'email', 'password'])

			const user = new User()

			user.name = name
			user.email = email
			user.password = password

			await user.save()

			return response.ok({ message: "Successfully registered." })
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	async delete({ params, request, response }) {
		try {
			const { id } = params

			await User
				.query()
				.where("id", id)
				.update({ "active": 0 })

			return response.ok({ message: "Successfully removed." })
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	async update({ params, request, response }) {
		try {
			const { id } = params
			const { name } = request.only(['name'])

			await User
				.query()
				.where("id", id)
				.update({ "name": name })

			return response.ok({ message: "Successfully updated" })
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

}

module.exports = UserService
