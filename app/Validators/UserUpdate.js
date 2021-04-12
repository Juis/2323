'use strict'

class UserUpdate {
  get rules() {
    return {
      name: 'string|required|max:80|unique:users'
    }
  }

  get sanitizationRules() {
    return {
      type: 'escape'
    }
  }

  get messages() {
    return {
      'name.string': 'Name accepts text only. ',
      'name.required': 'You must provide a name.',
      'name.max': 'You must fill the name with a maximum of 80 characters.',
      'name.unique': 'This name is already registered.',
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = UserUpdate
