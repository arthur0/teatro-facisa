import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNoticiaPage } from './add-noticia'

@NgModule({
  declarations: [
    AddNoticiaPage
  ],
  imports: [
     IonicPageModule.forChild(AddNoticiaPage)
  ],
  entryComponents:[
    AddNoticiaPage
  ],
  exports: [
    AddNoticiaPage
  ]
})
export class AddNoticiasPageModule {}
