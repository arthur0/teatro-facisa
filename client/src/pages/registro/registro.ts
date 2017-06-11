import { Component,ElementRef,OnInit } from '@angular/core';

import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {HomePage} from '../home/home'
import { LoginPage } from '../login/login';
import { NavController, ToastController } from 'ionic-angular';


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
	public messages: FirebaseListObservable<any>;
  	public users: FirebaseListObservable<any>;
  	public displayName: string;
  	public email: string;
  	public user: FirebaseObjectObservable<any>;

	constructor(public navCtrl: NavController, public element: ElementRef, public af: AngularFire, private toastCtrl: ToastController){
		this.element.nativeElement;
		 this.af.auth.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = this.af.database.object('users/' + auth.uid);
        }
      });

    this.messages = this.af.database.list('messages');
    this.users = this.af.database.list('users');
	}
	ngOnInit(){
		this.root = this.element.nativeElement;
		var cancelarBtn = this.root.querySelector('#cancelarBtn');
		cancelarBtn.addEventListener('click',this.onCancelar.bind(this));
	}
	onSalvar(event, name, email, password){
		console.log(email);
		event.preventDefault();
    		this.registerUser(email, password).then((user) => {
      			this.saveUserInfoFromForm(user.uid, name, email).then(() => {
					this.navCtrl.setRoot(HomePage);
      			})
        		.catch((error) => {
          			console.log("Error");
        		});
    		})
      		.catch((error) => {
				  
        		console.log("this.error", error);
				this.presentToast(error.message);
				
      		});
	}
	onCancelar(e){
		this.navCtrl.setRoot(LoginPage);
	}
	presentToast(string){
		let toast = this.toastCtrl.create({
    message: string,
    duration: 3000,
    position: 'top'
  });
    

  toast.present();
	}

	
	

  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  /**
   * Logs out the current user
   */
  logout() {
    return this.af.auth.logout();
  }

  /**
   *
   */
  addUserInfo(){
    //We saved their auth info now save the rest to the db.
    this.users.push({
      email: this.email,
      displayName: this.displayName
    });
  }

  /**
   * Saves a message to the Firebase Realtime Database
   * @param text
   */
  sendMessage(text) {
    var message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      timestamp: Date.now()
    };
    this.messages.push(message);
  }

  /**
   *
   * @param model
   * @returns {firebase.Promise<void>}
   */
  registerUser(email, password) {
    console.log(email)
    return this.af.auth.createUser({
      email: email,
      password: password
    });


  }

  /**
   *
   * @param uid
   * @param model
   * @returns {firebase.Promise<void>}
   */
  saveUserInfoFromForm(uid, name, email) {
    return this.af.database.object('registeredUsers/' + uid).set({
      name: name,
      email: email,
    });
  }

  /**
   * Logs the user in using their Email/Password combo
   * @param email
   * @param password
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithEmail(email, password) {
    return this.af.auth.login({
        email: email,
        password: password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  }

}
