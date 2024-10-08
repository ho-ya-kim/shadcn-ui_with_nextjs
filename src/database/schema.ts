import {mysqlTable, serial, text} from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    password: text('password').notNull(),
});
