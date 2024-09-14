import Shared from "@comitify/shared";

export const config = {
  name: "Personnal config",
  templating: (answers) => {
    return `${answers[0].formattedValue}: ${answers[1].formattedValue} by ${answers[2].formattedValue}`;
  },
  autoCommit: true,
  questions: [
    {
      id: "type",
      type: Shared.QuestionType.Select,
      options: [
        {
          id: "feat",
          title: "📖 Feature",
          value: "📖 Feat",
        },
        {
          id: "fix",
          title: "📦 Fix",
          value: "📦 Fix",
        },
      ],
      title: "Which type of commit is it ?",
    },
    {
      id: "content",
      type: Shared.QuestionType.String,
      title: "What did you do ?",
    },
    {
      id: "author",
      type: Shared.QuestionType.String,
      title: "What's your name ?",
    },
  ],
};

export default config;
