'use strict'

class Product {
  get rules() {
    return {
      name: 'string|required|max:80|unique:products',
      description: 'string|required|max:254',
      price: 'integer|required',
      published_at: 'date|required'
    }
  }

  get sanitizationRules() {
    return {
      name: 'escape',
      description: 'escape',
      price: 'escape|to_int',
      published_at: 'escape'
    }
  }

  get messages() {
    return {
      'name.string': 'Name accepts text only. ',
      'name.required': 'You must provide a name.',
      'name.max': 'You must fill the name with a maximum of 80 characters.',
      'name.unique': 'This name is already registered.',
      'description.string': 'Description accepts text only. lucas',
      'description.required': 'You must provide a description.',
      'description.max': 'You must fill the description with a maximum of 254 characters.',
      'price.integer': 'price accepts double only. ',
      'price.required': 'You must provide a price.',
      'published_at.date': 'published_at accepts date only. ',
      'published_at.required': 'You must provide a published_at.'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = Product
