const quizService = require("../service/quizService")

class QuizController {
  async getQuiz(req, res, next) {
    try {
      const quiz = await quizService.getQuiz()
      return res.json(quiz)
    } catch (e) {
      next(e)
    }
  }

  async resultQuiz(req, res, next) {
    try {
      const answers = req.body
      console.log(answers)
      const quizData = await quizService.resultQuiz(answers)

      return res.json(quizData)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new QuizController()
