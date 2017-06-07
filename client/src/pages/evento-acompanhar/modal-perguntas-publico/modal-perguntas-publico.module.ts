import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPerguntasPublicoPage } from './modal-perguntas-publico';

@NgModule({
  declarations: [
    ModalPerguntasPublicoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPerguntasPublicoPage),
  ],
  exports: [
    ModalPerguntasPublicoPage
  ]
})
export class ModalPerguntasPublicoPageModule {}
