import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

// Fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
import { ResumeComponent } from './resume/resume.component';
import { MenuComponent } from './website/shared/components/menu/menu.component';
import { NavComponent } from './website/shared/components/nav/nav.component';
import { HomeComponent } from './website/components/home/home.component';
import { ProjectsComponent } from './website/components/projects/projects.component';
import { ContactComponent } from './website/components/contact/contact.component';
import { LoginComponent } from './website/components/login/login.component';
import { DashboardComponent } from './website/components/dashboard/dashboard.component';

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
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
