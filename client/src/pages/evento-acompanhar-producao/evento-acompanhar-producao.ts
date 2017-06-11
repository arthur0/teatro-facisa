import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { PerguntaEstatisticaPage } from '../pergunta-estatistica/pergunta-estatistica';

@IonicPage()
@Component({
  selector: 'page-evento-acompanhar-producao',
  templateUrl: 'evento-acompanhar-producao.html',
})
export class EventoAcompanharProducaoPage {

  questionamentos: String[] = [];
  constructor
    (
      public navCtrl: NavController,
      public navParams: NavParams,
      public actionSheetCtrl: ActionSheetController,
      public alertCtrl: AlertController
    ) {
  }

  ionViewDidLoad() {

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
        }, {
          text: 'Única Escolha',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'Múltipla Escolha',
          handler: () => {
            console.log('Cancel clicked');
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
            this.questionamentos.push(data.descricao)
          }
        }
      ]
    });
    prompt.present();
  }

  goToEstatistica(data){
    this.navCtrl.push(PerguntaEstatisticaPage, {
      evento: data
    });
    
  }

}
