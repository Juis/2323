'use strict'

const Images = use('App/Models/Image')
const Drive = use('Drive')

class GenericService {

	async imagesUpload({ params, request, response }) {
		try {
			const { id, type } = params

			await request.multipart.file('images', {
				types: ['jpeg', 'jpg', 'png'],
				size: "1mb"
			}, async (file) => {
				const contentType = file.headers['content-type']
				const acl = 'public-read'
				const key = `${(Math.random() * 100).toString(32)}-${file.clientName}`
				const url = await Drive.put(key, file.stream, {
					"ContentType": contentType,
					"ACL": acl
				})

				if (type === 'product') {
					await Images.create({
						key,
						url,
						'content_type': contentType,
						'product_id': id
					})
				}

			}).process()

			return response.ok({ message: 'Upload performed successfully.' })
		} catch (error) {
			return response.status(error.status).send({ message: 'Could not upload.' })
		}
	}

	async imagesUdate({ params, request, response }) {
		try {
			const { keys, type } = request.only(['keys', 'type'])
			const msg = type === 'update' ? 'Update' : 'Removal'

			await Images
				.query()
				.whereIn('key', keys)
				.update({ active: type === 'update' ? 1 : 0 })

			return response.ok({ message: `${msg} performed successfully.` })
		} catch (error) {
			return response.status(error.status).send({ message: 'Could not upload. ' })
		}
	}
}

module.exports = GenericService
