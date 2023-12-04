const ParserService = require('../service/parserService')


class ParserController {
    async getGroups(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            console.log(refreshToken);
            const userId = req.query.user_id
            const parserData = await ParserService.getGroups(userId, refreshToken)
            return res.json(parserData)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ParserController()
