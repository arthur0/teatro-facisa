import { Component } from '@angular/core';
import { ViewController, IonicPage } from 'ionic-angular';
 
 
@IonicPage()
@Component({
  selector: 'add-noticia',
  templateUrl: 'add-noticia.html'
})
export class AddNoticiaPage {
 
  titulo: any;
  texto: any;
 
  constructor(public viewCtrl: ViewController) {
 
  }
 
  salvar(): void {
    let noticia= {
      titulo: this.titulo,
      texto: this.texto,
    };
     this.viewCtrl.dismiss(noticia);
   }
 
  fechar(): void {
    this.viewCtrl.dismiss();
  }
}