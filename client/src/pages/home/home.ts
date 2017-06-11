import { Component ,OnInit} from '@angular/core';
import { NavController, ActionSheetController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  dataLogin: boolean;
  user: string = '' ;
  picture: string = '';
  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController) {
  }
  ngOnInit(){
    var response = JSON.parse(window.localStorage.getItem('user'));
    if(response !== null){
      this.dataLogin = true;
      this.user = response.displayName;
    }
  }
  abrirLogout() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opções',
      buttons: [
        {
          text: 'Sair',
          handler: () => {
            window.localStorage.removeItem('user');
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });
    actionSheet.present();
  }
}
