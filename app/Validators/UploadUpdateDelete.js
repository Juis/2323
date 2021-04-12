'use strict'

class UploadUpdateDelete {
  get rules() {
    return {
      keys: 'array|required',
      type: 'string|required|max:6'
    }
  }

  get sanitizationRules() {
    return {
      type: 'escape'
    }
  }

  get messages() {
    return {
      'type.string': 'Type accepts text only. ',
      'type.required': 'You must provide a type.',
      'type.max': 'You must fill the type with a maximum of 6 characters.',
      'keys.array': 'Keys accepts array only. ',
      'keys.required': 'You must provide as keys.'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages)
  }
}

module.exports = UploadUpdateDelete
