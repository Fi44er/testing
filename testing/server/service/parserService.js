const axios = require("axios")
const words = require("../wordsGroups.json")
const ApiError = require('../exceptions/apiError')

class ParserService {
    async getGroups(userId) {


        // console.log(words);


        const accessToken =
            "vk1.a.jtqHF1wPC9ZHJs2nQ9eN7oA4eOaA95BbIdU7-eySSB1ej1awZT4CNBblZGAv9-Pe7VhEEC6Nw-N5AQtSQkzbAPa6j8G9O1D_UKhtVnzSd2-MyFN4wXE1yjQhtXk112bJkBKB4DqReZ4sbLNfS9Z26Bzb9WjzcwO230yRWRYVR8iv6FfMjc0HM8-OWvOx_RJvTOBwbS_SZ6tycj7tMfSFIA" // ваш access_token

        // let data

        if (("" + userId).length < 5 || ("" + userId).length > 32) {
            throw ApiError.InCorrectId(`ID: ${userId} не корректный`)
        }

        let responseDate
        let nameGroups
        await axios
            .get(`https://api.vk.com/method/users.getSubscriptions?user_id=${userId}&access_token=${accessToken}&v=5.131`)
            .then((response) => {
                responseDate = response.data
            })

        if (responseDate.error) {
            throw ApiError.InCorrectId(`Пользователя с ID: ${userId} не существует`)
        }
        if (!responseDate.response.groups.items[0]) {
            nameGroups = []
            return nameGroups
        }
        console.log(responseDate.response.groups.items);
        const groupIds = responseDate.response.groups.items

        await axios
            .get(`https://api.vk.com/method/groups.getById?group_ids=${groupIds}&access_token=${accessToken}&v=5.131`)
            .then((response) => {
                nameGroups = response.data.response.map((group) => group.name)
            })

        return nameGroups
    }
}

module.exports = new ParserService()