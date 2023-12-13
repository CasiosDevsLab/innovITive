import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './component/projects/projects.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { StudentsComponent } from './component/students/students.component';
import { BusinessComponent } from './component/business/business.component';
import { LegalComponent } from './component/legal/legal.component';
import { SurveyComponent } from './component/survey/survey.component';
import { AltHomeComponent } from './component/alt-home/alt-home.component';
import { BusinessCardComponent } from './component/business-card/business-card.component';

const routes: Routes = [
  { path: 'contact/hiller', component: BusinessCardComponent},
  { path: 'home', component: AltHomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'survey', component: SurveyComponent },
  { path: '', redirectTo: '/survey', pathMatch: 'full'},
  {path: '**', redirectTo: '/contact/hiller'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
 })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
