'use strict'

const AuthService = make('App/Services/AuthService')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class AuthController {
	/**
	 * Login
	 * GET login
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async login({ request, response, auth }) {
		try {
			const data = await AuthService.login({ request, response, auth })
			return data
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	/**
	 * Register
	 * POST register
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async register({ request, response, auth }) {
		try {
			const data = await AuthService.register({ request, response, auth })
			return data
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	/**
	 * Logout
	 * POST auht/logout
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async logout({ request, response, auth }) {
		try {
			const data = await AuthService.logout({ request, response, auth })
			return data
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	/**
	 * Confirm Register
	 * POST auht/logout
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async confirmRegister({ params, response }) {
		try {
			const { token } = params

			if (!token) {
				return response.status(500).send({ message: 'You must provide a token.' })
			}

			const data = await AuthService.confirmRegister({ params, response })
			return data
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	/**
	 * Profile
	 * GET auth/profile
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async profile({ response, auth }) {
		try {
			const user = auth.getUser()

			return user
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}
}

module.exports = AuthController
