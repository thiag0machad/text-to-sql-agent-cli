import prompts from 'prompts'

export const getPrompt = async (): Promise<string> => {
	const response = await prompts({
		type: 'text',
		name: 'value',
		message: 'Prompt:',
	})

	return response.value
}