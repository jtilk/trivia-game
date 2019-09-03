import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { QuizComponent } from "./quiz/quiz.component";

@NgModule({
  declarations: [AppComponent, QuizComponent],
  imports: [BrowserModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
