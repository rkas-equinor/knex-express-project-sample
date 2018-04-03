exports.up = knex => {
  return knex.schema.createTable('projects', t => {
    t.increments('id').primary().unsigned()
    t.integer('user_id').references('users.id').unsigned().index()
    t.string('name')
    t.text('description')
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = knex => {
  return knex.schema.dropTable('projects')
}
