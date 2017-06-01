import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class NoticiasProvider {

  data: any;

  constructor(public http: Http) {
    console.log("CALL: NoticiasProvider")
    this.data = null;
  }

  getNoticias() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:3000/api/noticias')
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

    this.http.post('http://localhost:3000/api/noticias', JSON.stringify(noticia), { headers: headers })
      .subscribe(res => {
        console.log(res.json());
      });

  }

  deleteNoticia(id) {
    this.http.delete('http://localhost:3000/api/noticias/' + id).subscribe((res) => {
      console.log(res.json());
    });

  }
}
