import { Router, RouterModule } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, RouterModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  readonly questionService = inject(QuestionsService);
  readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent>)
  readonly router = inject(Router);

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close();
    this.questionService.selectedQuestionSignal.mutate(val => val!.isAnswered = !!val);
    this.questionService.questionsListSignal.mutate(val => val.map(el => el.isAnswered = !!el.isAnswered));
    this.isAnswerCorrect();
    this.router.navigate(['/summary']);
  }

  isAnswerCorrect(): void {
    if (this.questionService.selectedQuestionSignal()?.correctAnswer ===
           this.questionService.selectedQuestionSignal()?.userAnswer) {
            this.questionService.correctAnswersCounter.update(val => val + 1);
           }
  }
}
