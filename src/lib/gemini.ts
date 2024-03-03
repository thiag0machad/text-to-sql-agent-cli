import { GoogleGenerativeAI } from '@google/generative-ai'
import 'dotenv/config'

const googleGenerativeAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string)

export const gemini = googleGenerativeAi.getGenerativeModel({ model: 'gemini-pro' })