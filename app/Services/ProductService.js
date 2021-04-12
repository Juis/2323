'use strict'

const Product = use('App/Models/Product')
const Images = use('App/Models/Image')
const Database = use('Database')

class ProductService {
	async findAll({ request, response }) {
		try {
			const products = await Product.query().with('images').fetch()
			return products
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	async register({ request, response }) {
		try {
			const { name, description, price, published_at } = request.only(['name', 'description', 'price', 'published_at'])
			const product = new Product()

			product.name = name
			product.description = description
			product.price = price
			product.published_at = published_at

			await product.save()
			return response.ok({ message: "Successfully registered." })
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	async delete({ params, request, response }) {
		try {
			const { id } = params

			await Product
				.query()
				.where("id", id)
				.update({
					"active": 0
				})

			return response.ok({ message: "Successfully removed." })
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	async update({ params, request, response }) {
		try {
			const { id } = params
			let { name, description, price, published_at } = request.only(['name', 'description', 'price', 'published_at'])

			await Product
				.query()
				.where("id", id)
				.update({
					"name": name,
					"description": description,
					"price": price,
					"published_at": published_at
				})

			return response.ok(product)
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}

	async findOne({ params, request, response }) {
		try {
			const { id } = params
			const product = await Product.query().where('id', id).with('images').fetch()
			return response.ok(product)
		} catch (error) {
			return response.status(error.status).send(error)
		}
	}
}

module.exports = ProductService
