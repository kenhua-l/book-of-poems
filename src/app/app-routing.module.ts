import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoemsComponent } from './poems/poems.component';

const routes: Routes = [
  { path: 'poems', component: PoemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
