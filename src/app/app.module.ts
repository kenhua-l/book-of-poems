import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoemsComponent } from './poems/poems.component';
import { PoemDetailComponent } from './poem-detail/poem-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PoemsComponent,
    PoemDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
