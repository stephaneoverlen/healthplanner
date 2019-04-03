import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GetpatientphonenumberPage } from './getpatientphonenumber.page';

const routes: Routes = [
  {
    path: '',
    component: GetpatientphonenumberPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GetpatientphonenumberPage]
})
export class GetpatientphonenumberPageModule {}
