import prompts from 'prompts'

export const saveOrNot = async (): Promise<boolean> => {
	const response = await prompts({
		type: 'confirm',
		name: 'value',
		message: 'Do you want to save the result?',
	})

	return !!response.value
}