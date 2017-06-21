
import { Component, Injectable } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { EventoPage } from '../evento/evento';


import * as AppConf from '../../app/app.const';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})

@Injectable()
export class AgendaPage {

  programacao: any;

  loader = this.loadingCtrl.create({
    content: "Aguarde, buscando informações..."
  });

  constructor(public loadingCtrl: LoadingController, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  getEventos() {
    this.loader.present();
    return this.http.get(AppConf.SERVER_URL + '/api/eventos')
      .subscribe(
      data => {
        this.programacao = data.json();
        this.loader.dismiss();
      }
      );
  }

  detalharEvento(data) {
    this.navCtrl.push(EventoPage, {
      evento: data
    });
  }

  ionViewDidLoad() {
    this.getEventos();
  }
}
