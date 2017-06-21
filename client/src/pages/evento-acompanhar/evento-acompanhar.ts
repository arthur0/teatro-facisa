import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPerguntasPublicoPage } from '../evento-acompanhar/modal-perguntas-publico/modal-perguntas-publico';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import * as AppConf from '../../app/app.const'; 

@IonicPage()
@Component({
  selector: 'page-evento-acompanhar',
  templateUrl: 'evento-acompanhar.html',
})

@Injectable()
export class EventoAcompanharPage {

  perguntas: any;
  titulo: any;
  questionamentos: any;
  eventoID: any;

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.eventoID = this.navParams.get('id')
    this.getEventos()
  }

  getEventos() {
    return this.http.get(AppConf.SERVER_URL +  '/api/eventos/' + this.eventoID)
      .subscribe(
      data => {
        this.perguntas = data.json().questionamentos;
      }
      );
  }

  presentProfileModal(data) {
    let profileModal = this.modalCtrl.create(ModalPerguntasPublicoPage, { pergunta: data });
    profileModal.present();
  }

}
