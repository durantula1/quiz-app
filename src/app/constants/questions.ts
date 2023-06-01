export const QUESTIONS = [
    {
        id: 1,
        question: "Question one",
        correctAnswer: 'Answer 1',
        possibleAnswers: [
            {key: "a", value: 'Answer 1'},
            {key: "b", value: 'Answer 2'},
            {key: "c", value: 'Answer 3'},
        ],
        isAnswered: false,
        userAnswer: ''
    },
    {
        id: 2,
        question: "Question two",
        correctAnswer: 'Answer 1',
        possibleAnswers: [
            {key: "a", value: 'Answer 1'},
            {key: "b", value: 'Answer 2'},
            {key: "c", value: 'Answer 3'},
        ],
        isAnswered: false,
        userAnswer: ''
    },
    {
        id: 3,
        question: "Question three",
        correctAnswer: 'Answer 1',
        possibleAnswers: [
            {key: "a", value: 'Answer 1'},
            {key: "b", value: 'Answer 2'},
            {key: "c", value: 'Answer 3'},
        ],
        isAnswered: false,
        userAnswer: ''
    },
    {
        id: 4,
        question: "Question four",
        correctAnswer: 'Answer 1',
        possibleAnswers: [
            {key: "a", value: 'Answer 1'},
            {key: "b", value: 'Answer 2'},
            {key: "c", value: 'Answer 3'},
        ],
        isAnswered: false,
        userAnswer: ''
    },
    {
        id: 5,
        question: "Question five",
        correctAnswer: 'Answer 1',
        possibleAnswers: [
            {key: "a", value: 'Answer 1'},
            {key: "b", value: 'Answer 2'},
            {key: "c", value: 'Answer 3'},
        ],
        isAnswered: false,
        userAnswer: ''
    }
];

export const RESET_QUESTIONS = JSON.parse(JSON.stringify(QUESTIONS));