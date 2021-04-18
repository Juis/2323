'use strict'

const User = use('App/Models/User')

class UserService {
	async findAll({ params, response }) {
		try {
			let { page, perPage } = params

			if (!page) {
				return response.status(400).send("You must provide a page.")
			} else if (isNaN(page)) {
				return response.status(400).send("Page accepts integer only.")
			}

			if (!perPage) {
				return response.status(400).send("You must provide a perPage.")
			} else if (isNaN(perPage)) {
				return response.status(400).send("PerPage accepts integer only.")
			}

			const user = await User.query().paginate(page, perPage)

			return response.ok(user)
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	async findOne({ params, response }) {
		try {
			const { id } = params

			if (isNaN(id)) {
				return response.status(400).send("Id accepts integer only.")
			}

			const user = await User.query().where("id", id).first()
			if (!user) {
				return response.status(400).send({ message: "No records found." })
			}

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

			return response.ok(user)
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	async delete({ params, response }) {
		try {
			const { id } = params

			if (isNaN(id)) {
				return response.status(400).send("Id accepts integer only.")
			}

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

			if (isNaN(id)) {
				return response.status(400).send("Id accepts integer only.")
			}

			let user = await User.query().where("id", id).first()
			if (!user) {
				return response.status(400).send({ message: "User not found." })
			}

			const data = await User.query().where("id", id).update({ "name": name })

			user = await User.query().where("id", id).first()
			return response.ok(user)
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

}

module.exports = UserService
