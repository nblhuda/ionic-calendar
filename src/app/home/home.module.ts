// home.module.ts

import { NgModule , LOCALE_ID} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

// Calendar UI Module
import { CalendarModule } from 'ion2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    CalendarModule
  ],
  declarations: [HomePage],
  providers: [{ provide: LOCALE_ID, useValue: 'zh-CN' }]
})

export class HomePageModule {}

