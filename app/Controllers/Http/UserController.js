'use strict'

const UserService = make('App/Services/UserService')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class UserController {
	/**
	 * Show a list of all user.
	 * GET users
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async findAll({ request, response }) {
		try {
			const data = await UserService.findAll({ request, response })
			return data
		} catch (error) {
			return response.status(error.status).send(error)
		}

	}

	/**
	 * Display a single user.
	 * GET users/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 * @param {View} ctx.view
	 */
	async findOne({ params, request, response, view }) {
		try {
			let { id } = params

			id = parseInt(id)
			if (id && !isNaN(id)) {
				const data = await UserService.findOne({ params, request, response })
				return data
			} else {
				return response.status(500).send({ message: 'Id accepts integer only and you must provide as id.' })
			}
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	/**
	 * Create/save a new user.
	 * POST users
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async register({ params, request, response }) {
		try {
			const data = await UserService.register({ request, response })
			return data
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	/**
	 * Update product details.
	 * PUT or PATCH users/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async update({ params, request, response }) {
		try {
			let { id } = params

			id = parseInt(id)
			if (id && !isNaN(id)) {
				const data = await UserService.update({ params, request, response })
				return data
			} else {
				return response.status(500).send({ message: 'Id accepts integer only and you must provide as id.' })
			}
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	/**
	 * Delete a user with id.
	 * DELETE users/:id
	 *
	 * @param {object} ctx
	 * @param {Request} ctx.request
	 * @param {Response} ctx.response
	 */
	async delete({ params, request, response }) {
		try {
			let { id } = params

			id = parseInt(id)
			if (id && !isNaN(id)) {
				const data = await UserService.delete({ params, request, response })
				return data
			} else {
				return response.status(500).send({ message: 'Id accepts integer only and you must provide as id.' })
			}
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}
}

module.exports = UserController
