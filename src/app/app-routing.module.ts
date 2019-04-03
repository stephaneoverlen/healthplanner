import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'praticien', loadChildren: './praticien/praticien.module#PraticienPageModule' },
  { path: 'deplacement', loadChildren: './deplacement/deplacement.module#DeplacementPageModule' },
  { path: 'ordonnance', loadChildren: './ordonnance/ordonnance.module#OrdonnancePageModule' },
  { path: 'horaires', loadChildren: './horaires/horaires.module#HorairesPageModule' },
  { path: 'finalisation', loadChildren: './finalisation/finalisation.module#FinalisationPageModule' },
  { path: 'informations', loadChildren: './informations/informations.module#InformationsPageModule' },  { path: 'authenticate', loadChildren: './authenticate/authenticate.module#AuthenticatePageModule' },
  { path: 'programme', loadChildren: './programme/programme.module#ProgrammePageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'parcours', loadChildren: './parcours/parcours.module#ParcoursPageModule' },
  { path: 'getpatientphonenumber', loadChildren: './getpatientphonenumber/getpatientphonenumber.module#GetpatientphonenumberPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
