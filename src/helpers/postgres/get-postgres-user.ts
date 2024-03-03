import prompts from 'prompts'

export const getPostgresUser = async (): Promise<string> => {
	const response = await prompts({
		type: 'text',
		name: 'value',
		message: 'Type your Postgres user:',
	})

	return response.value
}