import prompts from 'prompts'

export const getPostgresHost = async (): Promise<string> => {
	const response = await prompts({
		type: 'text',
		name: 'value',
		message: 'Type your Postgres host:',
	})

	return response.value
}