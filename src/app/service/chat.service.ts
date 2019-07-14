import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interface/mensaje';

import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];

  constructor( private afs: AngularFirestore) { 

  }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats');
    return this.itemsCollection.valueChanges().pipe(
      map( (mensajes: Mensaje[]) =>{

        this.chats = [];

        for ( let mensaje of mensajes ){
          this.chats.unshift( mensaje );
        }

        return this.chats;
        })
    );
  }

  agregarMensaje(texto:string){
    let mensaje:Mensaje = {
      nombre: "Prueba",
      mensaje: texto,
      fecha: new Date().getTime(),
      uid:""
    }

    return this.itemsCollection.add(mensaje);

  }
}
