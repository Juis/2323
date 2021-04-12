'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up() {
    this.create('products', (table) => {
      table.increments()
      table.string('name', 80).notNullable().unique()
      table.string('description', 254).notNullable()
      table.float('price').notNullable()
      table.date('published_at').notNullable()
      table.integer('active', 1).defaultTo(1)
      table.timestamps()
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductSchema
