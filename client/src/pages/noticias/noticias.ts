import { Component } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddNoticiaPage } from './add-noticia';
import { NoticiasProvider } from '../../providers/noticias/noticias';


=======
=======
>>>>>>> login
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoticiasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
<<<<<<< HEAD
>>>>>>> foto
=======
>>>>>>> login
@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

<<<<<<< HEAD
<<<<<<< HEAD
  noticias: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public noticiasService: NoticiasProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NOTICIAS_PAGE');
    this.noticiasService.getNoticias().then((data) => {
      console.log(data);
      this.noticias = data;
    });
  }

  // TODO implement this
  mostraNoticia(){
    console.log("Botao VER MAIS clicado")
  }

  addNoticia(){
    console.log("Botão ADD NOTICIA clicado")
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

=======
=======
>>>>>>> login
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticiasPage');
  }

<<<<<<< HEAD
>>>>>>> foto
=======
>>>>>>> login
}
