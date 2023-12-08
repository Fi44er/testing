import $api from "../http"
import { AxiosResponse } from "axios"
import { ParserResponse } from "../models/response/ParserResponse"

export default class ParserService {
   static async getParser(vkId: string): Promise<AxiosResponse<ParserResponse>> { 
        return $api.post<ParserResponse>('/getgroups', {vkId})
    }
}