'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagesSchema extends Schema {
  up() {
    this.create('images', (table) => {
      table.increments()
      table.string('key', 80).notNullable().unique()
      table.string('url', 254).notNullable().unique()
      table.string('content_type', 20).notNullable()
      table.integer('product_id').notNullable().unsigned().references('id').inTable('products')
      table.integer('image_featured', 1).defaultTo(0)
      table.integer('active', 1).defaultTo(1)
      table.timestamps()
    })
  }

  down() {
    this.drop('images')
  }
}

module.exports = ImagesSchema
