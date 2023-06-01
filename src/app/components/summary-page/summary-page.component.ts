import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { QuestionsService } from 'src/app/services/questions.service';
import { MatListModule } from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-summary-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatChipsModule, MatButtonModule, RouterModule],
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent {
  readonly questionService = inject(QuestionsService);

  isAnswerCorrect(): boolean {
    return this.questionService.selectedQuestionSignal()?.correctAnswer ===
           this.questionService.selectedQuestionSignal()?.userAnswer;
  }

  calculatePercentageCorrect(): number {
    const percentage = 
      (this.questionService.correctAnswersCounter() / this.questionService.questionsListSignal().length) * 100;
    return Math.round(percentage);
  }
}
