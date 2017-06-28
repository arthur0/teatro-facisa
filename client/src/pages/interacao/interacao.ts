import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController, AlertController } from 'ionic-angular';
import { EventoAcompanharPage } from '../evento-acompanhar/evento-acompanhar';
import { Http } from '@angular/http';
import * as AppConf from '../../app/app.const';

@IonicPage()
@Component({
  selector: 'page-interacao',
  templateUrl: 'interacao.html',
})
@Injectable()
export class InteracaoPage {

  programacao: Array<Object>;

  loader = this.loadingCtrl.create({
    content: "Aguarde, buscando informações..."
  });

  constructor(public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, private http: Http, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {

    this.getEventos();

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

  presentActionSheet(evento) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Escolha um tipo',

      buttons: [
        {
          text: 'Faça uma pergunta',
          handler: () => {
            this.showPrompt(evento);
          }
        }, {
          text: 'Responda a Perguntas',
          handler: () => {
            this.goToAcompanhar(evento);
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  putEvento(evento, pergunta) {
    // this.loader.present();
    return this.http.put(AppConf.SERVER_URL + '/api/eventos/' + evento._id, pergunta)
      .subscribe(
      data => {
        // this.loader.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Sucesso !',
          subTitle: 'Pergunta criada com sucesso, logo ela estará disponível para o público',
          buttons: ['OK']
        });
        alert.present();
        // this.getEvento();
      }
      );
  }

  salvarQuestao(evento, questao) {
    // this.loader.present();
    let reqObj = {
      descricao: questao,
      tipo: 'aberta',
      questoes: []
    }

    return this.http.post(AppConf.SERVER_URL + '/api/perguntas', reqObj)
      .subscribe(
      data => {
        // this.perguntaCriada = data.json();
        // this.loader.dismiss();
        this.putEvento(evento, data.json());
      }
      );
  }


  showPrompt(evento) {
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
            this.salvarQuestao(evento, data.descricao)

          }
        }
      ]
    });
    prompt.present();
  }

  goToAcompanhar(evento) {
    this.navCtrl.push(EventoAcompanharPage, { id: evento._id });
  }

}
