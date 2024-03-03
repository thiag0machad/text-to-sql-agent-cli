export const verifyEnvs = async (): Promise<void> => {
	if(!process.env.GEMINI_API_KEY ||
    !process.env.POSTGRES_HOST || 
    !process.env.POSTGRES_PORT ||
    !process.env.POSTGRES_DB_NAME ||
    !process.env.POSTGRES_USER ||
    !process.env.POSTGRES_PASSWORD) {
		throw new Error('Sorry! You have not configured the sql-gemini. Run the config command again.')
	} 
}