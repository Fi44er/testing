import style from "./Quiz.module.css";

const Data: any = [
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:",
    answer1: "Нравится",
    correct: "answer1",
    answer2: "Не нравится",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:1",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:1",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:1",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:1",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:1",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:1",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },

  {
    qustion: "В книге или кинофильме меня больше всего привлекает:",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:1",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:1",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
  {
    qustion: "В книге или кинофильме меня больше всего привлекает:1",
    answer1: "Возможность следить за ходом мыслей автора",
    correct: "answer1",
    answer2: "Художественная форма, мастерство писателя или режиссера",
    answer3: "Сюжет, действия героев",
  },
];

// const quiz = document.getElementById("quiz");
// const qustions = document.getElementById("qustions");
// const results = document.getElementById("results");

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
                <div className={style.answer}>
                  <p>{item.answer1}</p>
                </div>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="q1" />
                <div className={style.answer}>
                  <p>{item.answer2}</p>
                </div>
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
