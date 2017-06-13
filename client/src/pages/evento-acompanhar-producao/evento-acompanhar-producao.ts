import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { PerguntaEstatisticaPage } from '../pergunta-estatistica/pergunta-estatistica';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-evento-acompanhar-producao',
  templateUrl: 'evento-acompanhar-producao.html',
})
export class EventoAcompanharProducaoPage {

  questionamentos: String[] = [];
  evento: Object;
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
            // this.questionamentos.push(data.descricao)
            let a = this.evento
            this.putEvento(a,data.descricao)

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

  putEvento(evento, questao) {
    evento.questionamentos.push(questao);
    return this.http.put('http://localhost:3000/api/eventos/' + evento._id, evento )
      .subscribe(
      data => {
        console.log(data.json())
        console.log(data.json()._body)
        // this.perguntas = data.json().questionamentos;
      }
      );
  }


}
