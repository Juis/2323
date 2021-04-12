'use strict'

class Common {
  async validateId({ id, response }) {

    const idValid = parseInt(id)

    if (!idValid || isNaN(idValid)) {
      return response.status(400).send({ message: 'Id accepts integer only and you must provide as id.' })
    }

    return true
  }
}

module.exports = Common