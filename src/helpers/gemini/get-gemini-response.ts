import { gemini } from '../../lib/gemini'

export const getGeminiResponse = async (prompt: string, tablesAndColumns: string): Promise<string> => {
	const result = await gemini.generateContent(`You are a sql wizard, where you can only answer questions about the given table and only sql queries (except DDL) in the answer.

	${tablesAndColumns}
	
	User question: ${prompt}`)
	
	const response = result.response.text()
	
	console.log('Gemini:', response)
	return response
}