import { Component, OnInit } from '@angular/core';
import { PersonajeModel } from 'models/personaje.model';
import { PersonajeService } from 'src/app/services/peronaje/personaje.service';
import Swal from 'sweetalert2';


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

  BorrarPersonaje(personaje: PersonajeModel, posicion: number) {

    Swal.fire({
      title: "Eliminar",
      text: `Esta seguro de eliminar a ${personaje.nombre}`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(data => {
      if(data.value){
        this.personajes.splice(posicion,1);
        this.personajeService.BorrarPersonaje(personaje.id).subscribe();
      }
    })
  }
}
