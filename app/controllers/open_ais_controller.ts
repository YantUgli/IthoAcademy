import OpenAIService from '#services/open_ai_service'
import { HttpContext } from '@adonisjs/core/http'
// import OpenAIService from 'App/Services/OpenAIService'


export default class OpenAIController {
  public async generate({ request, response }: HttpContext) {
    const prompt = request.input('prompt')

    const openAIService = new OpenAIService()
    const result = await openAIService.generateText(prompt)

    return response.json({ result })
  }
}
