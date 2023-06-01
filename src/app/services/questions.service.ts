import { QUESTIONS, RESET_QUESTIONS } from './../constants/questions';
import { Question } from 'src/app/models/question.interface';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questionsListSignal = signal<Question[]>(QUESTIONS);
  selectedQuestionSignal = signal<Question | undefined>(undefined);
  correctAnswersCounter = signal<number>(0);

  resetQuestions(): void {
    this.questionsListSignal.update(() => RESET_QUESTIONS);
  }
}
