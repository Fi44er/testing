const express = require("express")
const axios = require("axios")

const app = express()
const port = 3000


// const db = [
//   {
//     'человек-природа': []
//   }
// ]

// function keywordSearch(text, keywords) {
//   const words = text.toLowerCase().split(/\s+/);

//   const regexArray = keywords.map(keyword => new RegExp(`\\b${keyword.toLowerCase()}\\b`));
//   const matchingKeywords = regexArray.filter(regex => words.some(word => regex.test(word)));

//   // Вычисляем вероятность совпадения
//   const matchingPercentage = (matchingKeywords.length / keywords.length) * 100;

//   return matchingPercentage >= 90;
// }

app.get("/groups", async (req, res) => {
  const userId = req.query.user_id // извлекаем параметр user_id из запроса
  const accessToken =
    "vk1.a.jtqHF1wPC9ZHJs2nQ9eN7oA4eOaA95BbIdU7-eySSB1ej1awZT4CNBblZGAv9-Pe7VhEEC6Nw-N5AQtSQkzbAPa6j8G9O1D_UKhtVnzSd2-MyFN4wXE1yjQhtXk112bJkBKB4DqReZ4sbLNfS9Z26Bzb9WjzcwO230yRWRYVR8iv6FfMjc0HM8-OWvOx_RJvTOBwbS_SZ6tycj7tMfSFIA" // ваш access_token

  // let data

  let responseDate
  let nameGroups
  await axios
    .get(
      `https://api.vk.com/method/users.getSubscriptions?user_id=${userId}&access_token=${accessToken}&v=5.131`
    )
    .then((response) => {
      responseDate = response.data
    })
  const groupIds = responseDate.response.groups.items
  await axios
    .get(
      `https://api.vk.com/method/groups.getById?group_ids=${groupIds}&access_token=${accessToken}&v=5.131`
    )
    .then((response) => {
      nameGroups = response.data.response.map((group) => group.name)
    })
    console.log(nameGroups);
    
})

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`)
})
