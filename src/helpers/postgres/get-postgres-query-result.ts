import { pg } from '../../lib/pg'

export const getPostgresQueryResult = async (query: string): Promise<any[]> => {
	const result = await pg.query(query.replaceAll('\n', ' ').replaceAll('```sql', '').replaceAll('```', ''))

	console.table(result.rows)
	return result.rows
}