import style from "./Profile.module.css";
import { Link } from 'react-router-dom';
const objectsOne = [
  {
    h: "Фио",
    p: "Каримулин Валей Сергеевич",
  },
  {
    h: "Пол",
    p: "Мужской",
  },
];

const objectsOneContent = objectsOne.map((item) => {
  return (
    <div className={style.objects}>
      <p>{item.h}</p>
      <div>
        <p>{item.p}</p>
      </div>
    </div>
  );
});
const objectsTwo = [
  {
    h: "Телефон",
    p: "+79228411322",
  },
  {
    h: "Почта",
    p: "bibaboba@gmail.com",
  },
];

const objectsTwoContent = objectsTwo.map((item) => {
  return (
    
    <div className={style.objects}>
      <p>{item.h}</p>
      <div>
        <p>{item.p}</p>
      </div>
    </div>
  
    
  );
});
function Profile() {
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
                <Link>Пройденые Тесты</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.profile}>
          <form className={style.profileForm}>
            <div className={style.headImg}>
              <p>Фотогорафия профиля</p>
              <div className={style.profileImg}>
                <img
                  src="/src/assets/c3fc6c1c-e67c-4fed-a1a6-ea6b0e135f92.jpg"
                  className={style.img}
                  alt=""
                />
                <label class="input-file">
                  <input type="file" name="file" />
                  Выберете фото
                </label>
              </div>
            </div>
            <div className={style.profileInfo}>
              <div>{objectsOneContent}</div>
              <div>{objectsTwoContent}</div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  
  );
}
export default Profile;
