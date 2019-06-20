import { Component, OnInit } from '@angular/core';
import { PersonajeModel } from 'models/personaje.model';
import { NgForm } from '@angular/forms';
import { PersonajeService } from 'src/app/services/peronaje/personaje.service';

import Swal, { SweetAlertType, SweetAlertArrayOptions, SweetAlertOptions } from 'sweetalert2';
import { Observable } from 'rxjs';


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
    
    this.Mensajes('Espere por favor', 'Guardando informacion', 'info', { allowOutsideClick: false});
    Swal.showLoading();

    let peticion: Observable<any>;

    peticion = (this.personaje.id) ? this.Actualizar(): this.Nuevo();

    peticion .subscribe(resp => {
      this.Mensajes(this.personaje.nombre, 'Se ejecuto correctamente',  'success');
    });
  }

  Nuevo() {
    return this.personajeService.CrearPersonaje(this.personaje);
    //.subscribe(res => console.log(res));
  }

  Actualizar() {    
    return this.personajeService.ActualizarPersonaje(this.personaje);
  }

  Mensajes(titulo: string, mensaje: string, type: SweetAlertType, opciones:SweetAlertOptions = {}) {

    opciones.title = titulo;
    opciones.text = mensaje;
    opciones.type = type;

    Swal.fire(opciones);
  }

}
