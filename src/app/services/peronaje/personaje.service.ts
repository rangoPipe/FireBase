import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonajeModel } from 'models/personaje.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private url:string = "https://cienciaficcion-4c04c.firebaseio.com"

  constructor( private http: HttpClient) { }

  CrearPersonaje(personaje: PersonajeModel) {
    return this.http.post(`${this.url}/personajes.json`, personaje)
    .pipe( map( (resp: any) => {
      personaje.id = resp.name;
      return personaje;
    }));
  }

  ActualizarPersonaje(personaje: PersonajeModel) {

    const temp = {
      ...personaje
    };
    delete temp.id;
    return this.http.put(`${this.url}/personajes/${personaje.id}.json`,temp);
  }

  GetAllPersonajes( ) {
    return this.http.get(`${this.url}/personajes.json`)
    .pipe(
      map( this.crearArreglo)
    );
  }

  private crearArreglo( personajeObject: object) {
    const personajes: PersonajeModel[] = [];

    if ( personajeObject === null) return [];

    Object.keys(personajeObject).forEach( k => {
      const personaje: PersonajeModel = personajeObject[k];
      personaje.id = k;
      personajes.push(personaje);
    });
    return personajes;
  }
}
