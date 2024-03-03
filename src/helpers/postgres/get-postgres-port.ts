import prompts from 'prompts'

export const getPostgresPort = async (): Promise<string> => {
	const response = await prompts({
		type: 'text',
		name: 'value',
		message: 'Type your Postgres port:',
	})

	return response.value
}