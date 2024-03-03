import prompts from 'prompts'

export const getPostgresPassword = async (): Promise<string> => {
	const response = await prompts({
		type: 'password',
		name: 'value',
		message: 'Type your Postgres password:',
	})

	return response.value
}