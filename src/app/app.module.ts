import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { environment } from '../environments/environment';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
import { ResumeComponent } from './resume/resume.component';
import { MenuComponent } from './website/shared/components/menu/menu.component';
import { NavComponent } from './website/shared/components/nav/nav.component';
import { HomeComponent } from './website/components/home/home.component';
import { ProjectsComponent } from './website/components/projects/projects.component';
import { ContactComponent } from './website/components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    ResumeComponent,
    MenuComponent,
    NavComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
