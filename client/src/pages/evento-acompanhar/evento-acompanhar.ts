import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPerguntasPublicoPage } from '../evento-acompanhar/modal-perguntas-publico/modal-perguntas-publico';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

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

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    let eventoID = this.navParams.get('id')
    this.getEventos(eventoID)
  }

  getEventos(id) {
    return this.http.get('http://localhost:3000/api/eventos/' + id)
      .subscribe(
      data => {
        console.log(data.json())
        this.perguntas = data.json().questionamentos;
      }
      );
  }

  presentProfileModal(data) {
    let profileModal = this.modalCtrl.create(ModalPerguntasPublicoPage, { pergunta: data });
    profileModal.present();
  }

}
