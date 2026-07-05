import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5400,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    entities: [
        // Add your entity classes / EntitySchemas here.
    ],
    synchronize: true,
    logging: true,
});
