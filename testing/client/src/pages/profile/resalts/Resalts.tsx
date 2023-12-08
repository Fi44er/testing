import style from "./resalts.module.css";

export default function Resalts() {
  const location = window.location.href
  const locationURL = new URL(location)
  const result = JSON.parse(`${locationURL.searchParams.get('obj')}`);
  // console.log(result[0]);
  
  return (
    <div className={style.results}>
      <div className={style.head}>
        <h1>Результаты тестирования</h1>
      </div>
      <div className={style.container}>
        <div className={style.resultsContent}>
          <div className={style.profItems}>
            <div className={style.prof1}>
              <h2>Человек и природа</h2>
              <p>Сходство: {result[0].count} %</p>
            </div>
            <div className={style.prof2}>
              <h2>Человек-техника</h2>
              <p>Сходство: {result[1].count} %</p>
            </div>
            <div className={style.prof1}>
              <h2>Человек-искуство</h2>
              <p>Сходство: {result[2].count} %</p>
            </div>
            <div className={style.prof2}>
              <h2>Человек-Знаковые системы</h2>
              <p>Сходство: {result[3].count} %</p>
            </div>
            <div className={style.prof1}>
              <h2>Человек человек</h2>
              <p>Сходство: {result[4].count} %</p>
            </div>
          </div>
          <div className={style.profRecomend}>
            <div>
              <div className={style.profRecomendHead}>
                <h2>Наши рекомендация расмотреть данные заведения:</h2>
              </div>
              <p>
                Учебное учереждение А,Учебное учереждение Б, Учебное учереждение
                В
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/";
                }}
              >
                Перейти на главную
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
