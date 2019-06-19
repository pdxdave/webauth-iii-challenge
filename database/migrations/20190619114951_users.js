
exports.up = function(knex, Promise) {
   return knex.schema.createTable('users', users => {
       users.increments() // pk, not null, auto increment

       users // new column
        .string('username', 128)
        .notNullable()
        .unique();

        users // new column
         .string('password', 128)
         .notNullable();

        users // new column
         .string('department', 128)
         .notNullable();
   })
};

exports.down = function(knex, Promise) {
     return knex.schema
        .dropTableIfExists('users');
};
