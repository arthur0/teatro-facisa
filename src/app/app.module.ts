import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AgendaPage } from '../pages/agenda/agenda';
import { FotosPage } from '../pages/fotos/fotos';
import { LoginPage } from '../pages/login/login';
import { NoticiasPage } from '../pages/noticias/noticias';
import { EventoPage } from '../pages/evento/evento';
import { EventoAcompanharPage } from '../pages/evento-acompanhar/evento-acompanhar';
import { ModalPerguntasPublicoPage } from '../pages/evento-acompanhar/modal-perguntas-publico/modal-perguntas-publico';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    ModalPerguntasPublicoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgendaPage,
    FotosPage,
    LoginPage,
    NoticiasPage,
    EventoPage,
    EventoAcompanharPage,
    ModalPerguntasPublicoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
