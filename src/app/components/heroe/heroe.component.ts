import { Component, OnInit } from '@angular/core';
import { PersonajeModel } from 'models/personaje.model';
import { NgForm } from '@angular/forms';
import { PersonajeService } from 'src/app/services/peronaje/personaje.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  personaje:PersonajeModel = new PersonajeModel();

  constructor( private personajeService: PersonajeService) { }

  ngOnInit() {
  }

  Guardar(form:NgForm) {
    if(form.invalid) return;
    console.log(this.personaje); 
    
    this.personajeService.CrearPersonaje(this.personaje)
    .subscribe(res => console.log(res));
  }

}
