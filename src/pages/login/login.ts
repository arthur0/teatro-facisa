import { Component,ElementRef,OnInit } from '@angular/core';
import { AngularFire,AuthProviders,AuthMethods } from 'angularfire2';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';
import { NavController } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit{
  

	root:any;
	constructor(public navCtrl: NavController, public element: ElementRef, public af: AngularFire){
		this.element.nativeElement
	}
	ngOnInit(){
		this.root = this.element.nativeElement;
		var loginBtn = this.root.querySelector('#loginBtn');
    var regBtn = this.root.querySelector('#registroBtn');
		var fbBtn =  this.root.querySelector('#fb-login');
		var twBtn =  this.root.querySelector('#google-login');
		loginBtn.addEventListener('click',this.onClick.bind(this));
    regBtn.addEventListener('click',this.onRegistro.bind(this));
		twBtn.addEventListener('click',this.onGoogleLogin.bind(this));
		fbBtn.addEventListener('click',this.onFacebookLogin.bind(this));
	}
	onClick(e){
		let self = this;
		let email:string = this.root.querySelector('#email').value;
		let password:string = this.root.querySelector('#password').value;
		this.af.auth.login({
			email: email,
			password: password
		},{
			provider: AuthProviders.Password,
			method: AuthMethods.Password,
		}).then(function(response){
			let user = {
				email:response.auth.email,
				picture:response.auth.photoURL
			};
      window.localStorage.setItem('user',JSON.stringify(user));
      self.navCtrl.setRoot(HomePage);
		}).catch(function(error){
			console.log(error);
		});
	}
  onRegistro(e){
    this.navCtrl.setRoot(RegistroPage);
  }
	onGoogleLogin(e){
		let self = this;
		this.af.auth.login({
			provider: AuthProviders.Google,
			method: AuthMethods.Popup
		}).then(function(response){
			let user = {
				email:response.auth.email,
				picture:response.auth.photoURL
			};
			window.localStorage.setItem('user',JSON.stringify(user));
			 self.navCtrl.setRoot(HomePage);
		}).catch(function(error){
			console.log(error);
		});
	}
	onFacebookLogin(e){
		let self = this;
		this.af.auth.login({
			provider: AuthProviders.Facebook,
			method: AuthMethods.Popup
		}).then(function(response){
			let user = {
				email:response.auth.email,
				picture:response.auth.photoURL
			};
			window.localStorage.setItem('user',JSON.stringify(user));
			self.navCtrl.setRoot(HomePage);
		}).catch(function(error){
			console.log(error);
		});
	}
}