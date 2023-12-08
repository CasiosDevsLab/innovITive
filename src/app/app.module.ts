import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { StudentsComponent } from './students/students.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { FloatingBtnComponent } from './floating-btn/floating-btn.component';
import { SurveyComponent } from './survey/survey.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ProjectsComponent,
    HomeComponent,
    BusinessComponent,
    StudentsComponent,
    AboutComponent,
    LegalComponent,
    FloatingBtnComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
