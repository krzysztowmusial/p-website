import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebsiteComponent } from './website/website.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
    {path: '', component: WebsiteComponent},
    {path: 'resume', component: ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
