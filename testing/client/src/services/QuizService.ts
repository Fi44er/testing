import $api from "../http"
import { AxiosResponse } from "axios"
import { QuizResponse } from "../models/response/QuizResponse"

export default class QuizService {
   static async resultQuiz(array: {}[]): Promise<AxiosResponse<QuizResponse>> {
        return $api.post<QuizResponse>('/resultQuiz', array)
    }
}