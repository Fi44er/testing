import style from "./Quiz.module.css";
const QustionsAndAnswers = [
  {
    Qustion: "Мне хотелось бы в своей профессиональной деятельности:",
    answer1: "Общаться с самыми разными людьми",
    answer2: "Снимать фильмы, писать книги, рисовать, выступать на сцене и т.д",
    answer3: "Заниматься расчетами, вести документацию",
  },
  {
    Qustion: "В книге или кинофильме меня больше всего привлекает:",
    answer1: "Возможность следить за ходом мыслей автора",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    Qustion: "Меня больше обрадует Нобелевская премия:",
    answer1: "За общественную деятельность",
    answer2: "В области наук",
    answer3: "В области искусства",
  },
  {
    Qustion: "Я скорее соглашусь стать:",
    answer1: "Главным механиком",
    answer2: "Начальником экспедиции",
    answer3: "Главным бухгалтером",
  },
  {
    Qustion: "Будущее людей определяют:",
    answer1: "Взаимопонимание между людьми ",
    answer2: "Научные открытия",
    answer3: "Развитие производства",
  },
];
const QustionsAndAnswersContent = QustionsAndAnswers.map((item) => {
  return (
    <div>
      <div className={style.quizQustions} id="qustions">
        <div className={style.quizQustionsItem}>
          <div className={style.quizQustionsItemQustion}>{item.Qustion}</div>
          <ul className={style.quizQustionsItemAnswers}>
            <li>
              <label>
                <input type="radio" name="q1" />
                <p>{item.answer1}</p>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="q1" />
                <p>{item.answer2}</p>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="q1" />
                <p>{item.answer3}</p>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.quizResults} id="results">
        <div className={style.quizQustions} id="qustions">
          <div className={style.quizQustionsItem}>
            <div className={style.quizQustionsItemQustion}>{item.Qustion}</div>
            <ul className={style.quizQustionsItemAnswers}>
              <li>
                <label>
                  <input type="radio" name="q1" />
                  <p>{item.answer1}</p>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="q1" />
                  <p>{item.answer2}</p>
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="q1" />
                  <p>{item.answer3}</p>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});
const Quiz = () => {
  return (
    <div className={style.Quiz} id="quiz">
      {/* <div className={style.quizIndicator}>1/10</div> */}
      {QustionsAndAnswersContent}
      <div className={style.quizControls}>
        <button>Завершить тестирование</button>
      </div>
    </div>
  );
};
export default Quiz;
