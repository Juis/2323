'use strict'

const Images = use('App/Models/Image')
const Product = use('App/Models/Product')
const Drive = use('Drive')

class GenericService {

	async imagesUpload({ params, request, response, auth }) {
		try {
			const { id, type } = params

			if (isNaN(id)) {
				return response.status(400).send("Id accepts integer only.")
			}

			const product = await Product.query().where("id", id).first()
			if (!product) {
				return response.status(400).send({ message: 'Product not found.' })
			}

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

				if (type === 'product' && product) {
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
			return response.status(error.status).send(error)
		}
	}

	async imagesUdate({ request, response, auth }) {
		try {
			const { keys, type } = request.only(['keys', 'type'])
			const msg = type === 'update' ? 'Update' : 'Removal'

			await Images
				.query()
				.whereIn('key', keys)
				.update({ active: type === 'update' ? 1 : 0 })

			return response.ok({ message: `${msg} performed successfully.` })
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}
}

module.exports = GenericService
