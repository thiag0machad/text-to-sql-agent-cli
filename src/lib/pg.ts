import { Client } from 'pg'

export const pg = new Client({
	user: process.env.POSTGRES_USER,
	host: process.env.POSTGRES_HOST,
	database: process.env.POSTGRES_DB_NAME,
	password: process.env.POSTGRES_PASSWORD,
	port: parseInt(process.env.POSTGRES_PORT as string),
})

