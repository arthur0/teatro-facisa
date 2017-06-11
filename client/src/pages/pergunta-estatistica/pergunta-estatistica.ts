import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the PerguntaEstatisticaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pergunta-estatistica',
  templateUrl: 'pergunta-estatistica.html',
})
export class PerguntaEstatisticaPage {

  @ViewChild('barCanvas') barCanvas;

  barChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'pie',
      data: {
        datasets: [{
          data: [10, 20, 30],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ]
        }],
        labels: [
          'Red',
          'Yellow',
          'Blue'
        ]
      }
    });
  }
}
