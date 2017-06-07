import { Component,ElementRef,OnInit } from '@angular/core';
import { AngularFire,AuthProviders,AuthMethods } from 'angularfire2';
import { LoginPage } from '../login/login';
import { NavController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage implements OnInit{
  

	root:any;
	constructor(public navCtrl: NavController, public element: ElementRef, public af: AngularFire){
		this.element.nativeElement
	}
	ngOnInit(){
		this.root = this.element.nativeElement;
		var cancelarBtn = this.root.querySelector('#cancelarBtn');
		cancelarBtn.addEventListener('click',this.onCancelar.bind(this));
	}
	onCancelar(e){
		this.navCtrl.setRoot(LoginPage);
	}
	
}