import { writeFile } from 'fs/promises'

export const writeCsvFile = async (lines: string): Promise<void> => {
	console.log('Writing CSV file...')
	await writeFile(`output/${Date.now().toString()}.csv`, lines)
	console.log('CSV file written in output folder.')
}