import { Component, OnInit } from '@angular/core';
import { PersonajeModel } from 'models/personaje.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  personaje:PersonajeModel = new PersonajeModel();

  constructor() { }

  ngOnInit() {
  }

  Guardar(form:NgForm) {
    if(form.invalid) return;
    console.log(this.personaje); 
  }

}
