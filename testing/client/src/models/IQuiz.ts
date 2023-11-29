enum Answer {
    Like,
    DisLike,
    Idk,
  }

export interface IQuiz {
    question: string
      answer?: Answer | undefined
      categoryId?: number | undefined
      countspoint?: number | undefined
}