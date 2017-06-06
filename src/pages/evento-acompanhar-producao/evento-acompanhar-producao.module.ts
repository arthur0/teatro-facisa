import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoAcompanharProducaoPage } from './evento-acompanhar-producao';

@NgModule({
  declarations: [
    EventoAcompanharProducaoPage,
  ],
  imports: [
    IonicPageModule.forChild(EventoAcompanharProducaoPage),
  ],
  exports: [
    EventoAcompanharProducaoPage
  ]
})
export class EventoAcompanharProducaoPageModule {}
