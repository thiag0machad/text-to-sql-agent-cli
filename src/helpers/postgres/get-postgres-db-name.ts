import prompts from 'prompts'

export const getPostgresDbName = async (): Promise<string> => {
	const response = await prompts({
		type: 'text',
		name: 'value',
		message: 'Type your Postgres db name:',
	})

	return response.value
}