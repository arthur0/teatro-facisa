import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InteracaoPage } from './interacao';

@NgModule({
  declarations: [
    InteracaoPage,
  ],
  imports: [
    IonicPageModule.forChild(InteracaoPage),
  ],
  exports: [
    InteracaoPage
  ]
})
export class InteracaoPageModule {}
