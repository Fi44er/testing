const connection = require("../database/db")

class QuizService {
  async getQuiz() {
    const connect = await connection
    const quiz = await connect.execute("SELECT * FROM `prof_test`")
    return quiz[0]
  }

  async resultQuiz(answers) {
    const connect = await connection

    console.log(answers)

    // console.log(new Set(answers.map((el) => el.categoryId)))

    const categories = Array.from(
      new Set(answers.map((el) => el.categoryId))
    ).map((el) => {
      return {
        category: el,
        count: 0,
      }
    })

    answers.forEach((element) => {
      console.log(categories)
      let ss = categories.findIndex((el) => el.category === element.categoryId)
      console.log(ss)

      if (element.answer == 0) {
        categories[ss].count += element.countPoint
      } else if (element.answer == 1) {
        categories[ss].count -= element.countPoint
      }
    })

    console.log(categories)

    // console.log(quizResult);

    return categories
  }
}

module.exports = new QuizService()
