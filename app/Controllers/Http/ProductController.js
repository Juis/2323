'use strict'

const ProductService = make('App/Services/ProductService')
const Common = make('App/Common/Index')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products/:page/:perPage
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async findAll({ params, request, response, auth }) {
    try {
      const data = await ProductService.findAll({ params, request, response, auth })
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
  async findOne({ params, request, response, auth }) {
    try {
      let { id } = params

      const validate = await Common.validateId({ id, response })
      if (validate) {
        const data = await ProductService.findOne({ params, request, response, auth })
        return data
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
  async register({ request, response, auth }) {
    try {
      const data = await ProductService.register({ request, response, auth })
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
  async update({ params, request, response, auth }) {
    try {
      let { id } = params

      const validate = await Common.validateId({ id, response })
      if (validate) {
        const data = await ProductService.update({ params, request, response, auth })
        return data
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
  async delete({ params, request, response, auth }) {
    try {
      let { id } = params

      const validate = await Common.validateId({ id, response })
      if (validate) {
        const data = await ProductService.delete({ params, request, response, auth })
        return data
      }
    } catch (error) {
      return response.status(error.status).send(error)
    }
  }
}

module.exports = ProductController
