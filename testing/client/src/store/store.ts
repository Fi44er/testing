import { IUser } from "../models/IUser"
import { IQuiz } from "../models/IQuiz"
import { IParser } from "../models/IParser"

import { makeAutoObservable } from "mobx"
import axios from "axios"

import AuthServices from "../services/AuthService"
import QuizService from "../services/QuizService"
import ParserService from "../services/ParserService"

import { AuthResponse } from "../models/response/AuthResponse"

import { API_URL } from "../http"

enum Answer {
  Like,
  DisLike,
  Idk,
}

export default class Store {
  user = {} as IUser
  quiz = {} as IQuiz
  parser = {} as IParser

  isAuth = false
  isLoading = false

  messageAuth = ""
  messageReg = ""
  messageQuiz = ""
  messageParser = ""

  constructor() {
    makeAutoObservable(this)
  }

  // ---------------------------------------------

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setUser(user: IUser) {
    this.user = user
  }

  setQuiz(quiz: IQuiz) {
    this.quiz = quiz
  }

  setParser(parser: IParser) {
    this.parser = parser
  }

  // ---------------------------------------------


  setMessageAuth(messageAuth: string) {
    this.messageAuth = messageAuth
  }

  setMessageReg(messageReg: string) {
    this.messageReg = messageReg
  }

  setMessageQuiz(messageQuiz: string) {
    this.messageQuiz = messageQuiz
  }

  setMessageParser(messageParser: string) {
    this.messageParser = messageParser
  }

  // ---------------------------------------------

  setLoading(bool: boolean) {
    this.isLoading = bool
  }

  // ---------------------------------------------

  async login(email: string, password: string) {
    try {
      const response = await AuthServices.login(email, password)
      localStorage.setItem("token", response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e: any) {
      this.setMessageAuth(e.response?.data?.message)
    }
  }

  async registration(
    email: string,
    password: string,
    fio: string,
    phoneNumber: string
  ) {
    try {
      const response = await AuthServices.registration(
        email,
        password,
        fio,
        phoneNumber
      )
      console.log(response)
      localStorage.setItem("token", response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e: any) {
      this.setMessageReg(e.response?.data?.message)
    }
  }

  async logout() {
    try {
      const response = await AuthServices.logout()
      localStorage.removeItem("token")
      this.setAuth(false)
      this.setUser({} as IUser)
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      })
      console.log(response)

      localStorage.setItem("token", response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e: any) {
      console.log(e.response?.data?.message)
    } finally {
      this.setAuth(false)
    }
  }

  async resultQuiz(
    array:
      {
        question: string
        answer?: Answer | undefined
        categoryId?: number | undefined
        countspoint?: number | undefined
      }[]
  ) {
    try {
      const response = await QuizService.resultQuiz(array)
      this.setQuiz(response.data.quiz)
      location.href = '/parcer'
    } catch (e: any) {
      this.setMessageQuiz(e.response?.data?.message)
      console.log(this.messageQuiz);
    }
  }

  async getParser(vkId: string) {
    try {
      const response = await ParserService.getParser(vkId)
      this.setParser(response.data.parser)
      // console.log(response.data);
      
      location.href = `/resultat?obj=${response.data}`
    } catch (e: any) {
      this.setMessageParser(e.response?.data?.message)
    }
  }
}
