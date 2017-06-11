import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerguntaEstatisticaPage } from './pergunta-estatistica';

@NgModule({
  declarations: [
    PerguntaEstatisticaPage,
  ],
  imports: [
    IonicPageModule.forChild(PerguntaEstatisticaPage),
  ],
  exports: [
    PerguntaEstatisticaPage
  ]
})
export class PerguntaEstatisticaPageModule {}
