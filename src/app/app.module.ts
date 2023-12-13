import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { HomeComponent } from './component/home/home.component';
import { BusinessComponent } from './component/business/business.component';
import { StudentsComponent } from './component/students/students.component';
import { AboutComponent } from './component/about/about.component';
import { LegalComponent } from './component/legal/legal.component';
import { FloatingBtnComponent } from './component/floating-btn/floating-btn.component';
import { SurveyComponent } from './component/survey/survey.component';
import { AltHomeComponent } from './component/alt-home/alt-home.component';
import { ConsultantTeamComponent } from './component/consultant-team/consultant-team.component';
import { BusinessCardComponent } from './component/business-card/business-card.component';

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
    SurveyComponent,
    AltHomeComponent,
    ConsultantTeamComponent,
    BusinessCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
