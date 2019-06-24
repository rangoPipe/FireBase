import { Component, OnInit } from '@angular/core';
import { PersonajeModel } from 'models/personaje.model';
import { PersonajeService } from 'src/app/services/peronaje/personaje.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  personajes: PersonajeModel[] = [];

  constructor( private personajeService: PersonajeService) {

  }

  ngOnInit() {
    this.personajeService.GetAllPersonajes()
    .subscribe( data => {
      this.personajes = data;
    });
  }

}
