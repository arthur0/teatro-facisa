import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import * as AppConf from '../../app/app.const'; 

@IonicPage()
@Component({
  selector: 'page-fotos',
  templateUrl: 'fotos.html',
})
export class FotosPage {

  fotos: any;
  fotosImpar: string[] = new Array();
  fotosPar: string[] = new Array();
  show: boolean;

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  getFotos() {
    return this.http.get(AppConf.SERVER_URL + '/api/fotos')
    .subscribe(
      data => {
        this.fotos = data.json();
        this.addFotosInList(data.json());
      }
      );
  };

  addFotosInList(lista) {
    for (let i = 0; i < lista.length; i++) {
      if((i+1) & 1){
        this.fotosImpar.push(lista[i]);
      } else {
        this.fotosPar.push(lista[i]);
      }
    }
  };

  ionViewDidLoad() {
    this.getFotos();
    this.show = true;
  }


}
