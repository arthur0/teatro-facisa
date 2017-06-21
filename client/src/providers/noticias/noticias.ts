import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import * as AppConf from '../../app/app.const'; 


@Injectable()
export class NoticiasProvider {

  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  getNoticias() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(AppConf.SERVER_URL + '/api/noticias')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    })
  }

  createNoticia(noticia) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post(AppConf.SERVER_URL + '/api/noticias', JSON.stringify(noticia), { headers: headers })
      .subscribe(res => {
        console.log(res.json());
      });

  }

  deleteNoticia(id) {
    this.http.delete(AppConf.SERVER_URL + '/api/noticias/' + id).subscribe((res) => {
      console.log(res.json());
    });

  }
}
