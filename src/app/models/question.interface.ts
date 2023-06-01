export interface Question {
    id: number;
    question: string;
    correctAnswer: string;
    possibleAnswers: Answer[];
    isAnswered: boolean;
    userAnswer: string;
}

export interface Answer {
    key: string;
    value: string;
}