import { DataSource } from 'typeorm';
import { Todo } from '@/entities/Todo.js'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5400,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    entities: [
        Todo
    ],
    synchronize: true,
    logging: true,
});