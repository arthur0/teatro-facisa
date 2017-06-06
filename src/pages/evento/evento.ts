import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { EventoAcompanharPage } from '../evento-acompanhar/evento-acompanhar';
import { EventoAcompanharProducaoPage } from '../evento-acompanhar-producao/evento-acompanhar-producao';

@IonicPage()
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html',
})
export class EventoPage {

  imagem: String = '';
  descricao: String = '';
  titulo: String = '';
  constructor
    (
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController
    ) { }

  ionViewDidLoad() {
    let evento = this.navParams.get('evento')
    this.imagem = evento.imagem;
    this.titulo = evento.titulo;
    this.descricao = evento.descricao;
  }

  goToAcompanhar() {
    this.navCtrl.push(EventoAcompanharPage);
  }

  goToProdutor() {
    this.navCtrl.push(EventoAcompanharProducaoPage);
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Escolha um tipo',

      buttons: [
        {
          text: 'Produtor',
          handler: () => {
            this.showPrompt()
          }
        }, {
          text: 'Público',
          handler: () => {
            this.goToAcompanhar()
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
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'password',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            return;
          }
        },
        {
          text: 'Entrar',
          handler: data => {
            if (data.password === 'mateus') {
              this.goToProdutor();
            }
            else {
              let alert = this.alertCtrl.create({
                title: 'Falha na autenticação !',
                subTitle: 'Não encontramos nenhum token correpondente a esse espetáculo. Por favor verifique o TOKEN digitado e tente novamente',
                buttons: ['OK']
              });
              alert.present();
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
