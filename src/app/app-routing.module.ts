import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Adding imports for componenets
import { LoginComponent } from './components/login/login.component'
import { HomepageComponent } from './components/homepage/homepage.component'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
