import { convertArrayToCsv } from '../helpers/convert-array-to-csv'
import { saveOrNot } from '../helpers/files/save-or-not'
import { writeCsvFile } from '../helpers/files/write-csv-file'
import { getGeminiResponse } from '../helpers/gemini/get-gemini-response'
import { getPrompt } from '../helpers/get-prompt'
import { getPostgresQueryResult } from '../helpers/postgres/get-postgres-query-result'
import { getTablesAndColumns } from '../helpers/postgres/get-tables-and-columns'
import { verifyEnvs } from '../helpers/verify-envs'
import { pg } from '../lib/pg'

const start = async (): Promise<void> => {
	await verifyEnvs()

	await pg.connect()
	
	let hasPrompt = true
	while (hasPrompt) {
		try {
			const prompt = await getPrompt()
			if (!prompt) {
				hasPrompt = false
				break
			}
	
			const tablesAndColumns = await getTablesAndColumns()
			const query = await getGeminiResponse(prompt, tablesAndColumns)
			const queryResult = await getPostgresQueryResult(query)
			const formattedQueryResult = await convertArrayToCsv(queryResult)

			const save = await saveOrNot()
			if(save) {
				await writeCsvFile(formattedQueryResult)
			}
		} catch (error) {
			break
		}
	}

	await pg.end()
}

start().catch((error) => console.error(error))