import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

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
    return this.http.get('assets/fotos.json')
    .subscribe(
      data => {
        console.log(data.json())
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
    console.log('ListaImpar: ', this.fotosImpar);
    console.log('ListaPar: ', this.fotosPar);
  };

  ionViewDidLoad() {
    this.getFotos();
    this.show = true;
  }


}
