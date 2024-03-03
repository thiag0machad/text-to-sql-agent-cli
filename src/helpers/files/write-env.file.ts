import { writeFile } from 'fs/promises'

export const writeEnvFile = async (geminiApiKey: string, postgresHost: string, postgresPort: string, postgresDbName: string, postgresUser: string, postgresPassword: string): Promise<void> => {
	const file = `GEMINI_API_KEY=${geminiApiKey}
POSTGRES_HOST=${postgresHost}
POSTGRES_PORT=${postgresPort}
POSTGRES_DB_NAME=${postgresDbName}
POSTGRES_USER=${postgresUser}
POSTGRES_PASSWORD=${postgresPassword}`

	await writeFile('.env', file)
}