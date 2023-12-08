const ParserService = require('../service/parserService')

class ParserController {
    async getGroups(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const {vkId} = req.body
            const parserData = await ParserService.getGroups(vkId, refreshToken)
            return res.json(parserData)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ParserController()