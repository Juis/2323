'use strict'

class AuthLogin {
  get rules() {
    return {
      email: 'string|required|email|max:254',
      password: 'string|required|max:60'
    }
  }

  get sanitizationRules() {
    return {
      email: 'escape|normalize_email',
      password: 'escape'
    }
  }

  get messages() {
    return {
      'email.string': 'Email accepts text only. ',
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.max': 'You must fill the email with a maximum of 254 characters.',
      'password.string': 'Password accepts text only. ',
      'password.required': 'You must provide a password.',
      'password.max': 'You must fill the password with a maximum of 60 characters.'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = AuthLogin
