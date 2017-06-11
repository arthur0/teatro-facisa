import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoAcompanharPage } from './evento-acompanhar';

@NgModule({
  declarations: [
    EventoAcompanharPage,
  ],
  imports: [
    IonicPageModule.forChild(EventoAcompanharPage),
  ],
  exports: [
    EventoAcompanharPage
  ]
})
export class EventoAcompanharPageModule {}
