import { pg } from '../../lib/pg'

export const getTablesAndColumns = async (): Promise<string> => {
	const tablesResult = await pg.query('select * from information_schema.tables where table_schema = \'public\';')
	const tables = tablesResult.rows

	let tablesAndColumns = ''
	for await (const table of tables) {
		const { table_name } = table

		const columnsResult = await pg.query(`select column_name, data_type from information_schema.columns where table_name = '${table_name}';`)
		const columns = columnsResult.rows

		tablesAndColumns += `${table_name}\n`

		for await (const column of columns) {
			const { column_name, data_type } = column
			tablesAndColumns += `  ${column_name}: ${data_type}\n`
		}

		tablesAndColumns += '\n'
	}

	return tablesAndColumns
}