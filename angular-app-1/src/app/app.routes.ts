import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CodesbinComponent } from './Components/codesbin/codesbin.component';
import { authGuard } from './guard/auth.guard';
import { HomeComponent } from './Components/home/home.component';
import { ViewSnippetComponent } from './Components/view-snippet/view-snippet.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'code', component:CodesbinComponent, canActivate:[authGuard]},
    {path: 'about', loadComponent: ()=>import('./Components/about/about.component').then(mod=>mod.AboutComponent)},
    // {path:'', redirectTo:"/login", pathMatch:"full"},
    {path:'', component: HomeComponent},
    {path:'snippet/:id', component: ViewSnippetComponent},
    {path:'**', component:NotFoundComponent}
];
