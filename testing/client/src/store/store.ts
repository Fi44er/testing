import { IUser } from "../models/IUser"
import { makeAutoObservable } from "mobx"
import AuthServices from "../services/AuthService"

export default class Store {
  user = {} as IUser
  constructor() {
    makeAutoObservable(this)
  }

  setUser(user: IUser) {
    this.user = user
  }

  async login(email: string, password: string) {
    try {
        const response = await AuthServices.login(email, password)
        localStorage.setItem('token', response.data.accessToken)
        this.setUser(response.data.user)
    } catch (e) {
        console.log(e.response?.data?.message);
        
    }
  }

  async registration(email: string, password: string, fio:string, phoneNumber:bigint) {
    try {
        const response = await AuthServices.registration(email, password, fio, phoneNumber)
        localStorage.setItem('token', response.data.accessToken)
        this.setUser(response.data.user)
    } catch (e) {
        console.log(e.response?.data?.message);
        
    }
  }

  async logout(email: string, password: string) {
    try {
        const response = await AuthServices.logout()
        localStorage.removeItem('token')
        this.setUser({} as IUser)
    } catch (e) {
        console.log(e.response?.data?.message);
        
    }
  }
}
