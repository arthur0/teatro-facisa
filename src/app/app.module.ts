import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AgendaPage } from '../pages/agenda/agenda';
import { FotosPage } from '../pages/fotos/fotos';
import { LoginPage } from '../pages/login/login';
import {RegistroPage} from '../pages/registro/registro';
import { NoticiasPage } from '../pages/noticias/noticias';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASkrwbgyBgxVTKncOooSFuKRA5eWpOdUo",
    authDomain: "teatro-exemplo.firebaseapp.com",
    databaseURL: "https://teatro-exemplo.firebaseio.com",
    projectId: "teatro-exemplo",
    storageBucket: "teatro-exemplo.appspot.com",
    messagingSenderId: "1068926679388"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgendaPage,
    FotosPage,
    LoginPage,
    RegistroPage,
    NoticiasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgendaPage,
    FotosPage,
    LoginPage,
    RegistroPage,
    NoticiasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
