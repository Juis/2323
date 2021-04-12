'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

    /**
  * A relationship on tokens is required for auth to
  * work. Since features like `refreshTokens` or
  * `rememberToken` will be saved inside the
  * tokens table.
  *
  * @method images
  *
  * @return {Object}
  */
    images() {
        return this.hasMany('App/Models/Image')
    }
}

module.exports = Product
