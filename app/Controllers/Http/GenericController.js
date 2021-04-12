'use strict'

const GenericService = make('App/Services/GenericService')
const Common = make('App/Common/Index')

class GenericController {
	/**
	* Images Product for S3. 
	* POST upload/:id/upload
	*
	* @param {object} ctx
	* @param {Request} ctx.request
	* @param {Response} ctx.response
	*/
	async imagesUpload({ params, request, response, auth }) {
		try {
			let { id } = params

			const validate = await Common.validateId({ id, response })
			if (validate) {
				const data = await GenericService.imagesUpload({ params, request, response, auth })
				return data
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
	async imagesUpdate({ request, response, auth }) {
		try {
			const data = await GenericService.imagesUdate({ request, response, auth })
			return data
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}
}

module.exports = GenericController
