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
      const { refreshToken } = req.cookies
      const answers = req.body
      console.log(refreshToken);
      const quizData = await quizService.resultQuiz(answers, refreshToken)

      return res.json(quizData)
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new QuizController()
