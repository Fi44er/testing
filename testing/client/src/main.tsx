// import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import Store from "./store/store.ts"
import { createContext } from "react"

interface IStore {
  store: Store
}

const store = new Store()

export const Context = createContext<IStore>({
  store,
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Context.Provider value={{ store }}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Context.Provider>
)
