import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AgendaPage } from '../pages/agenda/agenda';
import { FotosPage } from '../pages/fotos/fotos';
import { LoginPage } from '../pages/login/login';
import { NoticiasPage } from '../pages/noticias/noticias';
import { EventoPage } from '../pages/evento/evento';
import { EventoAcompanharPage } from '../pages/evento-acompanhar/evento-acompanhar';
import { ModalPerguntasPublicoPage } from '../pages/evento-acompanhar/modal-perguntas-publico/modal-perguntas-publico';
import { EventoAcompanharProducaoPage } from '../pages/evento-acompanhar-producao/evento-acompanhar-producao';
import { PerguntaEstatisticaPage } from '../pages/pergunta-estatistica/pergunta-estatistica';
import { AddNoticiaPage } from '../pages/noticias/add-noticia';

import { AngularFireMEU } from '../providers/af'
import { NoticiasProvider } from '../providers/noticias/noticias';

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
    NoticiasPage,
    EventoPage,
    EventoAcompanharPage,
    ModalPerguntasPublicoPage,
    EventoAcompanharProducaoPage,
    PerguntaEstatisticaPage,
    EventoPage,
    EventoAcompanharPage,
    ModalPerguntasPublicoPage,
    EventoAcompanharProducaoPage,
    PerguntaEstatisticaPage,
    AddNoticiaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  entryComponents: [
    MyApp,
    HomePage,
    AgendaPage,
    FotosPage,
    LoginPage,
    NoticiasPage,
    EventoPage,
    EventoAcompanharPage,
    ModalPerguntasPublicoPage,
    EventoAcompanharProducaoPage,
    PerguntaEstatisticaPage,
    LoginPage,
    NoticiasPage,
    AddNoticiaPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoticiasProvider,
    AngularFireMEU
  ],
  bootstrap: [IonicApp]
})
export class AppModule {}
