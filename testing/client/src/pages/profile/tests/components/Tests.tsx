import style from "./Test.module.css"
import { Link } from "react-router-dom"



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
          <Link to="/quiz">Проф тест</Link>
        </div>
      </div>
    </div>
  )
}
export default Tests
