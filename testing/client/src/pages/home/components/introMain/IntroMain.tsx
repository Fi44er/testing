import style from "./IntroMain.module.css"
import { Link } from "react-router-dom"
function IntroMain() {
  return (
    <div className={style.introMainBlock}>
      <div className={style.introMainContent}>
        <div>
          <div className={style.content}>
            <img src="/src/assets/Group 222.png" alt="img" />
            <div className={style.heading}>
              <h2>Выбери профессию прямо сейчас</h2>
              <Link to="#" className={style.introBtn}>
                Найти профессию
                <img src="/src/assets/whiteErrow.svg" alt="errow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default IntroMain
