import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoemsComponent } from './poems/poems.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PoemDetailComponent } from './poem-detail/poem-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'poems', component: PoemsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PoemDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
