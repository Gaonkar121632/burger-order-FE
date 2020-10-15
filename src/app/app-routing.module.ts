import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBurgerComponent } from './burger/create-burger/create-burger.component';
import { ListBurgerComponent } from './burger/list-burger/list-burger.component';


const routes: Routes = [
  { path: 'create', component: CreateBurgerComponent },
  { path: 'list', component: ListBurgerComponent },
  { path: '',   redirectTo: '/create', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
