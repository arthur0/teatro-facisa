import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { PerguntaEstatisticaPage } from '../pergunta-estatistica/pergunta-estatistica';
import { Http } from '@angular/http';

import * as AppConf from '../../app/app.const';

@IonicPage()
@Component({
  selector: 'page-evento-acompanhar-producao',
  templateUrl: 'evento-acompanhar-producao.html',
})
export class EventoAcompanharProducaoPage {

  questionamentos: String[] = [];
  evento: Object;
  perguntaCriada: any;
  eventoID: any;
  constructor
    (
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    private http: Http,
  ) {
  }

  ionViewDidLoad() {
    let evento = this.navParams.get('evento');
    this.evento = evento;
    this.eventoID = evento._id;
    this.getEvento();
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Escolha um tipo',
      buttons: [
        {
          text: 'Aberta',
          handler: () => {
            this.showPrompt()
          }
        }
        // , {
        //   text: 'Única Escolha',
        //   handler: () => {
        //     console.log('Archive clicked');
        //   }
        // }, {
        //   text: 'Múltipla Escolha',
        //   handler: () => {
        //     console.log('Cancel clicked');
        //   }
        // }, {
        //   text: 'Cancel',
        //   role: 'cancel',
        //   handler: () => {
        //     console.log('Cancel clicked');
        //   }
        // }
      ]
    });
    actionSheet.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Questão aberta',
      message: 'Digite a questão você quer realizar ao público que está assistindo',
      inputs: [
        {
          name: 'descricao',
          placeholder: 'Digite:'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            let evento = this.evento
            this.salvarQuestao(evento, data.descricao)

          }
        }
      ]
    });
    prompt.present();
  }

  goToEstatistica(data) {
    this.navCtrl.push(PerguntaEstatisticaPage, {
      evento: data
    });

  }

  putEvento(evento) {
    return this.http.put(AppConf.SERVER_URL + '/api/eventos/' + evento._id, this.perguntaCriada)
      .subscribe(
      data => {
        let alert = this.alertCtrl.create({
          title: 'Sucesso !',
          subTitle: 'Pergunta criada com sucesso, logo ela estará disponível para o público',
          buttons: ['OK']
        });
        alert.present();
        this.getEvento();
      }
      );
  }

  salvarQuestao(evento, questao) {

    let reqObj = {
      descricao: questao,
      tipo: 'aberta',
      questoes: []
    }

    return this.http.post(AppConf.SERVER_URL + '/api/perguntas', reqObj)
      .subscribe(
      data => {
        this.perguntaCriada = data.json();
        this.putEvento(evento);
      }
      );
  }

  getEvento() {
    return this.http.get(AppConf.SERVER_URL + '/api/eventos/' + this.eventoID)
      .subscribe(
      data => {
        this.questionamentos = data.json().questionamentos
      }
      );
  }
}
