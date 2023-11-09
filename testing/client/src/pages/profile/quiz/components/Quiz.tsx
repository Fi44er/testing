import style from "./Quiz.module.css";

const Data: any = [
  //   {
  //     qustion: "Мне хотелось бы в своей профессиональной деятельности:",
  //   },
  //   {
  //     qustion: "В книге или кинофильме меня больше всего привлекает:",
  //   },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  //   {
  //     Qustion: "Меня больше обрадует Нобелевская премия:",
  //     answer1: "За общественную деятельность",
  //     answer2: "В области наук",
  //     answer3: "В области искусства",
  //   },
  //   {
  //     Qustion: "Я скорее соглашусь стать:",
  //     answer1: "Главным механиком",
  //     answer2: "Начальником экспедиции",
  //     answer3: "Главным бухгалтером",
  //   },
  //   {
  //     Qustion: "Будущее людей определяют:",
  //     answer1: "Взаимопонимание между людьми ",
  //     answer2: "Научные открытия",
  //     answer3: "Развитие производства",
  //   },
];
// const answers = [
//   {
//     id: "1",
//     value: "Общаться с самыми разными людьми",
//     correct: 1,
//   },
//   {
//     id: "2",
//     value: "Снимать фильмы, писать книги, рисовать, выступать на сцене и т.д",
//     correct: 2,
//   },
//   {
//     id: "3",
//     value: "Заниматься расчетами, вести документацию",
//     correct: 3,
//   },
//   {
//     id: "4",
//     value: "Возможность следить за ходом мыслей автора",
//     correct: "answer 1",
//   },
//   {
//     id: "5",
//     value: "Художественная форма, мастерство писателя или режиссера",
//     correct: "answer 2",
//   },
//   {
//     id: "6",
//     value: "Сюжет, действия героев",
//     corecct: "answer 3",
//   },
// ];
const quiz = document.getElementById("quiz");
const qustions = document.getElementById("qustions");
const results = document.getElementById("results");

// const renderQustions = () => {};
// const renderResults = () => {};
// quiz?.addEventListener("change", (event) => {
//   //Логика ответа
// });
// quiz?.addEventListener("click", (event) => {});
// const answersRender = answers.map((answer) => {
//   return (

//   );
// });
const DataContent = Data.map((item: any) => {
  const correct1 = Data[0].correct;
  console.log(Data[0][correct1]);

  return (
    <div>
      <div className={style.quizQustions} id="qustions">
        <div className={style.quizQustionsItem}>
          <div className={style.quizQustionsItemQustion}>{item.qustion}</div>
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
                <p>{item.answer1}</p>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="q1" />
                <p>{item.answer1}</p>
              </label>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className={style.quizResults} id="results">
        <div className={style.quizResultsItem}>
          <div className={style.quizQustionsItemQustion}>{item.qustion}</div>
          {answersRender}
        </div>
      </div> */}
    </div>
  );
});
const Quiz = () => {
  return (
    <div className={style.Quiz} id="quiz">
      {/* <div className={style.quizIndicator}>1/10</div> */}
      {DataContent}
      <div className={style.quizControls}>
        <button>Завершить тестирование</button>
      </div>
    </div>
  );
};
export default Quiz;
