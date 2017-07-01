import { Connection, createConnection } from 'typeorm';

import Logger from './helper/logger';

export default class Database {
    public static async init(): Promise<Connection> {
        try {
            Logger.info(`Creating db connection`);

            return await createConnection({
                driver: {
                    type: 'postgres',
                    host: process.env.POSTGRES_HOST,
                    port: process.env.POSTGRES_PORT,
                    username: process.env.POSTGRES_USER,
                    password: process.env.POSTGRES_PASSWORD,
                    database: process.env.POSTGRES_DB,
                },
                entities: [__dirname + '/model/*.ts'],
                autoSchemaSync: true,
            });
        } catch (error) {
            Logger.info(`Something went wrong when creating connection -> ${error}`);
        }
    }
}
