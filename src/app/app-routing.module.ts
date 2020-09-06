import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

import { WebsiteComponent } from './website/website.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './website/components/home/home.component';
import { ContactComponent } from './website/components/contact/contact.component';
import { LoginComponent } from './website/components/login/login.component';
import { DashboardComponent } from './website/components/dashboard/dashboard.component';
import { DashboardHomeComponent } from './website/components/dashboard/dashboard-home/dashboard-home.component';
import { DashboardProjectComponent } from './website/components/dashboard/dashboard-project/dashboard-project.component';
import { PortfolioComponent } from './website/components/portfolio/portfolio.component';
import { PortfolioHomeComponent } from './website/components/portfolio/portfolio-home/portfolio-home.component';
import { PortfolioProjectComponent } from './website/components/portfolio/portfolio-project/portfolio-project.component';

const redirectLoggedInToDashboard = () => redirectLoggedInTo(['/dashboard']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
    {path: '', component: WebsiteComponent, 
        children: [
            {path: '', component: HomeComponent},
            {path: 'portfolio', component: PortfolioComponent, children: [
                {path: '', component: PortfolioHomeComponent},
                {path: 'project', component: PortfolioProjectComponent}
            ]},
            {path: 'contact', component: ContactComponent},
            {path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToDashboard }},
            {path: 'dashboard', component: DashboardComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin },
                children: [
                    {path: '', component: DashboardHomeComponent},
                    {path: 'project', component: DashboardProjectComponent}
                ]}
        ]},
    {path: 'resume', component: ResumeComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
