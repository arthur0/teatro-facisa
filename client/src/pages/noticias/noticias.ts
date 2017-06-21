import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddNoticiaPage } from './add-noticia';
import { NoticiasProvider } from '../../providers/noticias/noticias';


@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  noticias: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public noticiasService: NoticiasProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.noticiasService.getNoticias().then((data) => {
      this.noticias = data;
    });
  }

  // TODO implement this
  mostraNoticia(){
    console.log("Botao VER MAIS clicado")
  }

  addNoticia(){
    let modal = this.modalCtrl.create(AddNoticiaPage);
 
    modal.onDidDismiss(noticia => {
      if(noticia){
        this.noticias.push(noticia);
        this.noticiasService.createNoticia(noticia);        
      }
    });
 
    modal.present();
  }

 
  // TODO: Implement this 
  // deleteNoticia(noticias){
 
  //   //Remove locally
  //     let index = this.noticiass.indexOf(noticias);
 
  //     if(index > -1){
  //       this.noticiass.splice(index, 1);
  //     }   
 
  //   //Remove from database
  //   this.noticiasService.deletenoticias(noticias._id);
  // }

}