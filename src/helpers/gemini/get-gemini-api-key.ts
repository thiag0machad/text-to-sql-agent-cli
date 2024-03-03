import prompts from 'prompts'

export const getGeminiApiKey = async (): Promise<string> => {
	const response = await prompts({
		type: 'password',
		name: 'value',
		message: 'Type your Gemini API key:',
	})

	return response.value
}