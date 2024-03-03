import { readdir, unlink } from 'fs'
import path from 'path'

const clean = async (): Promise<void> => {
	readdir('output', (error, files) => {
		if (error) throw error

		for (const file of files) {
			unlink(path.join('output', file), error => {
				if (error) throw error
			})
		}
	})
}

clean().then(() => console.log('Output folder clean!')).catch(error => console.error(error))