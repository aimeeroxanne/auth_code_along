exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.varchar('username', 255)
    table.varchar('password', 255)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}


Add CommentCollapse 
