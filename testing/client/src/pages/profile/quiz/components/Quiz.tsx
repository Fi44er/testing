import style from "./Quiz.module.css"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { Context } from "../../../../main"
import { observer } from "mobx-react-lite"


enum Answer {
  Like,
  DisLike,
  Idk,
}

const Quiz = () => {
  const [data, setData] = useState<
    {
      question: string
      answer?: Answer | undefined
      categoryId?: number | undefined
      countspoint?: number | undefined
    }[]
  >([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getquiz")
      .then((response) => {
        setData(response.data)
      })
      .catch((e) => {
        return e
      })
  }, [])

  const setAnswer = (index: number, answer: Answer) => {
    setData((prev) => {
      const newArr = [...prev]
      newArr[index].answer = answer
      return newArr
    })
  }

  const { store } = useContext(Context)

  return (
    <div className={style.quiz}>
      <h2>Тестирование на профориентацию</h2>
      {data.map((elem, index) => (
        <div className={style.qustion} key={elem.question}>
          <div>
            <div className={style.qustionText}>
              <p>{elem.question}</p>
            </div>
          </div>
          <div className={style.answer}>
            <div>
              <label>
                <input
                  onClick={() => {
                    setAnswer(index, Answer.Like)
                  }}
                  type="radio"
                  name={elem.question}
                />
                Да
              </label>
              <label>
                <input
                  onClick={() => {
                    setAnswer(index, Answer.DisLike)
                  }}
                  type="radio"
                  name={elem.question}
                />
                Нет
              </label>
              <label>
                <input
                  onClick={() => {
                    setAnswer(index, Answer.Idk)
                  }}
                  type="radio"
                  name={elem.question}
                />
                Затрудняюсь ответить
              </label>
            </div>
          </div>
        </div>
      ))}
      <p className="pt-6 text-red-500">{store.messageQuiz}</p>
      <div className={style.btn}>
        <button
          onClick={() => {
            store.resultQuiz(data);
          }}
        >
          Завершить Тестирование
        </button>
      </div>
    </div>
  )
}
export default observer(Quiz)