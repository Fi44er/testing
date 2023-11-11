import { Link } from "react-router-dom";
import styles from './HeaderIntro.module.css'

function HeaderIntro() {

  return (
    <>
      <div className={styles.intro}>
        <div className={styles.introInfo}>
            <h1>С нами вы найдете свою провессию</h1>
            <p>мы поможем с выбором професси, подходящей именно тебе</p>
            <Link to='#' className={styles.introBtn}>Пройти тест<img src="/src/assets/whiteErrow.svg" alt="errow"/></Link>
        </div>
        <div className={styles.introImg}>
            <img src="/src/assets/introImg.svg" alt="img" />
        </div>
      </div>
    </>
  )
}

export default HeaderIntro
