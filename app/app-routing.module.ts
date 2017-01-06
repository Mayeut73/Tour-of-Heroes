import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes: Routes = [
  {
    // Quand l'application demmare ('') on redirectTo dashboard
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
  ,
  {
    // Route dashboard
    path: 'dashboard',
    component: DashboardComponent
  }
  ,
  {
    // Route detail pour donner l'ID
    path: 'detail/:id',
    component: HeroDetailComponent
  }
  ,
  {
    // Route pour le heroes
    path: 'heroes',
    component: HeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
