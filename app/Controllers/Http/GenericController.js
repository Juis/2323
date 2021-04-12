'use strict'

const GenericService = make('App/Services/GenericService')

class GenericController {
	/**
	* Images Product for S3. 
	* POST upload/:id/upload
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	*/
	async imagesUpload({ params, request, response }) {
		try {
			let { id } = params

			id = parseInt(id)
			if (id && !isNaN(id)) {
				const data = await GenericService.imagesUpload({ params, request, response })
				return data
			} else {
				return response.status(500).send({ message: 'Id accepts integer only and you must provide as id.' })
			}
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	/**
	* Images Product for S3.
	* PUT upload/update
	* DELETE upload/delete
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	*/
	async imagesUpdate({ params, request, response }) {
		try {
			const data = await GenericService.imagesUdate({ params, request, response })
			return data
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}
}

module.exports = GenericController
