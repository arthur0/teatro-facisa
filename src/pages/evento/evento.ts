import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventoAcompanharPage } from '../evento-acompanhar/evento-acompanhar';

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage {

  imagem: String = '';
  descricao: String = '';
  titulo: String = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let evento = this.navParams.get('evento')
    this.imagem = evento.imagem;
    this.titulo = evento.titulo;
    this.descricao = evento.descricao;
  }

  acompanhar(data) {
    this.navCtrl.push(EventoAcompanharPage, {
      evento: data
    });
  }

}
