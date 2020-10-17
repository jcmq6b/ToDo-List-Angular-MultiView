import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Adding imports for componenets
import { LoginComponent } from './components/login/login.component'
import { HomepageComponent } from './components/homepage/homepage.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

//Add imports into the routes
//Every time user wants to move to a new page it loops through array and loads corresponding component
//Order of routes is important
//Whatever matches FIRST is selected
//More specific routes should be placed first
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
  {
    //redirect to 'login'
    path: "",
    redirectTo: "/login",
    pathMatch: 'full'
  },
  {
    //Wildcard route for 404 page
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
