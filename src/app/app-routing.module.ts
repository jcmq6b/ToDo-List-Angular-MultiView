import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Adding imports for componenets
import { LoginComponent } from './components/login/login.component'
import { HomepageComponent } from './components/homepage/homepage.component'

//Add imports into the routes
//Every time user wants to move to a new page it loops through array and loads corresponding component
const routes: Routes = [
  {
    //whats in the url
    path: "login",
    //If path then load:
    component: LoginComponent,
  },
  {
    path: "home",
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
