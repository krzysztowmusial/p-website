import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebsiteComponent } from './website/website.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './website/components/home/home.component';
import { ProjectsComponent } from './website/components/projects/projects.component';
import { ContactComponent } from './website/components/contact/contact.component';


const routes: Routes = [
    {path: '', component: WebsiteComponent, 
        children: [
            {path: '', component: HomeComponent},
            {path: 'projects', component: ProjectsComponent},
            {path: 'contact', component: ContactComponent},
        ]},
    {path: 'resume', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
