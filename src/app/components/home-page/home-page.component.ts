import { Component, inject, TrackByFunction } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from 'src/app/models/question.interface';
import { MatCardModule } from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { FormsModule } from '@angular/forms';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatRadioModule, MatButtonModule, MatDialogModule, FormsModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  readonly dialog = inject(MatDialog);
  readonly questionService = inject(QuestionsService);

  constructor() {
    console.log(this.questionService.questionsListSignal())
  }

  openDialog(selectedQuestion: Question): void {
    this.questionService.selectedQuestionSignal.update(() => selectedQuestion);
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
  }
}
