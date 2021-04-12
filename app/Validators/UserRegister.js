'use strict'

class UserRegister {
  get rules() {
    return {
      name: 'string|required|max:80|unique:users',
      email: 'string|required|email|max:254|unique:users',
      password: 'string|required|max:60'
    }
  }

  get sanitizationRules() {
    return {
      name: 'escape',
      email: 'escape|normalize_email',
      password: 'escape'
    }
  }

  get messages() {
    return {
      'name.string': 'Name accepts text only. ',
      'name.required': 'You must provide a name.',
      'name.max': 'You must fill the name with a maximum of 80 characters.',
      'name.unique': 'This name is already registered.',
      'email.string': 'Email accepts text only. ',
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.max': 'You must fill the email with a maximum of 254 characters.',
      'email.unique': 'This email is already registered.',
      'password.string': 'Password accepts text only. ',
      'password.required': 'You must provide a password.',
      'password.max': 'You must fill the password with a maximum of 60 characters.'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = UserRegister
