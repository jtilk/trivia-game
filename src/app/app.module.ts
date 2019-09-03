import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ResultsComponentComponent } from './results-component/results-component.component';
import { ScoresComponentComponent } from './scores-component/scores-component.component';

@NgModule({
  declarations: [AppComponent, QuizComponent, ResultsComponentComponent, ScoresComponentComponent],
  imports: [BrowserModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
