'use strict'

const ProductService = make('App/Services/ProductService')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async findAll({ request, response }) {
    try {
      const data = await ProductService.findAll({ request, response })
      return data
    } catch (error) {
      return response.status(error.status).send(error)
    }
  }

  /**
   * Display a single product.
   * GET products/:id
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
        const data = await ProductService.findOne({ params, request, response })
        return data
      } else {
        return response.status(500).send({ message: 'Id accepts integer only and you must provide as id.' })
      }
    } catch (error) {
      return response.status(error.status).send(error)
    }
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async register({ request, response }) {
    try {
      const data = await ProductService.register({ request, response })
      return data
    } catch (error) {
      return response.status(error.status).send(error)
    }
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
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
        const data = await ProductService.update({ params, request, response })
        return data
      } else {
        return response.status(500).send({ message: 'Id accepts integer only and you must provide as id.' })
      }
    } catch (error) {
      return response.status(error.status).send(error)
    }
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
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
        const data = await ProductService.delete({ params, request, response })
        return data
      } else {
        return response.status(500).send({ message: 'Id accepts integer only and you must provide as id.' })
      }
    } catch (error) {
      return response.status(error.status).send(error)
    }
  }
}

module.exports = ProductController
