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
	 * POST logout
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
	 * Logout
	 * POST logout
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async confirmRegister({ params, request, response, auth }) {
		try {
			const { token } = params

			if (token) {
				const data = await AuthService.confirmRegister({ params, request, response, auth })
				return data
			} else {
				return response.status(500).send({ message: 'You must provide a token.' })
			}
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}
}

module.exports = AuthController
