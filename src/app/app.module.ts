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
import { ContactComponent } from './website/components/contact/contact.component';
import { LoginComponent } from './website/components/login/login.component';
import { DashboardComponent } from './website/components/dashboard/dashboard.component';
import { DashboardHomeComponent } from './website/components/dashboard/dashboard-home/dashboard-home.component';
import { DashboardProjectComponent } from './website/components/dashboard/dashboard-project/dashboard-project.component';
import { PortfolioComponent } from './website/components/portfolio/portfolio.component';
import { PortfolioHomeComponent } from './website/components/portfolio/portfolio-home/portfolio-home.component';
import { PortfolioProjectComponent } from './website/components/portfolio/portfolio-project/portfolio-project.component';
import { DashboardMessagesComponent } from './website/components/dashboard/dashboard-messages/dashboard-messages.component';
import { DateAgoPipe } from './website/shared/pipes/date-ago.pipe';
import { SliderComponent } from './website/shared/components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    ResumeComponent,
    MenuComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    DashboardComponent,
    DashboardHomeComponent,
    DashboardProjectComponent,
    PortfolioComponent,
    PortfolioHomeComponent,
    PortfolioProjectComponent,
    DashboardMessagesComponent,
    DateAgoPipe,
    SliderComponent,
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
