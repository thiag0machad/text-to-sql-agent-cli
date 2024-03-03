export const convertArrayToCsv = async (objArray: any[]): Promise<string> => {
	const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray

	let lines = `${Object.keys(array[0]).join()}\n`

	for (let i = 0; i < array.length; i++) {
		let line = ''
		for (const index in array[i]) {
			if (line !== '') line += ','
            
			line += array[i][index]
		}

		lines += `${line}\n`
	}

	return lines
}