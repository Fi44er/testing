const ParserService = require('../service/parserService')


class ParserController {
    async getGroups(req, res, next) {
        try {
            const userId = req.query.user_id
            console.log(userId);
            const parserData = await ParserService.getGroups(userId)
            return res.json(parserData)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ParserController()
