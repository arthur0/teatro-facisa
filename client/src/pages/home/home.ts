import { Component ,OnInit} from '@angular/core';
import { NavController, ActionSheetController} from 'ionic-angular';
import { Http } from '@angular/http';

import * as AppConf from '../../app/app.const'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit{

  dataLogin: boolean;
  isLerMais: boolean = false;
  user: string = '' ;
  picture: string = '';
  fotos: any;

  constructor(private http: Http, public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {
  }
  
  ngOnInit(){
    var response = JSON.parse(window.localStorage.getItem('user'));
    if(response !== null){
      this.dataLogin = true;
      this.user = response.displayName;
    }
  };

  lerMais() {
    if(this.isLerMais === false) {
      this.isLerMais = true;
    } else {
      this.isLerMais = false;
    }
  };

  getFotosTeatro() {
    return this.http.get( AppConf.SERVER_URL + '/api/fotosTeatro')
    .subscribe(
      data => {
        let tagSlide = document.getElementById('ion-slide');
        // tagSlide.setAttribute('autoplay', '1000');
        // tagSlide.setAttribute('loop', 'true');
        // tagSlide.setAttribute('speed', '3000');
        this.fotos = data.json();
      }
    )
  };

  abrirLogout() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opções',
      buttons: [
        {
          text: 'Sair',
          handler: () => {
            window.localStorage.removeItem('user');
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });
    
    actionSheet.present();
  }

  ionViewDidLoad() {
    //this.getFotosTeatro();
  }
}
