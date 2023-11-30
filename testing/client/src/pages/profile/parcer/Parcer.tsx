import style from "./parcer.module.css"

export default function Parcer() {
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
              type="submit"
              onClick={(e) => {
                window.location.href = "#"
              }}
            >
              Перейти к итогам
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
