import style from "./parcer.module.css";
import { useState } from "react";

export default function Parcer() {
  const [vkId, setVkId] = useState<string>('')
  return (
    <div className={style.parcer}>
      <div className={style.container}>
        <div className={style.parcerContent}>
          <form className={style.form}>
            <h2>Тестирование на профориентацию</h2>
            <input
              type="text"
              placeholder="Введите ссылку на VK профиль"
              onChange={(e) => setVkId(e.target.value)}
              value={vkId}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                location.href = `/resultat?vkId=${vkId}`;
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
