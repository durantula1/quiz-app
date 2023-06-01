import { QuestionsService } from 'src/app/services/questions.service';
import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { QUESTIONS } from 'src/app/constants/questions';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, RouterModule, MatSidenavModule, RouterModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly questionService = inject(QuestionsService);
  readonly router = inject(Router);

  resetQuiz(): void {
    this.questionService.resetQuestions();
    //TODO toast msg
    this.router.navigate(['/']);
  }
}
