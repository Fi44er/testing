import style from "./Test.module.css"
import { Routes, Route, Link } from "react-router-dom"
const thems = [
  {
    name: "Проф тест",
  },
]

const themsContent = thems.map((item) => {
  return <div>{item.name}</div>
})

function Tests() {
  return (
    <div className={style.TestsBlock}>
      <div className={style.profileHeader}>
        <nav className={style.headerNav}>
          <ul>
            <li>
              <Link to="/profile">Мой профиль</Link>
            </li>
            <li>
              <Link to="/tests">Тесты</Link>
            </li>
            <li>
              <Link to="#">Пройденые Тесты</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.testsItems}>
        <div className={style.them}>
          <h2>Темы</h2>
          <Link to="/quiz">{themsContent}</Link>
        </div>
      </div>
    </div>
  )
}
export default Tests
