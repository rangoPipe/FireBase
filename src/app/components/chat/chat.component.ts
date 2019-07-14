import { Component } from '@angular/core';
import { ChatService } from '../../service/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent {

  mensaje: string = "";

  constructor(public _cs: ChatService) {
    this._cs.cargarMensajes().subscribe();
   }

  enviar_mensaje() {
    console.log(this.mensaje);
    if(this.mensaje.length === 0) {
      return;
    }

    this._cs.agregarMensaje(this.mensaje)
      .then( () => {
        this.mensaje = "";
        console.log('guardo correctamente');
      })
      .catch( (ex) => console.error(ex));
    
  }
}
