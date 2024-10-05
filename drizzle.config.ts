import {Config} from 'drizzle-kit';

export default {
    schema: './src/database/schema.ts',
    driver: "turso",
    out: './src/database/drizzle',
    dialect: 'mysql', // 'postgresql' | 'mysql' | 'sqlite'
    dbCredentials: {
        host: process.env["DB_HOST"],
        port: Number(process.env["DB_PORT"]),
        user: process.env["DB_USER"],
        password: process.env["DB_PSWD"],
        database: process.env["DB_NAME"],
    },
    verbose: true,
    strict: true,
} satisfies Config;