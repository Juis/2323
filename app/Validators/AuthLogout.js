'use strict'

class AuthLogout {
  get rules() {
    return {
      refreshToken: 'string|required'
    }
  }

  get sanitizationRules() {
    return {
    }
  }

  get messages() {
    return {
      'refreshToken.string': 'Token accepts text only. ',
      'refreshToken.required': 'You must provide a token.'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = AuthLogout
