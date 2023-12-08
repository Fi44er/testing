import style from "./parcer.module.css";
import { Context } from "../../../main"
import { useContext, useState } from "react"
import { observer } from "mobx-react-lite";

const Parcer = () => {
  const [vkId, setVkId] = useState<string>('')
  const { store } = useContext(Context)

  return (
    <div className={style.parcer}>
      <div className={style.container}>
        <div className={style.parcerContent}>
          <form className={style.form}>
            <h2>Тестирование на профориентацию</h2>
            <h2 className="text-red-500 text-lg">{store.messageParser}</h2>
            <input
              type="text"
              placeholder="Введите ссылку на VK профиль"
              onChange={(e) => setVkId(e.target.value)}
              value={vkId}
            />
            <button
              onClick={() => { store.getParser(vkId) }}
            >
              Перейти к итогам
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default observer(Parcer);