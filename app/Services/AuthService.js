'use strict'

const User = use('App/Models/User')
const Encryption = use('Encryption')
const Token = use('App/Models/Token')
const Mail = use('Mail')
const Decode = require('jwt-decode')

class AuthService {
	async login({ request, response, auth }) {
		try {
			const { email, password } = request.only(['email', 'password'])

			const user = await User.query().where('email', email).first()

			if (!user) {
				return response.status(401).send({ message: "User not found." })
			}

			const data = await auth.withRefreshToken().attempt(email, password)
			return response.ok(data)
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	async register({ request, response, auth }) {
		try {
			const { name, email, password } = request.only(['name', 'email', 'password'])

			const user = new User()

			user.name = name
			user.email = email
			user.password = password

			await user.save()

			const { token } = await auth.generate(user)

			user.token = token

			await Mail.send('emails.confirm', user.toJSON(), (message) => {
				message.to(user.email)
					.from('lucas@gmail.com')
					.subject('Email confirmation')
			}).catch((error) => {
				return response.status(error.status).send(error)
			})

			return response.ok({ message: "Successfully registered." })
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	async logout({ request, response, auth }) {
		try {
			const { refreshToken } = request.only(['refreshToken'])

			const decrypted = Encryption.decrypt(refreshToken)

			if (!decrypted) {
				return response.status(400).send({ message: "Invalid token." })
			}

			const isToken = await Token.findBy("token", decrypted)

			if (!isToken) {
				return response.status(400).send({ message: "Invalid token." })
			}

			isToken.delete()
			return response.ok({ message: "Logged off successfully." })
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	async confirmRegister({ params, response }) {
		try {
			const { token } = params
			const { uid } = await Decode(token)

			if (!token) {
				return response.status(400).send("You must provide a token.")
			}

			if (!uid) {
				return response.status(400).send({ message: "Invalid token." })
			}

			await User
				.query()
				.where('id', uid)
				.update({ active: 1 })

			return response.ok({ message: "Email confirmed successfully." })
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

}

module.exports = AuthService
