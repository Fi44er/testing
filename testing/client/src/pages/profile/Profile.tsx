import { useState, useEffect } from "react"
import style from "./Profile.module.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import axios from "axios"

import { Context } from "../../main"

const Profile = () => {
  const { store } = useContext(Context)
  const [user, setUser] = useState({} as any)

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getUser", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUser(response.data)
      })
      .catch((e) => {
        return e
      })
  }, [])

  return (
    <>
      <div className={style.block}>
        <div className={style.profileAndHeader}>
          <h1>Мой профиль</h1>
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
          <div className={style.profile}>
            <form className={style.profileForm}>
              <div className={style.headImg}>
                <p>Профиль</p>
                <div className={style.profileImg}>
                  <img
                    src="/src/assets/c3fc6c1c-e67c-4fed-a1a6-ea6b0e135f92.jpg"
                    className={style.img}
                    alt=""
                  />
                </div>
              </div>
              <div className={style.profileInfo}>
                <div>
                  <div className={style.objects}>
                    <p>ФИО</p>
                    <div>
                      <p>{user.fio}</p>
                    </div>
                  </div>
                  <div className={style.objects}>
                    <p>Телефон</p>
                    <div>
                      <p>{user.phoneNumber}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={style.objects}>
                    <p>Почта</p>
                    <div>
                      <p>{user.email}</p>
                    </div>
                  </div>
                  <div className={style.objects}>
                    <p>Дата регистрации</p>
                    <div>
                      <p>{`${user.regTime}`.slice(0, -14)}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.profileInfoButton}>
                <button onClick={() => store.logout()}>Выйти из акаунта</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Profile
