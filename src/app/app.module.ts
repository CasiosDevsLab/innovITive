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
import { ConsultantTeamComponent } from './component/consultant-team/consultant-team.component';
import { BusinessCardComponent } from './component/business-card/business-card.component';
import {MatIconModule} from '@angular/material/icon';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { BgFloatingTextComponent } from './component/bg-floating-text/bg-floating-text.component';
import { ArticlesBtnComponent } from './component/articles-btn/articles-btn.component';
import { ServicesComponent } from './component/services/services.component';
import { ReferencesComponent } from './component/references/references.component';
import { SplitviewTextImageComponent } from './component/splitview-text-image/splitview-text-image.component';
import { HorizontalScrollComponent } from './component/horizontal-scroll/horizontal-scroll.component';
import { NgOptimizedImage } from '@angular/common'

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
    ConsultantTeamComponent,
    BusinessCardComponent,
    BgFloatingTextComponent,
    ArticlesBtnComponent,
    ServicesComponent,
    ReferencesComponent,
    SplitviewTextImageComponent,
    HorizontalScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NgxGoogleAnalyticsModule,
    NgxGoogleAnalyticsModule.forRoot('G-MPTCCHBKHP'),
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
