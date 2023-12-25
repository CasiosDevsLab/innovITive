import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './component/projects/projects.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { StudentsComponent } from './component/students/students.component';
import { BusinessComponent } from './component/business/business.component';
import { LegalComponent } from './component/legal/legal.component';
import { SurveyComponent } from './component/survey/survey.component';
import { BusinessCardComponent } from './component/business-card/business-card.component';
import { ConsultantTeamComponent } from './component/consultant-team/consultant-team.component';

const routes: Routes = [
  { path: 'contact', component: ConsultantTeamComponent},
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'survey', component: SurveyComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
 })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
