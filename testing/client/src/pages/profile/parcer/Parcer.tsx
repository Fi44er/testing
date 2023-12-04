import { useNavigate } from "react-router-dom";
import style from "./parcer.module.css";
export default function Parcer(location:any) {
  if(location === false) {
    const navigate = useNavigate()
    navigate('/')
  }
  return (
    <div className={style.parcer}>
      <div className={style.container}>
        <div className={style.parcerContent}>
          <form className={style.form}>
            <h2>Тестирование на профориентацию</h2>
            <input
              type="text"
              placeholder="Введите ссылку на VK профиль"
              name=""
              id=""
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                // window.location.href = "/resultat";
              }}
            >
              Перейти к итогам
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
