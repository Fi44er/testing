const axios = require("axios")
const connection = require('../database/db')
const keyWordJson = require("../wordsGroups.json")
const ApiError = require('../exceptions/apiError')
const tokenService = require('./tokenService')



class ParserService {
    async getGroups(userId, refreshToken) {
        const connect = await connection
        
        const accessToken ="vk1.a.jtqHF1wPC9ZHJs2nQ9eN7oA4eOaA95BbIdU7-eySSB1ej1awZT4CNBblZGAv9-Pe7VhEEC6Nw-N5AQtSQkzbAPa6j8G9O1D_UKhtVnzSd2-MyFN4wXE1yjQhtXk112bJkBKB4DqReZ4sbLNfS9Z26Bzb9WjzcwO230yRWRYVR8iv6FfMjc0HM8-OWvOx_RJvTOBwbS_SZ6tycj7tMfSFIA" // ваш access_token

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
       
        const groupIds = responseDate.response.groups.items

        await axios
            .get(`https://api.vk.com/method/groups.getById?group_ids=${groupIds}&access_token=${accessToken}&v=5.131`)
            .then((response) => {
                nameGroups = response.data.response.map((group) => group.name)
            })

        const nameGroupsString = nameGroups.join("; ")
        
            function keywordSearch(text, keywords) {
                let score = 0;
                
                for (let i = 0; i < keywords.length; i++) {
                  const keyword = keywords[i];
                  const regex = new RegExp(keyword, 'gi'); // создаем регулярное выражение для поиска слова в тексте
                  const matches = text.match(regex); // ищем все соответствия слова в тексте
                  
                  if (matches) {
                    matches.forEach(match => {
                      const similarity = match.length / keyword.length;
                      if (similarity >= 0.9) {
                        score += 2;
                      }
                      if(score == 10) {return}
                    });
                  }
                }
                
                return score // выводим результат   
              }

              const scoreGroups = [];
              
              for (let i = 0; i < keyWordJson.length; i++) {
                const searchText = nameGroupsString;
                const isMatch = keywordSearch(searchText, keyWordJson[i].words);
                scoreGroups[i] = isMatch
              }

              const tokenFromDb = await tokenService.findToken(refreshToken)

              const test = await connect.execute('SELECT * FROM `result_quiz` WHERE `id_user` = ?', [tokenFromDb[0].user]);
              const resultTest = test[0][test[0].length-1];
              const parseResultTest = JSON.parse(resultTest.result);

              for(let i = 0; i < parseResultTest.length; i++) {
                parseResultTest[i].count += scoreGroups[i];
              }

              await connect.execute("UPDATE `result_quiz` SET `result`=? WHERE `id`=?", [JSON.stringify(parseResultTest), resultTest.id])
              console.log(parseResultTest);
        return parseResultTest
    }
}

module.exports = new ParserService()