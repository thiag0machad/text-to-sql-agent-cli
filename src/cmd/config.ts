import { writeEnvFile } from '../helpers/files/write-env.file'
import { getGeminiApiKey } from '../helpers/gemini/get-gemini-api-key'
import { getPostgresDbName } from '../helpers/postgres/get-postgres-db-name'
import { getPostgresHost } from '../helpers/postgres/get-postgres-host'
import { getPostgresPassword } from '../helpers/postgres/get-postgres-password'
import { getPostgresPort } from '../helpers/postgres/get-postgres-port'
import { getPostgresUser } from '../helpers/postgres/get-postgres-user'
import { verifyEnvs } from '../helpers/verify-envs'

const config = async (): Promise<void> => {
	const geminiApiKey = await getGeminiApiKey()
	const postgresHost = await getPostgresHost()
	const postgresPort = await getPostgresPort()
	const postgresDbName = await getPostgresDbName()
	const postgresUser = await getPostgresUser()
	const postgresPassword = await getPostgresPassword()

	await verifyEnvs()

	await writeEnvFile(
		geminiApiKey,
		postgresHost,
		postgresPort,
		postgresDbName,
		postgresUser,
		postgresPassword,
	)
}

config().then(() => console.log('Congratulations! You have configured the sql-gemini.')).catch((error) => console.error(error))