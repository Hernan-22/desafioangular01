import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableroprincipalModule } from './tableroprincipal/tableroprincipal.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableroprincipalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
