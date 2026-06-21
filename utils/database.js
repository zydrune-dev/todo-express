import pgp from "pg-promise";

const pgpInstance = pgp();

const cn = {
    host: 'localhost',
    port: 5400,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
};

export const db = pgpInstance(cn);

export const initDb = async () => {
    try {
        await db.none('CREATE TABLE IF NOT EXISTS todo_item (id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY, value text, importance integer, done boolean)');
    } catch(error) {
        console.log('Error while creating table', error);
        throw error;
    }
};


