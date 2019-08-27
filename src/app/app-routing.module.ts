import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes',        component: HeroListComponent },
  { path: 'create-employee',        component: CreateEmployeeComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
