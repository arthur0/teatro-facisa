import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-perguntas-publico',
  templateUrl: 'modal-perguntas-publico.html',
})
export class ModalPerguntasPublicoPage {

  perguntas: any
  descricao: any
  tipo: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) { }

  ionViewDidLoad() {
    let evento = this.navParams.get('pergunta')
    this.perguntas = evento.perguntas;
    this.descricao = evento.descricao;
    this.tipo = evento.tipo;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
