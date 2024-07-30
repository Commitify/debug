import { type Setting, QuestionType } from "@comitter/shared/types"

export const config: Setting = {
  name: "Personnal config",
  templating: (answers) => {
    return `${answers[0].formattedValue}: ${answers[1].formattedValue} by ${answers[2].formattedValue}`
  },
  questions: [
    {
      id: 'type',
      type: QuestionType.Select,
      options: [
        {
          id: "feat",
          title: "📖 Feature",
          value: "📖 Feat"
        },
        {
          id: "fix",
          title: "📦 Fix",
          value: "📦 Fix"
        }
      ],
      title: "Which type of commit is it ?"
    },
    {
      id: "content",
      type: QuestionType.String,
      title: "What did you do ?",
    },
    {
      id: "author",
      type: QuestionType.String,
      title: "What's your name ?",
    }
  ]
}