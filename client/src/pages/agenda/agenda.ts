
import { Component, Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { EventoPage } from '../evento/evento';

@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html'
})

@Injectable()
export class AgendaPage {

  programacao: any;
  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {

  }

  getEventos() {
    return this.http.get('http://localhost:3000/api/eventos')
      .subscribe(
      data => {
        this.programacao = data.json();
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
