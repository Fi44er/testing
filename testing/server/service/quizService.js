const connection = require("../database/db")
const ApiError = require('../exceptions/apiError')
const tokenService = require('./tokenService')



class QuizService {
  async getQuiz() {
    const connect = await connection
    const quiz = await connect.execute("SELECT * FROM `prof_test`")
    return quiz[0]
  }

  async resultQuiz(answers, refreshToken) {
    const connect = await connection


    for (let i = 0; i < answers.length; i++) {
      if (answers[i].answer === undefined) {
        throw ApiError.InCorrectId(`Не все поля заолненны`)
      }
    }

    const categories = Array.from(
      new Set(answers.map((el) => el.categoryId))
    ).map((el) => {
      return {
        category: el,
        count: 0,
      }
    })

    answers.forEach((element) => {
      let ss = categories.findIndex((el) => el.category === element.categoryId)
      if (element.answer == 0) {
        categories[ss].count += element.countPoint
      } else if (element.answer == 1) {
        categories[ss].count -= element.countPoint
      }
    })

    for (let i = 0; i < categories.length; i++) {
      if (categories[i].count === 0) {
        categories[i].count = 50;
      } else {
        categories[i].count = Math.round((categories[i].count + 8)*6.25)
      }
      
    }

    const resultCategories = JSON.stringify(categories)

    const tokenFromDb = await tokenService.findToken(refreshToken)
    await connect.execute("INSERT INTO `result_quiz`(`id_user`, `result`) VALUES(?,?)", [tokenFromDb[0].user, resultCategories])

    return categories
  }
}

module.exports = new QuizService()
