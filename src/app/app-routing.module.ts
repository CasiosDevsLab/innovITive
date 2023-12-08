import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentsComponent } from './students/students.component';
import { BusinessComponent } from './business/business.component';
import { LegalComponent } from './legal/legal.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'survey', component: SurveyComponent },
  { path: '', redirectTo: '/survey', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
 })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
