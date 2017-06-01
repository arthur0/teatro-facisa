import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UsuariosProvider {

  data: any;

  constructor(public http: Http) {
    console.log("CALL: UsuariosProvider")
    this.data = null;
  }

  getUsuarios() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:3000/api/usuarios')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    })
  }

  createUsuario(usuario) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/api/usuarios', JSON.stringify(usuario), { headers: headers })
      .subscribe(res => {
        console.log(res.json());
      });

  }

  deleteUsuario(id) {
    this.http.delete('http://localhost:3000/api/usuarios/' + id).subscribe((res) => {
      console.log(res.json());
    });

  }
}
