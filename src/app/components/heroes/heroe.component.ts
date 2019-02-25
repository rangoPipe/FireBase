import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent  {

heroe : Heroe = {
  nombre :"",
  bio : "",
  origen : ""
}
id:string;


  constructor( private _HeroesService:HeroesService,
               private _router:Router,
               private _ruta:ActivatedRoute
             ) {

      this._ruta.params.subscribe( parametros => {
        this.id = parametros.id;
      })
  }

  Guardar(){
    this.id == "0" ? this.Nuevo() : this.Actualizar();
  }

  Nuevo(){
    this._HeroesService.NuevoHeroe(this.heroe)
    .subscribe(data => {
      this._router.navigate(['/heroe', data["name"]]);
    }, error => console.error(error));
  }

  Actualizar(){
    this._HeroesService.ActualizarHeroe(this.heroe, this.id)
    .subscribe(data => {
      console.log(1);
    }, error => console.error(error));
  }

}
