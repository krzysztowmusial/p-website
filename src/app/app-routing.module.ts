import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

import { WebsiteComponent } from './website/website.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './website/components/home/home.component';
import { ProjectsComponent } from './website/components/projects/projects.component';
import { ContactComponent } from './website/components/contact/contact.component';
import { LoginComponent } from './website/components/login/login.component';
import { DashboardComponent } from './website/components/dashboard/dashboard.component';

const redirectLoggedInToDashboard = () => redirectLoggedInTo(['/dashboard']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
    {path: '', component: WebsiteComponent, 
        children: [
            {path: '', component: HomeComponent},
            {path: 'projects', component: ProjectsComponent},
            {path: 'contact', component: ContactComponent},
            {path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToDashboard }},
            {path: 'dashboard', component: DashboardComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }}
        ]},
    {path: 'resume', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
