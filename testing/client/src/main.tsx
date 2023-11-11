// import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
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
    <App />
  </Context.Provider>
)
