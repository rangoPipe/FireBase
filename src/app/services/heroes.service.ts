
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import  'rxjs/Rx';

@Injectable()
export class HeroesService {

  fireUrl:string = "https://fir-8a642.firebaseio.com/Heroes";


  constructor( private http:HttpClient ) {

  }

  NuevoHeroe(heroe:Heroe){
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      "Content-Type":"application/json"
    });
    let url:string = `${this.fireUrl}.json`;

    return this.http.post(
      url,
      body,
      { headers : headers}
    ).map( res => {
      console.log(res);
      return res;
    })
  }

  ActualizarHeroe(heroe:Heroe, key$:string ){
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      "Content-Type":"application/json"
    });
    let url:string = `${this.fireUrl}/${ key$ }.json`;

    return this.http.put(
      url,
      body,
      { headers : headers}
    ).map( res => {
      console.log(res);
      return res;
    })
  }

}
