import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiasPage } from './noticias';
import { AddNoticiasPageModule } from './add-noticia.module'

@NgModule({
  declarations: [
    NoticiasPage,
    AddNoticiasPageModule

  ],
  imports: [
    IonicPageModule.forChild(NoticiasPage),
    IonicPageModule.forChild(AddNoticiasPageModule)
  ],
  entryComponents:[
    NoticiasPage,
  ],
  exports: [
    NoticiasPage,
  ]
})
export class NoticiasPageModule {}
